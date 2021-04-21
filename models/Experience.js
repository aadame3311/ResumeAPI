const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    companyName: {
        type: String, 
        required: true
    },
    position: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: false
    },
    state: {
        type: String, 
        required: false
    },
    country: {
        type: String, 
        default: "United States"
    },
    jobDescription: {
        type: String, 
        required: false
    },
    startMonth: {
        type: String, 
        required: true
    },
    startYear: {
        type: String, 
        required: true
    },
    endMonth: {
        type: String,
        required: false
    },
    endYear: {
        type: String, 
        required: false
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);