var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));

// This class is used to update the similars list of a user.
// The similars list is the list of other members who have similar
// tastes as the user, ranked by their similarity scores.

var Similars = function(db) {
  this.db = db;
  this.similars = ""; 
};


Similars.prototype.update = function(userID) {

// This method updates the "similars list" for the user whose
// id is passed to the method as an argument.
// The similars list is stored as a redis set, the key of which 
// is in the following format:  {userID}:Similars 

  var userLikes = userID + ":Likes";
  var userDislikes = userID + ":Dislikes";
  var db = this.db;

  // Get list of restaurants that user has rated

  db.sunionAsync(userLikes, userDislikes).
  then(function(userRatedRests) {    
    db.del("comparisonMembers");

    // Get list of all members who have rated any of the restaurants that the
    // user has rated.  Those are the "comparison members".

    for (var i = 0; i < userRatedRests.length; i++) {
      db.sunionstore("comparisonMembers", "comparisonMembers", userRatedRests[i] + ":Likes");
      db.sunionstore("comparisonMembers", "comparisonMembers", userRatedRests[i] + ":Dislikes");
    }
    db.srem("comparisonMembers", userID);

    db.smembers("comparisonMembers", function(err, compMembersArray) {
      compMembersArray.forEach(function(member) {

      // For each comparison member, do the following:

        var commonLikes;
        var commonDislikes;
        var conflicts1;
        var conflicts2;
        var allRatedRestaurants;

        var otherUserLikes = member + ":Likes";
        var otherUserDislikes = member + ":Dislikes";

        // Find the restaurants that both the user and the comparison
        // member like.  The number of these restaurants increases
        // the users' similarity factor.

        db.sinterAsync(userLikes, otherUserLikes).
        then(function(answer) {
          commonLikes = answer;

        // Find the restaurants that both the user and the comparison
        // member dislike.  The number of these restaurants increases
        // the users' similarity factor.

          return db.sinterAsync(userDislikes, otherUserDislikes);
        }).
        then(function(answer) {
          commonDislikes = answer;

        // Find the restaurants that the user likes but which the comparison
        // user dislikes.  These are conflicts, and the number of these
        // restaurants decreases the users' similarity factor.

          return db.sinterAsync(userLikes, otherUserDislikes);
        }).
        then(function(answer) {
          conflicts1 = answer;

        // Find the restaurants that the user dislikes but which the comparison
        // user likes.  These are conflicts, and the number of these
        // restaurants decreases the users' similarity factor.

          return db.sinterAsync(userDislikes, otherUserLikes);
        }).
        then(function(answer) {
          conflicts2 = answer;

        // Get list of all restaurants rated by either the user or the 
        // comparison member

          return db.sunionAsync(userLikes, otherUserLikes,
                                userDislikes, otherUserDislikes);
        }).
        then(function(answer) {
          allRatedRestaurants = answer;

        // Calculate comparisonIndex 

          var comparisonIndex = (commonLikes.length + commonDislikes.length -
                                 conflicts1.length - conflicts2.length) /
                                 allRatedRestaurants.length;

        // Update the similars list of both the user and the comparison
        // member with our newly calculated index

          db.zadd(userID + ":Similars", comparisonIndex, member);
          db.zadd(member + ":Similars", comparisonIndex, userID);

        });
      });
    });
  });
};

module.exports = Similars;

