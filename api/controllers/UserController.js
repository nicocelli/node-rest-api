'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.getAllUsers = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.getUser = function(req, res) {
  User.find({login: req.params.login}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update = function(req, res) {
  User.findOneAndUpdate(req.params.login, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete = function(req, res) {
  User.remove({
    _id: req.params.login
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuário foi removido com sucesso.' });
  });
};
