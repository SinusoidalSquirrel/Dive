var User = require('./userModel.js'),
    Q    = require('q'),
    jwt  = require('jwt-simple');

module.exports = {
  login: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // Creates a promise-returning function
    // binding it with the users model
    var findUser = Q.nbind(User.findOne, User);
    // find each person with a username matching the provided username
    findUser({username: username})
      .then(function(user){
        // if user does not exist, throw an error
        if(!user){
          next(new Error('Username does not exist'));
        // if user exists, check if password is valid
        }else{
          return user.checkPasswords(password)
            .then(function(passwordMatch){
              // returns a new token if user password is validated
              if(passwordMatch){
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              }else{
                return next(Error('Password does not match'));
              }
            })
        }
      })
      .fail(function(error){
        next(error);
      })
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // Creates a promise-returning function
    // binding it with the users model
    var findUser = Q.nbind(User.findOne, User);

    // check to see if user already exists
    findUser({username: username})
      .then(function(user){
        if(user){
          next(new Error('Username already exists!'));
        }else{
          // creates a new user if not already exists
          var createUser = Q.nbind(User.create, User);
          var newUser = {
            username: username,
            password: password
          };
          return createUser(newUser);
        }
      })
      .then(function(user){
        // creates a new token once user is created
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
        console.log('res.json token', token)
      })
      .fail(function(error){
        next(error);
        console.log('in fail')
      })

  },

  checkAuth: function (req, res, next) {

  }
};
