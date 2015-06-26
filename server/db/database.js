var redis = require('redis');

// By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively. 
// var client = redis.createClient(port, host);

var client = redis.createClient();
module.exports.client = client;
client.on('connect', function() {
    console.log('connected');
});

client.flushdb();

module.exports.rateRestaurant = function(user, restaurantID, feeling) {
  // - adds restaurant ID to users "like" or "dislike" list and
  //   returns 'success' or 'failure'
  if (feeling === 0) {
    raterDislikes.add(user, restaurantID);
  }
  else
  {
    raterLikes.add(user, restaurantID);
  }
};

module.exports.setLocation = function(userID, location) {
 // - returns array of restaurant records in json format
  client.set(userID + ":Location", location);
};

module.exports.setStartIndex = function(userID) {
  var start = userID + ":StartIndex";
  client.get(start, function(err, index) {
    if (index === null) {
      client.set(start, 0);
    }
    else
    {
      client.incr(start);
    }
  });
};

module.exports.getSuggestions = function(userID, cb) {
 // - returns array of restaurant records in json format

  client.get(userID + ":Location", function(err, location) {
    var restaurantList = "restaurants:" + location;
    var likesList = userID + ":Likes";
    var dislikesList = userID + ":Dislikes";
    var results = [];

    client.sunionstore("ratedList", likesList, dislikesList);
    client.smembers(restaurantList, function(err, data) {
      // console.log(data);
      client.smembers("ratedList", function(err, ratedList) {
        client.get(userID + ":StartIndex", function(err, index) {
          index = Number(index);
          console.log("INDEX:" + index);
          while ((results.length < 20) && (index < data.length)) {
            if (ratedList.indexOf(data[index]) === -1) {
              client.incr(userID + ":StartIndex");
              results.push(data[index]);
              index = index+1;
            }
          }
          var results2 = [];
          for (var i = 0; i < results.length; i++) {
            client.hgetall(results[i], function(err, data) {
              results2.push(data);
              if (results2.length == 20) {
                cb(results2);
              }
            });
          }
        });
      });
    });
  });
};


// module.exports.getUnreviewedRestaurants = function(userID, location) {
// //  - returns array of restaurant records in json format
//   var userLikes = userID + ":Likes";
//   var userDislikes = userID + ":Dislikes";
//   client.sunionstore("userRated", userLikes, userDislikes);
//   client.sdiffstore("unreviewedRestaurants", "restaurants:" + location, "userRated");
//   client.smembers("unreviewedRestaurants", function(err, data) {
//     return data;

//   });
// };

module.exports.keep = function(user, restaurantID) {
// - saves a restaurant ID to user's "keep" list;
  var keptList = user + ":Kept";
  client.sadd(keptList, restaurantID);
};

module.exports.getKept = function(user) {
// - returns array of restaurant records in json format
  var keptList = user + ":Kept";
  var record;
  var response = [];
  client.smembers("keptList", function(err, data) {
    for (var i = 0; i < data.length; i++) {
      client.hgetall(data[i], function(err, restRec) {
        record = {};
        for (var i = 0; i < restRec.length; i = i + 2) {
          record[restRec[i]] = restRec[i+1];
        }
        response.push(record);
        if (response.length === data.length) {
          return response;
        }
      });
    }
  });
};


module.exports.importYelpRestaurants = function(location) {
  // - takes raw yelp json data and places all the restaurant records
  //  in the database of restaurants

  var yelp = require("yelp").createClient({
    consumer_key: "KjdDsNphOnZeY8w3YxJVcw", 
    consumer_secret: "6itM-P0nsf2qYvPpQCfnU6BABd0",
    token: "KyiFVSincgrzSHOBtHWA2KzGrakhBj5G",
    token_secret: "tc5_Rdwu8XqNb2fhM7TC7YDRkoI"
  });

  var queryName = "restaurant";
  var queryLocation = location;
  for (var offset = 0; offset < 500; offset=offset+20) {
    yelp.search({term: queryName, location: queryLocation, sort: 0, offset: offset }, function(error, data) {
   //   console.log(data);
      var restaurantList = "restaurants:" + queryLocation;
      var description = "";
      for (var i = 0; i < data.businesses.length; i++) {
        restaurant = data.businesses[i];
//        console.log(restaurant.id);
        for (var j = 0; j < restaurant.categories.length; j++) {
          description = description + restaurant.categories[j][0];
          if (j !== restaurant.categories.length - 1) {
            description = description + ", ";
          }
        }      
        client.hmset(restaurant.id, {
          'name': restaurant.name,
          'id': restaurant.id,
          'image': restaurant.image_url,
          'description': description
        });

        client.sadd(restaurantList, restaurant.id);

      }
    });
  }   
};

