'use strict';
module.exports = function(app) {
  var serviceController = require('../controllers/ServiceController');


  // Service Routes
  app.route('/services')
    .get(serviceController.getAllServices)
    .post(serviceController.create);


  app.route('/services/:id')
    .get(serviceController.getService)
    .put(serviceController.update)
    .delete(serviceController.delete);

  app.route('/services/:id/describe')
    .post(serviceController.describe);
};