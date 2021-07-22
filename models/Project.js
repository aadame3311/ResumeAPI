const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    user_key: {
        type: String, 
        default: '',
        required: false
    },
    name: {
        type: String, 
        required: true
    },
    project_url: {
        type: String, 
        required: false
    },
    description: {
        type: String, 
        required: false  
    },
    start_month: {
        type: String,
        required: true
    },
    start_year: {
        type: String,
        required: true
    },
    end_month: {
        type: String,
        required: false
    },
    end_year: {
        type: String,
        required: false
    },

});

module.exports = mongoose.model('Project', ProjectSchema);