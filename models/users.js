const mongoose = require('mongoose')

//schema for blogs 
const userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    passwordDigest: {type: String}
})
module.exports = mongoose.model('User', userSchema)