require('dotenv/config');

const express = require('express');
const port = 3000;
const mongoose = require('mongoose');
const educationRoutes = require('./routes/education');
const workExperienceRoutes = require('./routes/experience');
const projectRoutes = require('./routes/projects');

var app = express();

// Middleware
app.use(express.json());

app.use('/education', educationRoutes);
app.use('/experience', workExperienceRoutes);
app.use('/projects', projectRoutes);


// MongoDB connection
const connectionString = process.env.CONNECTION_STRING;
mongoose.connect(connectionString, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to DB!'));

app.get('/', (req, res) => {
    res.send('On Home Page');
});

app.listen(3000, () => console.log('Listening on port 3000'));