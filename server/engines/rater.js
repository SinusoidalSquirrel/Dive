var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));

// The Rater class is used to add restaurants to a user's 
// "Likes" or "Dislikes" list.  One instance of the Rater
// class is created for the "Likes" list, and a separate
// instance is created for the "Dislikes" list.

var Rater = function(db, kind) {
  this.db = db;
  this.kind = kind;
};

Rater.prototype.add = function(userID, restaurantID, done) {
  var db = this.db;
  if (restaurantID !== undefined) {
    var userSentimentList = userID + ":" + this.kind;
    var restaurantSentimentList = restaurantID + ":" + this.kind;
    db.sadd(userSentimentList, restaurantID);
    db.sadd(restaurantSentimentList, userID);    
  }
};

// FOLLOWING FUNCTIONS BELOW NOT USED

Rater.prototype.remove = function(userID, restaurantID, done) {
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.srem(userSentimentList, restaurantID);
  this.db.srem(restaurantSentimentList, userID);
};

Rater.prototype.itemsByUser = function(userID, done) {
  var userSentimentList = userID + ":" + this.kind;
  this.db.smembers(userSentimentList, function(err, reply) {
  });  
};

Rater.prototype.usersByItem = function(restaurantID, done) {
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.smembers(restaurantSentimentList, function(err, reply) {
  });
};


module.exports = Rater;