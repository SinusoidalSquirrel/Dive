var yelpController = require('./yelpController.js')

module.exports = function(app){
		console.log("called");
    app.route('/search/*')
        .post(yelpController.searchQuery)

    app.route('/business/')
        .post(yelpController.businessQuery)
<<<<<<< HEAD
=======

    app.route('/feeling/')
        .post(yelpController.feelingQuery)
>>>>>>> rebasing/androiddeploy
    app.route('/geolocation/')
        .post(yelpController.geolocationQuery)
}


/*
curl --post --include 'https://tranquil-badlands-7300.herokuapp.com/yelpapi/search/' \
  -H 'X-Mashape-Key: MPXFZ70BIKmshIiGXT0kW3NVQBkxp1jYjKfjsnqASL2blrFHwL' \
  -H 'Accept: application/json'


curl -X POST -data "term=burger&location=san%francisco" https://tranquil-badlands-7300.herokuapp.com/yelpapi/search/ --header "Content-Type:application/json"

*/
