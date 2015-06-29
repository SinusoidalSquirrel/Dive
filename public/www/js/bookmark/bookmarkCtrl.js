(function() {

  angular
    .module('dive')

    .controller('BookmarkCtrl', BookmarkCtrl);

  BookmarkCtrl.$inject = ['$scope', 'CardService'];

  function BookmarkCtrl($scope, CardService){
    $scope.bookmark = {};

    $scope.getBookmark = function(){
      CardService.getBookmark()
        .then(function(data){
          $scope.bookmark = data;
        });
    };

    $scope.getBookmark();
  }

})();