
(function() {

  angular
    .module('dive')

    .service('CardService', CardService);

     // CardService.$inject = ['LocationFactory'];

     function CardService(){
        this.i = 0;
        this.info;
        this.retrieve = function(data){
            this.info = data;
            console.log(this.info[0])
        }
        this.card = function(){
            return {image: "./img/background.jpg", name: "Homepage", info: "this is where it all begins, can you see the shingingwdoia aopufia aodsf s d"}
        }
        this.addCard = function(){
            //Add a card to the ion-pane
            return this.info[this.i]
        }
        this.plusLeft = function(){
            console.log('left')
            //Send information to algorithm (negative)
        }
        this.plusRight = function(){
            console.log('right')
            //Send information to algorithm (positive)
        }
    }


})();