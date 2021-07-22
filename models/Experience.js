const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    user_key: {
        type: String, 
        default: '',
        required: false
    },
    company_name: {
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
    job_description: {
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
    }
});

module.exports = mongoose.model('Experience', ExperienceSchema);