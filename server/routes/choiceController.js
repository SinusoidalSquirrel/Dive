var Engine = require('../engines/engine.js');
var e = new Engine();

 module.exports = {
    userChoice: function(req, res){  // input data should be: {  userChoice: "isLike", yelp_id: "xxxx", user_id: "yyy" }
        // Parse User input.  Add "like/dislike" to user_id.  Then rest of data should be updated

        var queryId = req.body.yelp_id
        var queryIsLike = req.body.isLike;
        
        console.log("REQ name", queryId)
        console.log("REQ isLike", queryIsLike)

        if (queryIsLike === 'like'){
            console.log("In ", queryIsLike);

            e.likes.add();

            res.send(200);  // CHANGE THIS AFTER TESTING
        } else if (queryIsLike === 'dislike'){
            console.log("In ", queryIsLike);
            
            e.dislikes.add();

            res.send(200);  // CHANGE THIS AFTER TESTING

        }

    },

    refresh: function(req, res){

    },

 }