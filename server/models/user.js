var mongoose = require('mongoose')

var userModel = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true, 
        minlength: 1
    },
})

module.exports = {User: userModel}