const mongoose = require('mongoose')
const validator = require('validator')



const User = mongoose.model('user', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is wrong')
            }
        }
    },

    password: {
        type : String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
               throw new Error('password cannot contain password') 
            }
        }
    },

    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('age must be a postive number')
            }
        }
    }
})

module.exports = User