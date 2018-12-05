"use strict"

var ContatoModel = require('./contato-model');

exports.save = function (req, res) {
    var contato = new ContatoModel(req.body);
    if (contato.id) {
        console.log("ATUALIZANDO.......")
        update(req, res, contato);
    } else {
        console.log("salvando.......")
        contato.save()
            .then(function (contato) {
                res.send(contato);
            })
            .catch(function (error) {
                res.send(null);
            })
    }
};

exports.getById = function (req, res) {
    ContatoModel.findById(req.params.id).then(function (contato) {
        res.json(contato);
    }).catch(function (error) {
        res.send(null);
    })
};

function update(req, res, contato) {
    ContatoModel.update(
        {
            name: contato.name,
            email: contato.email,
            twitter: contato.twitter,
            phone: contato.phone,
            favorite: contato.favorite
        },
        {
            where: {
                id: contato.id
            }
        }
    ).then(function (contato) {
        res.send(true);
    }).catch(function (error) {
        console.log(error);
        res.send(false);
    })
};

exports.delete = function (req, res) {
    ContatoModel.findOne({
        where: {
            id: req.params.id
        }

    }).then(function (contato) {
        ContatoModel.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function (removido) {
            res.json(contato);
        }).catch(function (error) {
            res.send(false);
        })
    }).catch(function (error) {
        res.send(false)
    })

};

exports.getAll = function (req, res) {
    ContatoModel.findAll().then(function (contatos) {
        res.json(contatos);
    }).catch(function (error) {
        res.send(false);
    })
}

module.exports.update = update;