var redis = require('redis');
var Promise = require("bluebird");
//var yelp = require("./yelpdata.js").yelp;
Promise.promisifyAll(require("redis"));

var Suggestions = function(db) {
  this.db = db;
};

Suggestions.prototype.forUser = function(userID) {
  var db = this.db;
  var suggestionList = userID + ":Suggestions";
  db.smembers(suggestionList, function(err, data) {
    return data;
  });
};


Suggestions.prototype.update = function(userID) {
//  GET USER'S UNRATED RESTAURANTS THAT
//  ARENT IN PAST SUGGESTIONS
//  FOR EACH RESTAURANT, CALCULATE PROBABILITY USER WILL LIKE IT
//  -- PUT IN USER1 SUGGESTIONS LIST
  var userLikes = userID + ":Likes";
  var userDislikes = userID + ":Dislikes";
  var db = this.db;

  db.sunionstoreAsync(userID + ":userRatedRestaurants", userLikes, userDislikes).
  then(function () {
    return db.getAsync(userID + ":Location");
  }).
  then(function (location) {
    return db.sdiffstoreAsync(userID + ":potentialList", "restaurants:" + location, userID + ":userRatedRestaurants" );
  }).
  then(function () {
    return db.smembersAsync(userID + ":potentialList");
  }).
  then(function (potentialList) {
    if (potentialList === null || potentialList.length === 0) {
      console.log("NO SUGGESTIONS");
    }

    potentialList.forEach(function(rest) {
      var numerator = 0;
      var finalScore;

      db.smembersAsync(rest + ":Likes").
      then(function(usersWhoLiked) {
        var usersWhoDisliked;
        db.smembersAsync(rest + ":Dislikes").
        then(function(answer) {
          usersWhoDisliked = answer;

          var usersWhoLikedCount = usersWhoLiked.length;
          var usersWhoDislikedCount = usersWhoDisliked.length;
          var multi = db.multi();

          usersWhoLiked.forEach(function(user) {
            multi.zscore(userID + ":Similars", user);
          });
          return multi.execAsync();         
        }).
        then(function(zscoreArray) {
         console.log("USERS WHO LIKED" + rest);
          console.log(usersWhoLiked);
          console.log(zscoreArray);

          var multi = db.multi();

          for (var i = 0; i < zscoreArray.length; i++) {
            numerator = numerator + Number(zscoreArray[i]);
          }
          // return multi.discardAsync();

          usersWhoDisliked.forEach(function(user) {
            multi.zscore(userID + ":Similars", user);
          });    
          return multi.execAsync();
        }).
        then(function(zscoreArray) {
          for (var i = 0; i < zscoreArray.length; i++) {
            numerator = numerator - Number(zscoreArray[i]);
          }
          console.log("");
          console.log("REST:  " + rest);
          console.log("USERS WHO DISLIKED");
          console.log(usersWhoDisliked);
          console.log(zscoreArray);
          console.log("NUM USERS WHO LIKED");
          console.log(usersWhoLiked.length);
          console.log("NUM USERS WHO DISLIKED");
          console.log(usersWhoDisliked.length);
          finalScore = numerator/(usersWhoLiked.length + usersWhoDisliked.length);
          console.log("NUmerator:  " + numerator);
          console.log("FINAL SCORE");
          console.log(finalScore);
          console.log("");

          db.zadd(userID + ":Suggestions", finalScore, rest);
          if (rest === potentialList[potentialList.length - 1]) {
            db.zrange(userID + ":Suggestions", 0, -1, function(err, answer) {
              console.log("SUGGESTIONS FOR " + userID);
              console.log(answer);
            });
          }
        });
      });
    });
  });
};

module.exports = Suggestions;

