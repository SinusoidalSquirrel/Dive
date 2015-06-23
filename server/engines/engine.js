var Rater = require('./rater.js');
var Similars = require('./similars.js');
var Suggestions = require('./suggestions.js');
var db = require('../db/config') 

// Engine is the main hub that connects with other module.  Other modules will be passed in this instance of Engine



var Engine = function(){
    this.likes = new Rater(this, db, 'Likes');
    this.dislikes = new Rater(this, db, 'Dislikes');
    this.similars = new Similars(this, db);
    this.suggestions = new Suggestions(this, db);
}

module.exports = Engine;




/* coffee script translation to JS:
var Engine;

module.exports = Engine = (function() {
  function Engine() {
    this.likes = new Rater(this, 'likes');
    this.dislikes = new Rater(this, 'dislikes');
    this.similars = new Similars(this);
    this.suggestions = new Suggestions(this);
  }

  return Engine;

})();

*/