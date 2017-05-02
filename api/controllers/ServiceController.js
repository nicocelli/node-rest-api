'use strict';

var mongoose = require('mongoose'),
Service = mongoose.model('Services');
var soap = require('soap');
var url = "http://www.byjg.com.br/site/webservice.php/ws/cep?WSDL";

var sap = require('bobj-access');
var credentials = { username: 'sapuser', password: 'sappassword' };


exports.getAllServices = function(req, res) {
  Service.find({}, function(err, service) {
    if (err)
    res.send(err);
    res.json(service);
  });
};


exports.create = function(req, res) {
  var newService = new Service(req.body);
  newService.save(function(err, service) {
    if (err)
    res.send(err);
    res.json(service);
  });
};


exports.getService = function(req, res) {
  Service.findById(req.params.id, function(err, service) {
    if (err)
    res.send(err);
    res.json(service);
  });
};


exports.update = function(req, res) {
  Service.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, service) {
    if (err)
    res.send(err);
    res.json(service);
  });
};


exports.delete = function(req, res) {
  Service.remove({
    _id: req.params.id
  }, function(err, service) {
    if (err)
    res.send(err);
    res.json({ message: 'Serviço foi removido com sucesso.' });
  });
};

exports.describe = function(req, res) {
  Service.findById(req.params.id, function(err, service) {
    if (err)
    res.send(err);
    
    //descreve o serviço
    soap.createClient(service.url, function(err, client) {
      if (err)
      res.send(err);
      res.json(client.describe())
    });
  });
};

