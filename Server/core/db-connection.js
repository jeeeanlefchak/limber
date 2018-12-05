"use strict"
// http://docs.sequelizejs.com/
var Sequelize = require('sequelize');
var connection = null;
function getDbConfig() {
	var config = {
        host: 'localhost',
        database: 'limber',
        username: 'postgres',
        password: '123456',
        port: 5432,
        ssl: false
    }
    return config;
}
function createConnection() {
    var config = getDbConfig();
    if (connection == null) {
        connection = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: 'postgres',
            port: config.port,
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            },
            dialectOptions: {
                ssl: config.ssl
            },
            define: {
              freezeTableName: true,
              createdAt: false,
              updatedAt: false
            }
        });
        connection.force = {force: false};
    }
    return connection;
}

module.exports = createConnection;
