'use strict';
module.exports = (app) => {
  const ctrl = require('../controllers/controllers');

  /**
  *  @api {get} /agenda/ list contacts
  * @apiName ReadContacts
  * @apiGroup Contacts
  *
  * @apiSuccess {JSON} JSON any of firestore
  */
  app.route('/agenda').get(ctrl.read);
  /**
  * @api {post} /agenda/ create contacts
  * @apiName CreateContacts
  * @apiGroup Contacts
  *
  *  @apiParam {JSON} Data contacts for save. Example: {name: 'José', number: 82999315616}
  *
  * @apiSuccess {JSON} JSON any of firestore
  */
  app.route('/agenda').post(ctrl.create);

  /**
  * @api {delete} /modify/:id delete contacts
  * @apiName DeleteContacts
  * @apiGroup Contacts
  *
  * @apiParam {String} id contacts unique ID.
  *
  * @apiSuccess {JSON} JSON any of firestore
  */
  app.route('/modify/:id').delete(ctrl.delete);

  /**
  * @api {update} /modify/:id update contacts
  * @apiName UpdateContacts
  * @apiGroup Contacts
  *
  * @apiParam {String} id contacts unique ID.
  * @apiParam {JSON} Data contacts for updated {name: 'José', number: 82999315616}
  *
  * @apiSuccess {JSON} JSON any of firestore
  */
  app.route('/modify/:id').put(ctrl.update);
};