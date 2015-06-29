(function() {

  angular
    .module('dive')

    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$scope', '$location', 'AuthFactory'];

  function MenuCtrl($scope, $location, AuthFactory){
    // the only necessary function in the menu bar...renders the function necessary for deleting that token
    // relevant to authentication.
  	$scope.signout = function() {
      AuthFactory.signout()
  	};
  }

})();
