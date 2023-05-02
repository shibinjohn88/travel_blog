const express = require('express')
const blogs = express.Router()
const Blog = require('../models/blogs.js')
const multer = require('multer')
const filesystem = require('fs')
const jwt = require('json-web-token')

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

//read specific blog based on id
blogs.get('/:id', async (req, res) => {
    try {
        const result = await Blog.findById(req.params.id).populate('blog_author')
        // console.log(author)
        res.status(200).json(result)
    }
    catch (error) {
        //console.log("there is an error")
        res.json(error)
    }
    
})

//read specific blog using destination
blogs.get('/destination/:place', async (req, res) => {
    try {
        const result = await Blog.find({blog_place: req.params.place})
        // console.log(author)
        res.status(200).json(result)
    }
    catch (error) {
        //console.log("there is an error")
        res.json(error)
    }
})

//write blog to database
blogs.post('/', posters.single('file'), (req, res) => {
    
    
    const {originalname, path} = req.file
    const array = originalname.split('.')
    const extension = array[array.length - 1]
    const newPath = path + '.' + extension
    filesystem.renameSync(path, newPath)
    
    
    const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod === 'Bearer') {
            const result = jwt.decode(process.env.JWT_SECRET, token)
            const {id} = result.value

            Blog.create ({...req.body, blog_poster: newPath, blog_author: id})
                .then ( data => {
                    res.status(200).json(data)
                })
                .catch ( error => {
                    res.json(error)
                })
        }
})

//delete a blog 
blogs.delete ('/:id', async (req, res) => {

    const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod === 'Bearer') {
            const result = jwt.decode(process.env.JWT_SECRET, token)
            const {signedUser_id} = result.value
            const data = await Blog.findById(req.params.id).populate('blog_author')
            const id = data.blog_author._id
            //check signed user is the author of the blog
            if (signedUser_id === id) {
                console.log("signed user is the author")
                res.status(200).json('author')
            }
            else {
                res.status(400).json('Only author of the blog can delete the post')
            }
        }
    
    
    // Blog.findByIdAndDelete (req.params.id)
    //     .then (data => {
    //         res.status (200).json ('Delete Successful')
    //     })
    //     .catch (err => {
    //         res.json (err)
    //     })
})

module.exports = blogs
