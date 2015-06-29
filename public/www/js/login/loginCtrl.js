(function() {

  angular
    .module('dive')

    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$location', '$window', 'AuthFactory', 'LocationFactory']; 

  function LoginCtrl($scope, $location, $window, AuthFactory, LocationFactory){

  	$scope.user = {};

  	$scope.login = function() {
      AuthFactory.login($scope.user)
        .then(function(token){
          $window.localStorage.setItem('com.dive', token);
          window.localStorage['userId'] = $scope.user.username;
          $location.path('/app/location');
          $scope.user = {};
        })
        .catch(function(error){
          alert("Username and password combination failed. Please try again!");
          console.error(error);
        })
  	};
  }

})();
