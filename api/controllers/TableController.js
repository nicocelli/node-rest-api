'use strict';

var mongoose = require('mongoose'),
  Table = mongoose.model('Tables');

exports.getAllTables = function(req, res) {
  Table.find({}, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};


exports.create = function(req, res) {
  var newTable = new Table(req.body);
  newTable.save(function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};


exports.getTable = function(req, res) {
  Table.findById(req.params.id, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};


exports.update = function(req, res) {
  Table.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};


exports.delete = function(req, res) {
  Table.remove({
    _id: req.params.id
  }, function(err, table) {
    if (err)
      res.send(err);
    res.json({ message: 'Tabela foi removida com sucesso.' });
  });
};
