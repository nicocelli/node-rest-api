'use strict';

var mongoose = require('mongoose'),
  Connection = mongoose.model('Connections');

exports.getAllConnections = function(req, res) {
  Connection.find({}, function(err, connection) {
    if (err)
      res.send(err);
    res.json(connection);
  });
};


exports.create = function(req, res) {
  var newConnection = new Connection(req.body);
  newConnection.save(function(err, connection) {
    if (err)
      res.send(err);
    res.json(connection);
  });
};


exports.getConnection = function(req, res) {
  Connection.findById(req.params.id, function(err, connection) {
    if (err)
      res.send(err);
    res.json(connection);
  });
};


exports.update = function(req, res) {
  Connection.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, connection) {
    if (err)
      res.send(err);
    res.json(connection);
  });
};


exports.delete = function(req, res) {
  Connection.remove({
    _id: req.params.id
  }, function(err, connection) {
    if (err)
      res.send(err);
    res.json({ message: 'Conexão foi removida com sucesso.' });
  });
};
