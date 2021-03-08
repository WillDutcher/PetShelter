const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "Please enter a first name" ],
        minlength: [ 2, "First name must be at least two characters in length" ]
    },
    lastName: {
        type: String,
        required: [ true, "Please enter a last name" ],
        minlength: [ 2, "Last name must be at least two characters in length" ]
    },
    birthdate: {
        type: Date,
        required: [ true, "Please enter your date of birth" ]
    },
    email: {
        type: String,
        required: [ true, "Please enter an email address" ]
    },
    password: {
        type: String,
        minlength: [ 8, "Your password must be at least 8 characters in length" ],
        maxlength: [ 8, "Your password must be no more than 12 characters in length" ],
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);