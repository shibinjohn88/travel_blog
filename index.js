const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const blogController = require('./controllers/blogs.js')
const userController = require('./controllers/users.js')
const authenticationController = require('./controllers/authentication.js')
const mongoose = require('mongoose')
const bodyParser =require('body-parser')
const cors = require('cors')


//Middleware
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//enable all CORS request
app.use(cors())
//make posters folder static in express
app.use('/posters', express.static(__dirname + '/posters'))

app.get('/api', (req, res) => {
  res.send('API for Travel Blog web application')
})

//redirecting to controllers
app.use ('/api/blogs', blogController)
app.use ('/api/users', userController)
app.use ('/api/auth', authenticationController)


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

