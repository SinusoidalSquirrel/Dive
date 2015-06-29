(function() {

  angular
    .module('dive')

    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope', '$location', '$window', 'AuthFactory'];

  function SignupCtrl($scope, $location, $window, AuthFactory){

  	$scope.user = {};

  	$scope.signup = function() {
      AuthFactory.signup($scope.user)
        .then(function(token){
          $window.localStorage.setItem('com.dive', token);
          $location.path('/app/location');
        })
        .catch(function(error){
          alert("Username already taken. Please try again!");
          console.error(error);
        })
  	};
  }

})();
