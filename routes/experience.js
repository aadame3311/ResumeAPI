const express = require('express');
const routes = express.Router();
const Experience = require('../models/Experience');

// experience/
routes.get('/', async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (err) {
        res.json({message: err});
    }
});

// experience/
routes.post('/', async (req, res) => {
    const experience = new Experience(req.body);
    try {
        const savedExperience = await experience.save();
        res.json(savedExperience);
    } catch (err) {
        res.json({message: err});
    }
});

// experience/:id
routes.delete('/:id', async(req, res) => {
    try {
        const deletedExperience = await Experience.remove({_id: req.params.id});
        res.json(deletedExperience);
    } catch (err) {
        res.json({message: err});
    }
});

// experience/:id
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
        res.json({message: err})
    }
});

module.exports = routes;