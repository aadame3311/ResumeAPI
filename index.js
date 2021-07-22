require('dotenv/config');

const express = require('express');
const port = 3000;
const mongoose = require('mongoose');

const User = require('./models/User');

const educationRoutes = require('./routes/education');
const workExperienceRoutes = require('./routes/experience');
const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/user');

var app = express();

app.use(express.json());
app.set('json spaces', 4);

/**
 * Verify user_key. 
 * We should not let anyone make a request without a 
 * valid user_key parameter.
 */
app.use((req, res, next) => {
    let response = {
        message: ''
    };
    
    if (!req.originalUrl.includes("api/v1/user")) {
        // validate user_key
        User.findOne({user_key: req.body.user_key}, function (err, user) {
            if (user == null) {
                response.message = 'Invalid user_key';
                res.json(response);
            } else {
                next();
            }
        });
    } else next();
});

app.use('/api/v1/education', educationRoutes);
app.use('/api/v1/experience', workExperienceRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/user', userRoutes);


// MongoDB connection
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true }, 
    () => console.log('connected to DB!'));

app.get('/', (req, res) => {
    res.send('On Home Page');
});

app.listen(3000, () => console.log('Listening on port 3000'));