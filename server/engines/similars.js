var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));

var Similars = function(db) {
  this.db = db;
  this.similars = ""; 
};

Similars.prototype.byUser = function(userID) {
  // var userSimilarsList = userID + ":Similars";
  // this.db.smembers(userSimilarsList);  
};

Similars.prototype.update = function(userID) {
  var userLikes = userID + ":Likes";
  var userDislikes = userID + ":Dislikes";

  var otherUserList = [];
  var otherUserScore = [];


  this.db.sunionstore("userRated", userLikes, userDislikes);
  var that = this;
  this.db.smembers("userRated", function(err, restaurantArray) {
    for (var i = 0; i < restaurantArray.length; i++) {
      //WILL THIS THROW ERROR BECAUSE COMPARISONMEMBERS NOT DEFINED?
      var john = restaurantArray[i];
      // that.db.smembers(restaurantArray[i]+":Likes", function(err, answer) {
      //   console.log(answer);
      // });

      that.db.sunionstore("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Likes");
      that.db.sunionstore("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Dislikes");
    }
//    that.db.srem("comparisonMembers", userID);
  
    that.db.smembers("comparisonMembers", function(err, compMembersArray) {
      var comparisonIndex;
      var commonLikes;
      var commonDislikes;
      var conflicts1;
      var conflicts2;      
      var otherUserLikes;
      var otherUserDislikes;

      var commonLikesArr = [];
      var commonDislikesArr = [];
      var conflicts1Arr = [];
      var conflicts2Arr = [];
      var allRatedRestaurantsArr = [];


      for (i = 0; i < compMembersArray.length; i++) {

        console.log(compMembersArray.length);
        otherUserLikes = compMembersArray[i] + ":Likes";
        otherUserDislikes = compMembersArray[i] + ":Dislikes";

        otherUserList.push(compMembersArray[i]); 
        console.log(otherUserList);       
        //these are temporary lists, need to clear them somehow
  
        that.db.sinterstore("commonLikes", userLikes, otherUserLikes);
        that.db.sinterstore("commonDislikes", userDislikes, otherUserDislikes);
        that.db.sinterstore("conflicts1", userLikes, otherUserDislikes);
        that.db.sinterstore("conflicts2", userDislikes, otherUserLikes);
        that.db.sunionstore("allRatedRestaurants", userLikes, otherUserLikes,
                        userDislikes, otherUserDislikes);

        that.db.scard("commonLikes", function(err, commonLikesCount) {
          commonLikesArr.push(commonLikesCount);
        });

        that.db.scard("commonDislikes", function(err, commonDislikesCount) {
          commonDislikesArr.push(commonDislikesCount);
        });

        that.db.scard("conflicts1", function(err, conflicts1Count) {
          conflicts1Arr.push(conflicts1Count);
        });

        that.db.scard("conflicts2", function(err, conflicts2Count) {
          conflicts2Arr.push(conflicts2Count);
        });

        that.db.scard("allRatedRestaurants", function(err, allRatedRestaurantsCount) {
          allRatedRestaurantsArr.push(allRatedRestaurantsCount);
          if (compMembersArray.length === commonLikesArr.length) {
            for (var k = 0; k < commonLikesArr.length; k++) {
              // console.log(" commonLikesCount:  " + commonLikesArr[k] +
              //     " commonDislikes:  " + commonDislikesArr[k] +
              //     " conflicts1:  " + conflicts1Arr[k] +
              //     " conflicts2:  " + conflicts2Arr[k] +
              //     " allRatedRestaurants:  " + allRatedRestaurantsArr[k]);
              comparisonIndex = (Number(commonLikesArr[k]) + Number(commonDislikesArr[k]) -
                       Number(conflicts1Arr[k]) - Number(conflicts2Arr[k])) / Number(allRatedRestaurantsArr[k]);
              console.log("COMPARISON INDEX" + userID + ":  " + compMembersArray[k] + "  " + comparisonIndex);
              that.db.zadd(userID + ":Similars", comparisonIndex, compMembersArray[k]);
              that.db.zrange(userID + ":Similars", 0, -1, function(err, answer) {
                // console.log ("DO WE GET HERE");
                // console.log(answer);
              });
            }
          }
        });
      }
    });
});
};

module.exports = Similars;

