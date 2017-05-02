'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },

  login: {
    type: String,
    Required: 'Login of user.'
  },

  password: {
    type: String,
    Required: 'Password of the user.'
  }

});

module.exports = mongoose.model('Users', UserSchema);