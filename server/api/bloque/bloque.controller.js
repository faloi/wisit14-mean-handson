'use strict';

var _ = require('lodash');
var Bloque = require("./bloque.model")

exports.index = function(req, res) {
  Bloque.find({}, function(err, bloques) {
    res.json(200, bloques)
  });
};

exports.show = function(req, res) {
  Bloque.findOne({numero: parseInt(req.params.id)}, function(err, bloque) {
    if (bloque == null)
      res.send(404);
    else
      res.json(bloque);
  });
};
