"use strict"

var dbConnection = require('../core/db-connection');
var db = dbConnection();

require('../services/contato/contato-model');

db.sync(db.force);