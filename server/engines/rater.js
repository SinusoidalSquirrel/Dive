var _ = require('underscore');
var async = require('async');

var Rater = function(e, db, kind){
  this.engine = e;
  this.db = db;
  this.kind = kind; 
};


Rater.prototype.add = function(userID, restaurantID, done) {
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.sadd(userSentimentList, restaurantID);
  this.db.sadd(restaurantSentimentList, userID);  
};

Rater.prototype.remove = function(userID, restaurantID, done) {
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.srem(userSentimentList, restaurantID);
  this.db.srem(restaurantSentimentList, userID);
};

Rater.prototype.itemsByUser = function(userID, done) {
  var userSentimentList = userID + ":" + this.kind;
  this.db.smembers(userSentimentList, function(err, reply) {
//    console.log(reply);
  });  
};

Rater.prototype.usersByItem = function(restaurantID, done) {
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.smembers(restaurantSentimentList, function(err, reply) {
    // console.log("USERS BY ITEM " + reply);
  });
};



module.exports = Rater;