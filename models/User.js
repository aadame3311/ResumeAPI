const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_key: {
        type: String,
        default: '',
        required: false
    },
    email: {
        type: String, 
        required: true
    },
    active: {
        type: Boolean,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);