(function() {

  angular
    .module('dive')

    .controller('MainCtrl', MainCtrl);

    /*
      Original intent was to use native $ionicGesture, but complicated in it's similarity to watchout sprint
      where it keeps calling the function over and over again. It also doesn't allow draggablility of ionic cards
      without seperate ionic modules that broke upon the new version of angular which is bound into ionic.

      CardService is the service for this controller.
    */
  MainCtrl.$inject = ['$scope', 'CardService', '$ionicGesture'];

  function MainCtrl($scope, CardService, $ionicGesture){
    //Starts out with first card from yelp/algorithm call
    $scope.card = CardService.addCard();

    $scope.onTapLeft = function(){
      // function call to algorithm which returns that yelp business,
      // userID, and a positive or negative reaction
      if($scope.card !== undefined){
        CardService.plusLeft($scope.card.id);  
      }
      // turns up the next card in the list
      $scope.card = CardService.addCard(CardService.i);
      // points to the following card in the list for next time
      CardService.i+=1;
    }

    $scope.onTapRight = function(){
      if($scope.card !== undefined){
        CardService.plusRight($scope.card.id);  
      }
      $scope.card = CardService.addCard(CardService.i);
      CardService.i+=1;
    }

    /*
    $scope.onBookmark = function(){
      CardService.saveCard($scope.card);
      $scope.card = CardService.addCard(CardService.i);
      CardService.i+=1;
    }
    */

    //See above for explanation

    // var element = angular.element(document.querySelector('#eventPlaceholder'));
    //         var events = [{
    //         event: 'dragup',
    //         },{
    //         event: 'dragdown',
    //         },{
    //         event: 'dragleft',
    //         },{
    //         event: 'dragright',
    //         }];
    // angular.forEach(events, function(obj){
    // var dragGesture = $ionicGesture.on(obj.event, function (event) {
    //     $scope.$apply(function () {
    //         $scope.lastEventCalled = obj.text;
    //         //console.log(obj.event)
    //         if (obj.event == 'dragleft'){                           
    //             CardService.plusLeft();
    //             $scope.card = CardService.addCard(CardService.i);
    //         }
    //         if (obj.event == 'dragright'){                          
    //             CardService.plusRight();
    //             $scope.card = CardService.addCard();
    //         }
    //     });

    //     }, element);
    // }); 
  }

})();
