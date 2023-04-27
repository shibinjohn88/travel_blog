const express = require('express')
const authentication = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

//receive sign in details
authentication.post('/', async (req, res) => {
    console.log('request received for authentication')
})

module.exports = authentication
