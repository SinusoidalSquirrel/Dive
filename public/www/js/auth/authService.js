(function() {
  var serverUrl = "http://tranquil-badlands-7300.herokuapp.com";
  // var serverUrl = ""; // this is for localhost testing

  angular
    .module('dive')
    .factory('AuthFactory', function ($http, $location, $window) {

      var login = function (user) {
        //sends post request to mongodb which uses bcrypt to decipher if that user/password combination is successful
        return $http({
          method: 'POST',
          url: serverUrl + '/users/login',
          data: user,
          contentType: "application/json"
        })
        .then(function (err, resp) {
           return err.data.token;
        });
      };

      var signup = function (user) {
        //sends post request to mongodb with signup info
        return $http({
          method: 'POST',
          url: serverUrl + '/users/signup',
          data: user,
          contentType: "application/json"
        })
        .then(function (err, resp) {
            //only returns token
            return err.data.token
        });
      };

      var isAuthorized = function(){
        //if they still have their token then they are authorized and can enter without logging in
        return !!$window.localStorage.getItem('com.dive');
      }

      var signout = function () {
        //removes token for that user
        $window.localStorage.removeItem('com.dive');
        // redirects to login page
        $location.path('/login');
      };

      return {
        login: login,
        signup: signup,
        isAuthorized: isAuthorized,
        signout: signout
      };
    });
})();
