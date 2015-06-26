var Rater = require('./rater.js');
var Similars = require('./similars.js');
var Suggestions = require('./suggestions.js');
var db = require('../db/config'); 

// Engine is the main hub that connects with other module.  Other modules will be passed in this instance of Engine

var Engine = function(db){
    this.likes = new Rater(db, 'Likes');
    this.dislikes = new Rater(db, 'Dislikes');
    this.similars = new Similars(db);
    this.suggestions = new Suggestions(db);
};

module.exports = Engine;

