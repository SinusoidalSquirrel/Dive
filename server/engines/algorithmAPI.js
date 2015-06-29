// This is the module that contains all the API functions
// to be used by our routes.

var redis = require('redis');
var Promise = require("bluebird");
Promise.promisifyAll(require("redis"));

var Engine = require('../../server/engines/engine.js');
var database = require('../../server/db/database.js');

var db = database.client;
var engine = new Engine(db);


var importYelpRestaurants = function(location, cb) {

// Helper function that imports 1000 restaurants from Yelp
// at a given location and loads them into our redis database

  var yelp = require("yelp").createClient({
    consumer_key: "KjdDsNphOnZeY8w3YxJVcw", 
    consumer_secret: "6itM-P0nsf2qYvPpQCfnU6BABd0",
    token: "KyiFVSincgrzSHOBtHWA2KzGrakhBj5G",
    token_secret: "tc5_Rdwu8XqNb2fhM7TC7YDRkoI"
  });

  var queryName = "restaurant";
  var queryLocation = location;
  var firstloop = true;
  for (var offset = 0; offset < 1000; offset=offset+20) {
    yelp.search({term: queryName, location: queryLocation, sort: 0, offset: offset }, function(error, data) {
      if (!data) {
        cb(false);
      }
      else { 

        var restaurantList = "restaurants:" + queryLocation;
        var description = "";
        console.log(data.businesses.length);
        for (var i = 0; i < data.businesses.length; i++) {
          restaurant = data.businesses[i];
          for (var j = 0; j < restaurant.categories.length; j++) {
            description = description + restaurant.categories[j][0];
            if (j !== restaurant.categories.length - 1) {
              description = description + ", ";
            }
          }      
          db.hmset(restaurant.id, {
            'name': restaurant.name,
            'id': restaurant.id,
            'image': restaurant.image_url,
            'description': description,
            'location': restaurant.location.display_address,
            'phone': restaurant.display_phone,
            'review': restaurant.snippet_text
          });

          db.sadd(restaurantList, restaurant.id);

        }
        if (firstloop) {
          firstloop = false;
          cb(true);
        }

      }
    });
  }   
};


module.exports.rateRestaurant = function(user, restaurantID, feeling) {

// rateRestaurant method adds a restaurant ID to users "like" or "dislike" list

  if (restaurantID !== undefined) {
    if (feeling === 0) {
      engine.dislikes.add(user, restaurantID);
    }
    else
    {
      engine.likes.add(user, restaurantID);
    }
    engine.similars.update(user);    
  }
};

module.exports.setLocation = function(userID, location) {

// setLocation method saves the location of the user in the 
// redis database under the key "{userID}:Location".
// This must be done before calling any of the other functions
// in this module, as they are dependent on this information.

  db.set(userID + ":Location", location);
};

