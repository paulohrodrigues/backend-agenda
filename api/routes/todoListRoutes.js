'use strict';
module.exports = function(app) {
    var ctrl = require('../controllers/todoListController');

  // ctrl Routes
    app.route('/agenda')
        .get(ctrl.read)
        .post(ctrl.create);

    app.route('/modify/:id')
      .delete(ctrl.delete)
      .put(ctrl.update);
};