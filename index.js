const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const blogController = require('./controllers/blogs.js')
const mongoose = require('mongoose')
const bodyParser =require('body-parser')


//Middleware
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.send('API for Travel Blog web application')
})

//Redirecting all requests for blog to blog controller
app.use ('/api/blogs', blogController)


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

