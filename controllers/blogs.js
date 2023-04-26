const express = require('express')
const blogs = express.Router()
const Blog = require('../models/blogs.js')

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
blogs.post('/', (req, res) => {
    Blog.create (req.body)
        .then ( data => {
            res.status(200).json(data)
        })
        .catch ( error => {
            res.json(error)
        })
})

module.exports = blogs
