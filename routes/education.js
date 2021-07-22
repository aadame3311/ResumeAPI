const express = require('express');
const routes = express.Router();
const Education = require('../models/Education');

// GET: education/
routes.get('/', async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// POST: education/
routes.post('/', async (req, res) => {
    const education = new Education(req.body);
    try {
        const savedEducation = await education.save();
        res.json(savedEducation);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// DELETE: education/:id
routes.delete('/:id', async(req, res) => {
    try {
        const deletedEducation = await Education.remove({_id: req.params.id});
        res.json(deletedEducation);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// PATCH: education/:id
routes.patch('/:id', async (req, res) => {
    const fieldName = req.body.field;
    const value = req.body.value;

    try {
        const updatedEducation = await Education.updateOne(
            { _id: req.params.id },
            { $set: { [fieldName]: value } }
        )

        res.json(updatedEducation);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."})
    }
});

module.exports = routes;