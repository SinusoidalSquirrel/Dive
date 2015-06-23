var express = require('express');
var app = express();
var db = require('./db/config.js');

require('./middleware')(app, express);
module.exports = app;
