var choiceController = require('./choiceController.js')

module.exports = function(app){
    app.route('/feeling/')
        .post(choiceController.userChoice)

    app.route('/refresh/')
        .post(choiceController.refresh)       
}