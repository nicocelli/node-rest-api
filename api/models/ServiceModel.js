'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ServiceSchema = new Schema({

    name: {
        type: String,
        Required: 'Name of the service'
    },
    
    type: {
        type: [{
            type: String,
            enum: ['SOAP', 'REST']
        }],
        default: ['SOAP']
    },
    
    url: {
        type: String,
        Required: 'WSDL address of service'
    },

    service: {
      name: "",
      port:{
          type: String,
          name: "",
          methods: [{
              type: String,
              name: "",
              imput: [{
                  name: "",
                  type: ""
              }],
              output: [{
                  name: "",
                  type: ""
              }]
          }]
      }
    },
    
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Services', ServiceSchema);