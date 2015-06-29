var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));

// The Suggestions class is used to generate suggestions
// for the user.

var Suggestions = function(db) {
  this.db = db;
};

Suggestions.prototype.update = function(userID, cb) {

  // The update method updates the list of suggestions for the
  // given user and passes them to the callback function passed
  // as an argument

  var userLikes = userID + ":Likes";
  var userDislikes = userID + ":Dislikes";
  var userKept = userID + ":Kept";
  var db = this.db;

  // Get list of all restaurants that user has rated or kept

  db.sunionstoreAsync(userID + ":userRatedRestaurants", userLikes, userDislikes, userKept).
  then(function () {
    return db.getAsync(userID + ":Location");
  }).
  then(function (location) {

    // Get the difference between all restaurants available at user's location
    // and the restaurants that user has already rated.  This is the 
    // potential list of suggestions.

    return db.sdiffstoreAsync(userID + ":potentialList", "restaurants:" + location, userID + ":userRatedRestaurants" );
  }).
  then(function () {
    return db.smembersAsync(userID + ":potentialList");
  }).
  then(function (potentialList) {
    if (potentialList === null || potentialList.length === 0) {
      cb([]);
    }

    // For each restaurant on the potential list, do the following:

    potentialList.forEach(function(rest) {
      var numerator = 0;
      var finalScore;

    // Get list of all users who liked that restaurant

      db.smembersAsync(rest + ":Likes").
      then(function(usersWhoLiked) {
        var usersWhoDisliked;

    // Get list of all users who disliked that restaurant 

        db.smembersAsync(rest + ":Dislikes").
        then(function(answer) {
          usersWhoDisliked = answer;

          var usersWhoLikedCount = usersWhoLiked.length;
          var usersWhoDislikedCount = usersWhoDisliked.length;
          var multi = db.multi();

    // Save the similars scores of all the users who liked the restaurant
    // in an array

          usersWhoLiked.forEach(function(user) {
            multi.zscore(userID + ":Similars", user);
          });
          return multi.execAsync();         
        }).
        then(function(zscoreArray) {

    // Add each of the above-saved similars scores to the numerator of the equation
    // that we are using to calculate the likelihood that our user will like
    // the restaurant.  These increase the likelihood. 

          var multi = db.multi();
          for (var i = 0; i < zscoreArray.length; i++) {
            numerator = numerator + Number(zscoreArray[i]);
          }

    // Save the similars score of all the users who disliked the restaurant
    // in an array

          usersWhoDisliked.forEach(function(user) {
            multi.zscore(userID + ":Similars", user);
          });    
          return multi.execAsync();
        }).
        then(function(zscoreArray) {

    // Subtract each of the immediately above-saved similars scores from the 
    // numerator of the equation that we are using to calculate the likelihood
    // that our user will like the restaurant.  These decrease the likelihood.

          for (var i = 0; i < zscoreArray.length; i++) {
            numerator = numerator - Number(zscoreArray[i]);
          }

    // Calculate final score by dividing the above-calculated numerator
    // by the total number of users who rated the given restaurant.

          if (numerator !== 0 ) {
            finalScore = numerator/(usersWhoLiked.length + usersWhoDisliked.length);
            db.zadd(userID + ":Suggestions", finalScore, rest);
          }

    // Return (in descending order) all the restaurants on the potential list 
    // that have a score of 0.5 or higher 

          if (rest === potentialList[potentialList.length - 1]) {
            db.zrangebyscore(userID + ":Suggestions", 0.5, '+inf', function(err, answer) {
              answer = answer.reverse();
              cb(answer);
            });
          }
        });
      });
    });
  });
};

module.exports = Suggestions;

