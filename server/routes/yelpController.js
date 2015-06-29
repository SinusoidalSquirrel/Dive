var algorithm = require('../../server/engines/algorithmAPI.js');
var curl = require('curlrequest');
var yelp = require("yelp").createClient({
  consumer_key: "KjdDsNphOnZeY8w3YxJVcw",
  consumer_secret: "6itM-P0nsf2qYvPpQCfnU6BABd0",
  token: "KyiFVSincgrzSHOBtHWA2KzGrakhBj5G",
  token_secret: "tc5_Rdwu8XqNb2fhM7TC7YDRkoI"
});


// USER SHOULD ONLY GET TO OUR SERVER.  Once we receive their "Get", we then query YELP API.  Then pass the data back to user.

 module.exports = {
    searchQuery: function(req, res){
        var queryName = req.body.term;
        var queryLocation = req.body.location;
        var userId = req.body.userId;
        console.log("REQ name", queryName)
        console.log("REQ location", queryLocation)

        algorithm.setLocation(userId, queryLocation);
        algorithm.getSuggestions(userId, function(data){
          res.send(200, data);
        });


        // Querying data directly from the Yelp API

        // yelp.search({term: queryName, location: queryLocation}, function(error, data) {
        //   console.log(error);
        //   console.log(data);
        //   res.send(200, data)
        // });
    },

    businessQuery: function(req, res){
      console.log('In business Query in server, ', req.body)
      var queryId = req.body.id
      yelp.business(queryId, function(err, data){
        if (err) throw err;
        res.send(200,data)
      })

    },

    geolocationQuery: function(req, res){
      var latitude = req.body.lat;
      var longitude = req.body.long;
      console.log('In geolocationQuery in server, lat,long is' + latitude +','+longitude)
      var options = {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ latitude+','+ longitude +'&key=AIzaSyBeBvUBLMFkYasyDu-rIrCk03TCxoqZydQ',
      }
      curl.request(options, function(err, data){
        var result = JSON.parse(data);
        console.log("Google return data is, ", result.results);
        res.send(200, data);
      })

    },

    feelingQuery: function(req, res){
      var queryfeeling = req.body.feeling;
      var restaurantID = req.body.restaurantID;
      var userId = req.body.userId;

      algorithm.rateRestaurant(userId, restaurantID, queryfeeling);
      res.send(200);
    },

    saveBookmark: function(req, res){
      var restaurantID = req.body.restaurantID;
      var userId = req.body.userId;

      algorithm.keep(userId, restaurantID);
      res.send(200);
    },

    getBookmark: function(req, res){
      var userId = req.body.userId;
      console.log(userId);
      algorithm.getKept(userId, function(data){
        console.log(data);
        res.send(200, data); 
      });
    }

 }
