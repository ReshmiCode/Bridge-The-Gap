const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const users = require('./routes/users');
const posts = require('./routes/posts');
const resources = require('./routes/resources');
const questions = require('./routes/questions');

const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.use(
    '/api/v1/users', 
    users
);

app.use(
    '/api/v1/posts', 
    posts
);

app.use(
    '/api/v1/resources', 
    resources
);

app.use(
    '/api/v1/questions', 
    questions
);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);