const express = require('express');
const routes = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");

// POST: user/
routes.get('/', async (req, res) => {
    try {
        let message = Date.now().toString();
        let user_key = CryptoJS.SHA256(message).toString().substr(0, 16);
        
        let user = new User({
            user_key: user_key,
            active: 1
        });

        const savedUser = await user.save();
        res.json({user_key: savedUser.user_key});
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

module.exports = routes;