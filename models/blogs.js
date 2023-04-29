const mongoose = require('mongoose')

//schema for blogs 
const blogSchema = new mongoose.Schema({
    blog_title: {type: String},
    blog_poster: {type: String},
    blog_description: {type: String},
    blog_place: {type: String},
    blog_country: {type: String},
    blog_article: {type: String},
    blog_author: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    }, {
        timestamps: true
    })

module.exports = mongoose.model('Blog', blogSchema)
