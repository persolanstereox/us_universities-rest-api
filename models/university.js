const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UniversitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }


});

module.exports = mongoose.model('universities', UniversitySchema);