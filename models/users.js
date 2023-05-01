const mongoose = require('mongoose')

//schema for blogs 
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    passwordDigest: {type: String, required: true}
})
module.exports = mongoose.model('User', userSchema)

