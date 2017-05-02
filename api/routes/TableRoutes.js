'use strict';
module.exports = function(app) {
  var tableController = require('../controllers/TableController');


  // todoList Routes
  app.route('/tables')
    .get(tableController.getAllTables)
    .post(tableController.create);


  app.route('/tables/:id')
    .get(tableController.getTable)
    .put(tableController.update)
    .delete(tableController.delete);
};