'use strict';
module.exports = function(app) {
  var connectionController = require('../controllers/ConnectionController');


  // Connection Routes
  app.route('/connections')
    .get(connectionController.getAllConnections)
    .post(connectionController.create);


  app.route('/connections/:id')
    .get(connectionController.getConnection)
    .put(connectionController.update)
    .delete(connectionController.delete);
};