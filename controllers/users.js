
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

//create a user using sign up details
users.post('/', async (req, res) => {
    let {password, ...remain} = req.body
    const user = await User.create({
        ...remain,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})
  
//read all user details
users.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})


module.exports = users