require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { clientPromise } = require("./config/database")

clientPromise.catch((err) => {
    console.log(err)
    process.exit()
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

// *** Middleware globals
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ***

/**
 * ROUTES
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Route not found
app.use('*', function (req, res) {
    res.status(404).json({
        message: "Route not found"
    })
})

module.exports = app;
