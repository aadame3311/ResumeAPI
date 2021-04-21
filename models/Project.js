const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    projectUrl: {
        type: String, 
        required: false
    },
    description: {
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
    },

});

module.exports = mongoose.model('Project', ProjectSchema);