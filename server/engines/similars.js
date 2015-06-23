var _ = require('underscore');
var async = require('async');

/*
var Similars = function(engine){  // Pass in engine?
    // Initialize with Engine and db connection    
        // this.engine = engine;
        // this.db = ...
};

Similars.prototype.byUser = function(){
    // This funciton returns List of Users that is similar to input User.  Retrieve from database

};

Similars.prototype.update = function(){
    // Async AUTO
        //Arg1: Obj with:   // [BRYAN NOTE: ] 
            // userLike:  function(done) => this.engine.like.itemByUser(user,done)
            // userDislike: function(done) => this.engine.dislike.itemByUser(user,done)


};
*/
var Similars = function(e, db) {
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
    for (i = 0; i < 10000000; i++) {
        j = 1;

    }
    that.db.smembers("comparisonMembers", function(err, compMembersArray) {
      var comparisonIndex;
      var commonLikes;
      var commonDislikes;
      var conflicts1;
      var conflicts2;      
      var otherUserLikes;
      var otherUserDislikes;

      for (i = 0; i < compMembersArray.length; i++) {
        // console.log(compMembersArray.length);
        otherUserLikes = compMembersArray[i] + ":Likes";
        otherUserDislikes = compMembersArray[i] + ":Dislikes";        
        //these are temporary lists, need to clear them somehow
  
        that.db.sinterstore("commonLikes", userLikes, otherUserLikes);
        that.db.sinterstore("commonDislikes", userDislikes, otherUserDislikes);
        that.db.sinterstore("conflicts1", userLikes, otherUserDislikes);
        that.db.sinterstore("conflicts2", userDislikes, otherUserLikes);
        that.db.sunionstore("allRatedRestaurants", userLikes, otherUserLikes,
                        userDislikes, otherUserDislikes);

        that.db.scard("commonLikes", function(err, commonLikesCount) {
            console.log("COMMON LIKES:  " + userID + "-  " + commonLikesCount);
          that.db.scard("commonDislikes", function(err, commonDislikesCount) {
            that.db.scard("conflicts1", function(err, conflicts1Count) {
              that.db.scard("conflicts2", function(err, conflicts2Count) {
                that.db.scard("allRatedRestaurants", function(err, allRatedRestaurantsCount) {
                  // console.log("HELLO");
                  // console.log(allRatedRestaurantsCount);
                  // console.log((Number(commonLikesCount) + Number(commonDislikesCount) -
                  //              Number(conflicts1Count) - Number(conflicts2Count)) / Number(allRatedRestaurantsCount));

                });
              });
            });
          });
        });
      }
    });
  });
};


module.exports = Similars;


/*  
ASYNC auto;
async.auto({
  readData: async.apply(fs.readFile, 'data.txt', 'utf-8')
}, callback);

ASYNC Map:

async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file 
});

*/