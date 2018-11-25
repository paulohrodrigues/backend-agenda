'use strict';

var model = require('../models/models');

/** @description Control responsible for managing the contact register
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
exports.create = (req, res) => {
    model.create(req.body)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};

/** @description Control responsible for listing contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
exports.read = (req, res) => {
    model.read()
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
}

/** @description Control responsible for updating contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
exports.update = (req, res) => {
    model.update(req.params.id,req.body)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};

/** @description Control responsible for deleting contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
exports.delete = (req, res) => {
    model.delete(req.params.id)
    .then((r)=>{
        res.json(r);
    }).catch((e)=>{
        console.log(e);
        res.json(e);
    });
};