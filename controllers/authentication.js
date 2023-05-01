const express = require('express')
const authentication = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

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
        const output = await jwt.encode(process.env.JWT_SECRET, { id: user._id })
        res.json({ user: user, token: output.value })
    }
})

//read user details of current logged user
authentication.get('/', async (req, res) => {

    

    try {
        //array destructuring of authorization header
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod === 'Bearer') {
            //decode JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const {id} = result.value

            let user = await User.findOne({
                _id: id
            })
            res.json(user)
        }
        
    }
    catch {
        res.json(null)
    }
})

module.exports = authentication
