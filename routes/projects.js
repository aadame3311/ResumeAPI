const express = require('express');
const routes = express.Router();
const Project = require('../models/Project');

// GET: education/
routes.get('/', async (req, res) => {
    try {
        const project = await Project.find();
        res.json(project);
    } catch (err) {
        res.json({message: err});
    }
});

// POST: project/
routes.post('/', async (req, res) => {
    const project = new Project(req.body);
    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// DELETE: project/:id
routes.delete('/:id', async(req, res) => {
    try {
        const deletedProject = await Project.remove({_id: req.params.id});
        res.json(deletedProject);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

// PATCH: project/:id
routes.patch('/:id', async (req, res) => {
    const fieldName = req.body.field;
    const value = req.body.value;

    try {
        const updatedProject = await Project.updateOne(
            { _id: req.params.id },
            { $set: { [fieldName]: value } }
        )

        res.json(updatedProject);
    } catch (err) {
        res.json({message: "Unexpected error. Please try again."});
    }
});

module.exports = routes;