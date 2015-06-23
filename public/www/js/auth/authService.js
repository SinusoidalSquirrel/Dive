(function() {
  angular
    .module('dive')
    .factory('AuthFactory', function ($http, $location) {

      var login = function (user) {
        return $http({
          method: 'POST',
          url: '/users/login',
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

      var signup = function (user) {
        return $http({
          method: 'POST',
          url: '/users/signup',
          data: user
        })
        .then(function (resp) {
          return resp.data.token
        });
      };

      var isAuth = function(){
        return !!$window.localStorage.getItem('com.dive');
      }

      var signout = function () {
        $window.localStorage.removeItem('com.dive');
        $location.path('/login');
      };

      return {
        login: login,
        signup: signup,
        isAuth: isAuth,
        signout: signout
      };
    });
})();

