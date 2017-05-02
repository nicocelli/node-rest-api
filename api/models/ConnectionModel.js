'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConnectionSchema = new Schema({
  
  description: {
    type: String,
    Required: 'Description of the connection'
  },

  type: {
    type: [{
      type: String,
      enum: ['Oracle', 'SQL Server', 'Postgree']
    }],
    default: ['Oracle']
  },

  name: {
    type: String,
    Required: 'Database name.'
  },

  host: {
    type: String
  },

  user: {
    type: String
  },

  password: {
    type: String
  }

});

module.exports = mongoose.model('Connections', ConnectionSchema);