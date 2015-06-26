var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));


var Rater = function(db, kind) {
  this.db = db;
  this.kind = kind;
};

Rater.prototype.add = function(userID, restaurantID, done) {
  var db = this.db;
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  db.sadd(userSentimentList, restaurantID);
  db.sadd(restaurantSentimentList, userID);
  db.get(userID + ":Location", function(err, location) {
    db.sadd("restaurants:" + location, restaurantID);
  });
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
    console.log("USERS BY ITEM " + reply);
  });
};


module.exports = Rater;