const express = require('express');
require('dotenv').config({ path: './config/.env' });
const usersRoutes = require('./routes/users.routes');
require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


// cors
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));


// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api/users', usersRoutes);


// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})