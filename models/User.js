const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_key: {
        type: String,
        default: '',
        required: false
    },
    active: {
        type: Boolean,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);