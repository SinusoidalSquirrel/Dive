// RECOMMENDATION ALGORITHM:
// The recommendation algorithm is based on a tutorial located at
// http://www.toptal.com/algorithms/predicting-likes-inside-a-simple-recommendation-engine

var Rater = require('./rater.js');
var Similars = require('./similars.js');
var Suggestions = require('./suggestions.js');

// Engine is the class that consolidates all the functionality of 
// the recommendation algorithm.
// A Redis database is passed as an argument during creation.

var Engine = function(db){
    this.likes = new Rater(db, 'Likes');
    this.dislikes = new Rater(db, 'Dislikes');
    this.similars = new Similars(db);
    this.suggestions = new Suggestions(db);
};

module.exports = Engine;


