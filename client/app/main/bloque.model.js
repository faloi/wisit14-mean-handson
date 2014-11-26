app.service("Bloque", function(Actividad) {
  var Bloque = function () {};

  Bloque.fromJson = function (json) {
    return _.assignAndTransform(
      new Bloque(),
      json,
      {
        inicio: Date.parse,
        fin: Date.parse,
        actividades: _.partialRight(_.map, Actividad.fromJson)
      }
    );
  };

  Bloque.prototype.inicio = function () {
    return _.min(this.actividades, 'inicio').inicio;
  };

  Bloque.prototype.fin = function () {
    return _.max(this.actividades, 'fin').fin;
  };

  Bloque.prototype.cambiarAsistencia = function (actividad) {
    actividad.cambiarAsistencia();

    this.desbloquear(this.actividades);
    this.deseleccionar(this.actividadesSolapadasPor(actividad));
    this.bloquear(this.actividadesSolapadasPorSeleccionadas());
  };

  Bloque.prototype.actividadesSolapadasPor = function(actividad) {
    return _(this.actividades)
      .without(actividad)
      .filter(function (act) {
        return act.sePisaCon(actividad);
      })
      .value();
  };

  Bloque.prototype.actividadesSolapadasPorSeleccionadas = function() {
    return _(this.actividadesSeleccionadas())
      .map(this.actividadesSolapadasPor, this)
      .flatten()
      .uniq()
      .value();
  };

  Bloque.prototype.actividadesSeleccionadas = function() {
    return _.filter(this.actividades, "asiste");
  };

  Bloque.prototype.desbloquear = function(actividades) {
    _(actividades).filter({asiste: false}).forEach(function(act) { act.asiste = null });
  };

  Bloque.prototype.deseleccionar = function(actividades) {
    _(actividades).filter({asiste: true}).forEach(function(act) { act.asiste = null });
  };

  Bloque.prototype.bloquear = function(actividades) {
    _.forEach(actividades, function(act) { act.asiste = false });
  };

  Bloque.prototype.setAsistencias = function(preferencias) {
    var self = this;

    _.forEach(preferencias, function(preferencia) {
      var actividad = _.find(self.actividades, { _id: preferencia.id });
      actividad.asiste = preferencia.asiste;
    });
  };

  return Bloque;
});
