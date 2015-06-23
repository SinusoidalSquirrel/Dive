var express = require('express');
var app = require('./server/server.js');
var dbClient = require('./server/database.js');


// view engine setup


app.listen(process.env.PORT || 4000);
console.log('Server now listening on port ' + 4000);


/*
Bryan Note on testing Yelp API:
* Post request to http://server/yelpapi/search/  with data: {term: "business query", location: "your city"}
*   Make sure your post request has header Content-type = application/json.
*   You can use "Post man" (google chrome ext.)  In there, set your data to RAW and then JSON.  
*   Set header Content-Type: "application/json"


bryan test

*/
