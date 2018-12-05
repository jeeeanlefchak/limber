"use strict"

var dbConnection = require('../../core/db-connection');
var Sequelize = require("sequelize");
var db = dbConnection();

var contatoModel = db.define('contato', {
    id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          indexes: [{unique: true, fields: ['id']}]

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    twitter: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    favorite: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue : false
    }
});

module.exports = contatoModel;
