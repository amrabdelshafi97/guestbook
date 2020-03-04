const express = require('express');
const morgan = require('morgan');
const connectDB = require('./database/db');
const debug = require('debug')('app:app');

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(morgan('tiny'));

//open mongoDB connection 
connectDB();

//routes
//creating user for registering users -- authentication purpose
app.use('/api/register', require('./routes/register'));
//login route
app.use('/api/login', require('./routes/login'));
//messages route
app.use('/api/message', require('./routes/message'));
//reply route
app.use('/api/reply', require('./routes/reply'));

//Port No.
const port = process.env.PORT || 5000;

//listen at port
const server = app.listen(port, () => debug(`Listening on port ${port}...`));

module.exports = server;