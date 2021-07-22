const express = require('express');
const routes = express.Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");

const emailValidation = async (email) => {
    if (typeof email === 'undefined' || email == null || email === '') return {
        success: false,
        message: "Email field is required."
    };

    let user = await User.findOne({ email: email, active: true }).exec();
    console.log('user', user);
    if (user != null) return {
        success: false,
        message: "Email is already in use."
    };

    return {
        success: true,
        message: "Success."
    };
}

// POST: user/
routes.post('/', async (req, res) => {
    try {
        const emailValidationResult = await emailValidation(req.body.email);

        if (emailValidationResult.success === false) {
            res.json({
                message: emailValidationResult.message
            });
        } else {
            let user_key = CryptoJS.SHA256(req.body.email).toString().substr(0, 16);
            
            let user = new User({
                user_key: user_key,
                email: req.body.email,
                active: 1
            });
    
            const savedUser = await user.save();
            res.json({
                user_key: savedUser.user_key
            });
        }

    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

module.exports = routes;