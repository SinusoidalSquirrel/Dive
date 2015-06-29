(function() {
  // var serverUrl = "http://tranquil-badlands-7300.herokuapp.com";
  var serverUrl = "";
  angular
    .module('dive')

    .service('CardService', CardService, '$http');

    // With angular there can be many different $scopes but only one $rootScope for the entire app. 
    // It is also accessible anywhere in the app, hence no injection
    function CardService($rootScope, $http){
      // counter to point at current/next yelp business
      this.i = 0;
      // holds set of 20 businesses at a time for the user to cycle through
      this.info = [];

      this.retrieve = function(data){
        // retrieves information from the algorithm to be set to info. This occurs in the beginning and
        // everytime the user gets to the end of the info array.
        this.info = data;
        console.log(data);
        // reset to 0 to cycle through new information
        this.i = 0;
      }

      // called to flip up a new card/info from this.info's array
      this.addCard = function(){
        // if info is empty there was no call to the algorithm, hence they didn't specify their location

        if(this.info.length === 0){
          alert("Please specify a location");
        }else{
          if(this.i === 20){
            // broadcasts to locationService file asking for new information from the algorithm
            $rootScope.$broadcast('newInfo');
           }
          else{
            // posts information
            return this.info[this.i];
          }
        }
      }

      /*
      this.saveCard = function(){
          //send information to mongodb to save place for tht specific user
      }
      */

      this.plusLeft = function(id){
        console.log('left');
        //Send information to algorithm (negative)
        return $http({
          method: 'POST',
          url: serverUrl + '/yelpapi/feeling/',
          // specifying to only search for bars and only at the location they inputted
          data: {feeling: 0, restaurantID: id, userId: window.localStorage['userId']},
          contentType: "application/json"
        })
        .then(function (resp) {
          // upon return of data, send it to CardService's retrieve function in the form of an arrays
          console.log(resp.data);
        });
      }

      this.plusRight = function(id){
        console.log('right');
        //Send information to algorithm (positive)
        return $http({
          method: 'POST',
          url: serverUrl + '/yelpapi/feeling/',
          // specifying to only search for bars and only at the location they inputted
          data: {feeling: 1, restaurantID: id, userId: window.localStorage['userId']},
          contentType: "application/json"
        })
        .then(function (resp) {
          // upon return of data, send it to CardService's retrieve function in the form of an arrays
          console.log(resp.data);
        });
      }
    }

})();