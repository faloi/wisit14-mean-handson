'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ActividadSchema = new Schema({
  nombre: String,
  inicio: String,
  fin: String,
  espacio: String
});

var BloqueSchema = new Schema({
  numero: Number,
  dia: String,
  actividades: [ActividadSchema]
});

module.exports = mongoose.model('Bloque', BloqueSchema);
