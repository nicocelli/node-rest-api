'use strict';
module.exports = function(app) {
  var userController = require('../controllers/UserController');

 // User Routes
  app.route('/users')
    .get(userController.getAllUsers)
    .post(userController.create);

  app.route('/users/:login')
    .get(userController.getUser)
    .put(userController.update)
    .delete(userController.delete);
};