const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [ true, "Please enter a pet name" ],
        minlength: [ 3, "Pet name must be at least three characters in length" ]
    },
    petType: {
        type: String,
        required: [ true, "Please enter a pet type" ],
        minlength: [ 3, "Pet type must be at least three characters in length" ]
    },
    petDesc: {
        type: String,
        required: [ true, "Please enter a pet description" ],
        minlength: [ 3, "Pet description must be at least three characters in length" ]
    },
    petSkillOne: {
        type: String,
    },
    petSkillTwo: {
        type: String,
    },
    petSkillThree: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);