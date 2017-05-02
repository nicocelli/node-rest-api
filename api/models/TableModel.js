'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TableSchema = new Schema({
    
    database: {
        type: String,
        Required: 'Database of table'
    },
    
    owner: {
        type: String,
        Required: 'Owner of table'
    },
    
    name: {
        type: String,
        Required: 'Table name'
    },
    
    description: {
        type: String,
        Required: 'Table description'
    },
    
    columns:
    [{name: {
        type: String,
        Required: 'Name of column'
        },
        type: {
            type: [{
                type: String,
                enum: ['String', 'Numero']
            }],
            default: ['String']
        },

        defaultValue: {
            type: String,
            Required: 'The default value of the column'
            }
        }
    ],

    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tables', TableSchema);