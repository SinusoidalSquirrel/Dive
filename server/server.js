var express = require('express');
// var db = require('./db/config.js');
var mongoose = require('mongoose');

var app = express();

// connect to mongoose database named dive
mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/dive');

require('./middleware')(app, express);

module.exports = app;