module.exports.getSuggestions = function(userID, cb) {

// getSuggestions method passes a list of 20 restaurant suggestions
// to the callback function supplied as an argument.  The list is
// an array of objects, each of which contains the following
// properties: name, id, image, description.

// An engine object is used to calculate suggestions following the
// recommendations algorithm.  If less than 20 suggestions are returned
// by the engine, randomly chosen Yelp restaurants that the user
// has not yet reviewed are used to fill in the balance.

// If no restaurants at the user's location have been
// previously loaded into the database, this method automatically calls the
// the Yelp API and downloads them.

  db.get(userID + ":Location", function(err, location) {

    var innerfunc = function() {
      var restaurantList = "restaurants:" + location;
      var likesList = userID + ":Likes";
      var dislikesList = userID + ":Dislikes";
      var results = [];

  // Get up to 20 suggestions using the recommendation engine

      engine.suggestions.update(userID, function(suggestions) {
        var maxResults = 20;
        var limit = Math.min(maxResults, suggestions.length);
        for (var i = 0; i < limit; i++) {
          results.push(suggestions[i]);
        }

  // Get list of restaurants that user has already rated

        db.sunionstore("ratedList", likesList, dislikesList);
        db.smembers(restaurantList, function(err, data) {
          db.smembers("ratedList", function(err, ratedList) {
            var index = 0;
  
  // If the number of suggestions returned by recommendations engine is less
  // than 20, fill in the balance with restaurants from the database that the
  // user has not yet rated

            while ((results.length < maxResults) && (index < data.length)) {
              if (ratedList.indexOf(data[index]) === -1 && results.indexOf(data[index]) === -1) {
                results.push(data[index]);
              }
              index = index+1;
            }
            var results2 = [];
            for (var i = 0; i < results.length; i++) {
              db.hgetall(results[i], function(err, data) {
                results2.push(data);
                if (results2.length === maxResults) {
                  cb(results2);
                }
              });
            }
          });
        });
      });
    };

    // If no restaurants at the user's location have been loaded into our
    // database, call the Yelp API and load them
    //db.get(userId + ":Location", function(err, location){})
    db.exists("restaurants:" + location, function(err, doesExist) {
      if (doesExist === 0) {
        console.log(location);
        console.log("IS THIS CALLED?");
        console.log("DOESEXIST: " + doesExist);
        console.log("ERROR: " + err);
        importYelpRestaurants(location, innerfunc);
      }
      else
      {
        innerfunc();
      }

    });
  });
};

module.exports.keep = function(user, restaurantID) {

// Saves a restaurant to user's "kept" list;

  var keptList = user + ":Kept";

  if (restaurantID !== undefined) {
      db.sadd(keptList, restaurantID);
  }
};

module.exports.getKept = function(user, cb) {

// Passes array of javascript objects to the callback function
// passed as an argument.  The objects represent restaurant
// records saved in the user's "kept" list.

  var keptList = user + ":Kept";
  var results = [];
  db.smembers(keptList, function(err, data) {
    for (var i = 0; i < data.length; i++) { 
      db.hgetall(data[i], function(err, record) {
        results.push(record);
        if (results.length === data.length) {
          cb(results);
        }
      });
    }
  });
};




// ************************************************************
// ALL CODE BELOW IS JUST FOR TESTING -- DELETE 

// var raterLikes = engine.likes;
// var raterDislikes = engine.dislikes;
// var similars = engine.similars;
// var suggestions = engine.suggestions;

// var myFunction = function(arg) {
//   suggestionsResponse = arg;
// };

// var myCallback = function(arg) {
//   console.log("Suggestions");
//   console.log(arg);
// };

// var myCallback2 = function(arg) {
//   console.log("KEPT STUFF*****");
//   console.log(arg);
// };

// module.exports.setLocation(1, "San Francisco");
// module.exports.setLocation(2, "San Francisco");
// module.exports.setLocation(3, "San Francisco");
// module.exports.setLocation(4, "San Francisco");
// module.exports.getSuggestions(1, myCallback);


// setTimeout(function() {
//   db.smembers("restaurants:San Francisco", function(err, data) {
//     console.log("INSIDE LLOP");
//     for (var i = 0; i < 20; i++) {
//       console.log(data[i]);
//     }
//     for (var i = 0; i < 10; i++) {
//       module.exports.rateRestaurant(1, data[i]);
//     }
//     for (var j = 3; j < 15; j++) {
//       module.exports.rateRestaurant(2, data[j]);
//     }
//     for (var k = 4; k < 17; k++) {
//       module.exports.rateRestaurant(3, data[k]);
//     }

//     module.exports.keep(2, data[15]);

//   });}, 3000);




//  setTimeout(function() { module.exports.getSuggestions(2, myCallback); }, 4000);
// setTimeout(function() { module.exports.getSuggestions(3, myCallback); }, 4000);
   
// setTimeout(function() { module.exports.getKept(1, myCallback2); }, 3000);




