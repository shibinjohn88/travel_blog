const express = require('express')
const authentication = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

//receive sign in details
authentication.post('/', async (req, res) => {
    let user = await User.findOne({
        email: req.body.email
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            error: `incorrect username or password` 
        })
    } else {
        res.json({ user })
    }
})

module.exports = authentication
