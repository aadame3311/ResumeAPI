const express = require('express');
const routes = express.Router();
const Experience = require('../models/Experience.js');

// GET: experience/
routes.get('/', async (req, res) => {
    try {
        const experience = await Experience.find({ user_key: req.body.user_key });
        res.json(experience);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// POST: experience/
routes.post('/', async (req, res) => {
    const experience = new Experience(req.body);
    try {
        const savedExperience = await experience.save();
        res.json(savedExperience);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

/**
 * DELETE: experience/:id
 * deletes experience by id for user with user_key
 */ 
routes.delete('/:id', async(req, res) => {
    try {
        const deletedExperience = await Experience.remove({ _id: req.params.id, user_key: req.body.user_key});
        res.json(deletedExperience);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// DELETE: experience/
/**
 * DELETE: experience/
 * deletes all experience data for user with user_key
 */
routes.delete('/', async (req, res) => {
    try {
        await Experience.deleteMany({user_key: req.body.user_key});
        res.json({message: "Success."});
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
})

// PATCH: experience/:id
routes.patch('/:id', async (req, res) => {
    const fieldName = req.body.field;
    const value = req.body.value;

    try {
        const updatedExperience = await Experience.updateOne(
            { _id: req.params.id },
            { $set: { [fieldName]: value } }
        )

        res.json(updatedExperience);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

module.exports = routes;