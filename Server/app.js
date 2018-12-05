"use strict"

var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var cors = require('cors');
var path = require('path');
var contatoCtrl = require('./services/contato/contato-ctrl');
require('./core/models');
var app = express();

const port = 8080;
const ip = 'localhost';

app.use(bodyParser.json());
app.use(errorHandler());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
});

app.listen(port, ip, function () {
    console.log('Servidor iniciado na porta ' + port);
});

app.route('/contact').post(contatoCtrl.save);

app.route('/contact/:id').get(contatoCtrl.getById).delete(contatoCtrl.delete);

app.route('/contact').get(contatoCtrl.getAll);

exports.App = app;
