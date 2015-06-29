(function() {

  angular
    .module('dive')

    .controller('LocationCtrl', LocationCtrl);

  //injecting $rootScope so that it can listen for a newInfo broadcast from CardService and $timeout to be asynchronously called
  LocationCtrl.$inject = ['$scope', '$location', 'LocationFactory', '$rootScope', '$timeout', '$cordovaGeolocation', '$http', 'geoLocation'];

  function LocationCtrl($scope, $location, LocationFactory, $rootScope, $timeout, $cordovaGeolocation, $http, geoLocation){
    $scope.search = {};

    //always listening for when the user gets to the end of the list of businesses
    $rootScope.$on('newInfo', function(){
       $timeout(function() {
        console.log("BROADCAST HEARD");
          //recalls the function below
          $scope.searchLocation();
      });
    });

  	$scope.searchLocation = function() {
      // calls LocationFactory with the user inputted location which in turn calls
      // the algorithm for new information and sends that to CardService's retrieve function
      // console.log($scope.search.location);
      // if($scope.search.location !== 'TEST' || $scope.search.location != undefined){
      //   window.localStorage['location'] = $scope.search.location;
      //   console.log("LOCATION in IF STATEMENT: " + $scope.search.location);

      // }
      LocationFactory.searchLocation($scope.search.location)
        .then(function(response){
          // upon response, reroute to the main page
          $location.path('/app/main');
          //$scope.search.location = 'TEST';
        });
  	};
    // Adding Geolocation and Geocoding (server gets geocode from Google)
    $cordovaGeolocation
      .getCurrentPosition()
      .then(function(position){
        geoLocation.setGeolocation(position.coords.latitude, position.coords.longitude);
        console.log('set geolocation to:' + position.coords.latitude + ':' + position.coords.longitude );

        $http({
          method: 'POST',
          url: '/yelpapi/geolocation/',
          data: {lat:position.coords.latitude, long: position.coords.longitude},
          contentType: "application/json"
        })
        .then(function (resp) {
          // console.log('Client Response are', resp.data);
          $scope.search.location = resp.data.results[0].formatted_address; // need to fix this
          // console.log("search.locationVal, ", $scope.search.locationVal)
        });
      }); // cordovaGeolocation
  }
})();
