(function() {

  angular
    .module('dive')

    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope', '$location', '$window', 'AuthFactory', 'LocationFactory'];

  function SignupCtrl($scope, $location, $window, AuthFactory, LocationFactory){

  	$scope.user = {};

  	$scope.signup = function() {
      AuthFactory.signup($scope.user)
        .then(function(token){
          $window.localStorage.setItem('com.dive', token);
          window.localStorage['userId'] = $scope.user.username;
          $location.path('/app/location');
          $scope.user = {};
        })
        .catch(function(error){
          alert("Username already taken. Please try again!");
          console.error(error);
        })
  	};
  }

})();
