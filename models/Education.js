const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    degreeType: {
        type: String, 
        required: true  
    },
    major: {
        type: String, 
        required: true
    },
    gpa: {
        type: Number, 
        required: false
    },
    graduationMonth: {
        type: String,
        required: true
    },
    graduationYear: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Education', EducationSchema);