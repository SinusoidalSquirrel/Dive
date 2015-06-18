var yelp = require("yelp").createClient({
  consumer_key: "KjdDsNphOnZeY8w3YxJVcw", 
  consumer_secret: "6itM-P0nsf2qYvPpQCfnU6BABd0",
  token: "KyiFVSincgrzSHOBtHWA2KzGrakhBj5G",
  token_secret: "tc5_Rdwu8XqNb2fhM7TC7YDRkoI"
});


// USER SHOULD ONLY GET TO OUR SERVER.  Once we receive their "Get", we then query YELP API.  Then pass the data back to user.

 module.exports = {
    searchQuery: function(req, res){

        var queryName = req.body.term
        var queryLocation = req.body.location

        console.log("Req body is, ", req.body)
        console.log("REQ name", queryName)
        console.log("REQ location", queryLocation)

        yelp.search({term: queryName, location: queryLocation}, function(error, data) {
          console.log(error);
          console.log(data);
          res.send(200, data)
        });

        console.log("Req is, ", req.url)
    },

    businessQuery: function(req, res){
      console.log('In business Query in server, ', req.body)
      var queryId = req.body.id

      yelp.business(queryId, function(err, data){
        if (err) throw err;
        res.send(200,data)
      })

    },

 }