var express = require('express'); // Used express module
var logger = require('morgan');
var database = require('./scripts/model/database');
var bodyParser = require('body-parser');
var app = express();
var mockRouter = require('./scripts/routing/mockRouter');

/**
 * Use the logger in the development mode
 */
app.use(logger('dev'));

/**
 * Database initialisation.
 */
database.initialiseDB();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/**
 * We define authorisation for http requests.
 */
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // We define the right to call the server.
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // We define all methods we can use
    next();
});

/**
 * We define to app the router it has to use in the address localhost:3000/
 */
app.use('/mock', mockRouter);
// Generator hook! Do not remove this line

module.exports = app;
