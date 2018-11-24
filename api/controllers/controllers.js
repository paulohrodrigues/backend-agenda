'use strict';

var model = require('../models/models');

exports.create = function(req, res){
    model.create(req.body)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};

exports.read = function(req, res){
    model.read()
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
}

exports.update = function(req, res) {
    model.update(req.params.id,req.body)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};

exports.delete = function(req, res) {
    model.delete(req.params.id)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};