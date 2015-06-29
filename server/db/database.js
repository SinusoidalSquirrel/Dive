var redis = require('redis');

// The schema for our database is as follows:

// A user's "Likes" set is saved under the key:  "{userID}:Likes"
// A user's "Dislikes" set is saved under the key:  "{userID}:Dislikes"
// A user's "Kept" set is saved under the key:  "{userID}:Kept"

// All of the above sets contain a list of retaurant IDs (determined by 
// the ID property given by Yelp to its restaurant records) 

// A user's location is saved under "{userID}:Location"

// The record for a restaurant is saved in a redis hash using the 
// the restaurant's ID as the key.

console.log("process.env.REDISTOGO_URL: ", process.env);
if (process.env.REDISTOGO_URL) {
  // TODO: redistogo connection
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var client = redis.createClient(rtg.port, rtg.hostname);
  console.log('rtg:', rtg);

  client.auth(rtg.auth.split(":")[1]);
} else {
  var client = redis.createClient();
}

client.on('connect', function() {
  console.log('connected');
});

client.flushdb();

module.exports.client = client;
