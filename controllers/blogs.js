const express = require('express')
const blogs = express.Router()
const Blog = require('../models/blogs.js')
const multer = require('multer')
const filesystem = require('fs')

//destination to upload files 
const posters = multer({
    dest: './posters'
})

//Read blogs from database
blogs.get('/', (req, res) => {
    Blog.find ()
        .then ( data => {
            res.status(200).json(data)
        })
        .catch ( error => {
            res.json(error)
        })
})

//write blog to database
blogs.post('/', posters.single('file'), (req, res) => {
    const {originalname, path} = req.file
    const array = originalname.split('.')
    const extension = array[array.length - 1]
    const newPath = path + '.' + extension
    filesystem.renameSync(path, newPath)

    Blog.create ({...req.body, blog_poster: newPath})
        .then ( data => {
            res.status(200).json(data)
        })
        .catch ( error => {
            res.json(error)
        })
})

module.exports = blogs
