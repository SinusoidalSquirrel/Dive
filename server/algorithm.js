
var Rater = function(db, kind) {
  this.db = db;
  this.kind = kind;
  // this.db = redis.createClient();
  // this.db.on('connect', function() {
  //     console.log('connected');
  // });  
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
  this.db.smembers(userSentimentList);  
};

Rater.prototype.usersByItem = function(restaurantID, done) {
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.smembers(restaurantSentimentList);
};


// Find union of users likes and dislikes
// Find all users who have rated anything on that userList
// compute list of similarity index for each user found and create new list

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

  this.db.sunionstore("userRated", userLikes, userDislikes);

  this.db.smembers("userRated", function(err, restaurantArray) {
    for (var i = 0; i < restaurantArray.length; i++) {
      //WILL THIS THROW ERROR BECAUSE COMPARISONMEMBERS NOT DEFINED?
      this.db.sunion("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Likes");
      this.db.sunion("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Dislikes");
    }
    this.db.smembers("comparisonMembers", function(err, compMembersArray) {
      var comparisonIndex;
      var commonLikes;
      var commonDislikes;
      var conflicts1;
      var conflicts2;      
      var otherUserLikes;
      var otherUserDislikes;        
  
      for (i = 0; i < compMembersArray.length; i++) {

        otherUserLikes = compMembersArray[i] + ":Likes";
        otherUserDislikes = compMembersArray[i] + ":Dislikes";        
        //these are temporary lists, need to clear them somehow
  
        this.db.sinter("commonLikes", userLikes, otherUserLikes);
        this.db.sinter("commonDislikes", userDislikes, otherUserDislikes);
        this.db.sinter("conflicts1", userLikes, otherUserDislikes);
        this.db.sinter("conflicts2", userDislikes, otherUserLikes);
        this.db.sunion("allRatedRestaurants", userLikes, otherUserLikes,
                        userDislikes, otherUserDislikes);

        scard("commonLikes", function(err, commonLikesCount) {
          scard("commonDislikes", function(err, commonDislikesCount) {
            scard("conflicts1", function(err, conflicts1Count) {
              scard("conflicts2", function(err, conflicts2Count) {
                scard("allRatedRestaurants", function(err, allRatedRestaurantsCount) {

                  console.log((commonLikesCount + commonDislikesCount -
                               conflicts1Count - conflicts2Count) / allRatedRestaurantsCount);

                });
              });
            });
          });
        });
      }
    });
  });
};

var raterLikes = new Rater(client, "Likes");
var raterDislikes = new Rater(client, "Dislikes");


