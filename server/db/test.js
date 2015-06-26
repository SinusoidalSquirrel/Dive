var algorithm = require('./database.js');
var Promise = require("bluebird");
//var yelp = require("./yelpdata.js").yelp;
Promise.promisifyAll(require("redis"));

var Engine = require('../../server/engines/engine.js');
var Rater = require('../../server/engines/rater.js');
var Similars = require('../../server/engines/similars.js');
var Suggestions = require('../../server/engines/suggestions.js');


var db = algorithm.client;
var otherModules = algorithm;
var engine = new Engine(db);

// algorithm.rateRestaurant(75, "McDonalds", 0);
// db.smembers("75:Dislikes", function(err, data) {
//   console.log("ZZZZ");
//   console.log(data);
// });

algorithm.importYelpRestaurants("San Francisco");
setTimeout(function() {
db.hgetall("fog-harbor-fish-house-san-francisco-2", function(err, data) {
  console.log("FOG HARBOR");
  console.log(data.description);
})}, 2000);

setTimeout(function() {
  db.scard("restaurants:San Francisco", function(err, data) {
    console.log("RESTAURANT LIST LENGTH:  " + data);
  })}, 3000);

algorithm.setStartIndex(1);
algorithm.setStartIndex(2);
algorithm.setLocation(1, "San Francisco");
algorithm.setLocation(2, "San Francisco");
console.log("SUGGESTIONS FOR 2");

var suggestionsResponse;

var myFunction = function(arg) {
  suggestionsResponse = arg;
};

// setTimeout(function() {
//     console.log(algorithm.getSuggestions(1, myCallback));
//   }, 5000);

var myCallback = function(arg) {
  console.log(arg);
};


var raterLikes = engine.likes;
var raterDislikes = engine.dislikes;
var similars = engine.similars;
var suggestions = engine.suggestions;

// raterLikes.add(2, "abc");
// raterLikes.add(2, "def");
// raterLikes.add(2, "ghi");
// raterLikes.add(2, "jkl");
// raterDislikes.add(2, "mno");
// raterLikes.add(2, "pqr");
// raterLikes.add(2, "stu");
// raterLikes.add(2, "vwx");
// raterLikes.add(2, "yz");

otherModules.setLocation(1, "San Francisco");
otherModules.setLocation(2, "San Francisco");
otherModules.setLocation(3, "San Francisco");
otherModules.setLocation(4, "San Francisco");

raterLikes.add(1, "abc");
raterLikes.add(1, "def");
raterLikes.add(1, "ghi");
raterLikes.add(1, "jkl");
raterDislikes.add(1, "mno");
raterLikes.add(1, "pqr");
raterLikes.add(1, "stu");
raterLikes.add(1, "vwx");
raterLikes.add(1, "yz");


raterDislikes.add(1, "1 2 3");
raterDislikes.add(1, "4 5 6");
raterDislikes.add(1, "7 8 9");
raterDislikes.add(1, "10 11 12");
raterDislikes.add(1, "13 14 15");
raterDislikes.add(1, "16 17 18");
raterDislikes.add(1, "19 20 21");
raterDislikes.add(1, "22 23 24");
raterDislikes.add(1, "25 26 27");
raterDislikes.add(1, "28 29 30");


raterLikes.add(2, "def");
raterLikes.add(2, "ghi");
raterLikes.add(2, "jkl");
raterLikes.add(2, "mno");
raterLikes.add(2, "pqr");
raterLikes.add(2, "stu");


raterDislikes.add(2, "1 2 3");
raterDislikes.add(2, "4 5 6");
raterDislikes.add(2, "7 8 9");
raterDislikes.add(2, "10 11 12");
raterDislikes.add(2, "13 14 15");
raterDislikes.add(2, "16 17 18");
raterDislikes.add(2, "19 20 21");
raterDislikes.add(2, "22 23 24");
raterDislikes.add(2, "25 26 27");
raterDislikes.add(2, "28 29 30");

raterLikes.add(3, "ghi");
raterLikes.add(3, "jkl");
raterLikes.add(3, "mno");
raterLikes.add(3, "pqr");
raterLikes.add(3, "vwx");


raterDislikes.add(3, "1 2 3");
raterDislikes.add(3, "4 5 6");
raterDislikes.add(3, "7 8 9");
raterDislikes.add(3, "10 11 12");
raterDislikes.add(3, "13 14 15");
raterDislikes.add(3, "16 17 18");
raterDislikes.add(3, "19 20 21");
raterDislikes.add(3, "22 23 24");
raterDislikes.add(3, "25 26 27");
raterDislikes.add(3, "28 29 30");

raterLikes.add(4, "jkl");
raterLikes.add(4, "mno");
raterLikes.add(4, "pqr");
raterLikes.add(4, "yz");


raterDislikes.add(4, "1 2 3");
raterDislikes.add(4, "4 5 6");
raterDislikes.add(4, "7 8 9");
raterDislikes.add(4, "10 11 12");
raterDislikes.add(4, "13 14 15");
raterDislikes.add(4, "16 17 18");
raterDislikes.add(4, "19 20 21");
raterDislikes.add(4, "22 23 24");
raterDislikes.add(4, "25 26 27");
raterDislikes.add(4, "28 29 30");





//db.sadd("1:Likes", "helo");

//raterLikes.itemsByUser(2);

raterLikes.usersByItem("vwx");
db.smembers("1:Likes", function(err, data) {
  console.log("MEMBERS OF 1: " + data);
});
similars.update(1);
similars.update(2);
similars.update(3);
similars.update(4);

// setTimeout(function() { suggestions.update(1); }, 100);
// setTimeout(function() { suggestions.update(2); }, 100);

 suggestions.update(2);
 suggestions.update(3);
 suggestions.update(4);

//suggestions.update(2);

db.zscore("1:Similars", "2", function(err, data) {
    console.log("ZSCORE:  " + data);
});

