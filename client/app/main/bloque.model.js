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

    if (actividad.asiste) {
      this.inhabilitarActividadesSolapadas(actividad);
      this.habilitarActividadesNoSolapadas(actividad);
    } else {
      this.habilitarActividadesSolapadas(actividad);
    }
  };

  Bloque.prototype.inhabilitarActividadesSolapadas = function(actividad) {
    _(this.actividades)
      .without(actividad)
      .filter(function (act) {
        return act.sePisaCon(actividad);
      })
      .forEach(function (act) {
        act.asiste = false
      });
  };

  Bloque.prototype.habilitarActividadesNoSolapadas = function(actividad) {
    _(this.actividades)
      .without(actividad)
      .reject(function (act) {
        return act.sePisaCon(actividad);
      })
      .reject("asiste")
      .forEach(function (act) {
        act.asiste = null
      });
  };

  Bloque.prototype.habilitarActividadesSolapadas = function(actividad) {
    var resto = _.without(this.actividades, actividad);
    _(resto)
      .filter({asiste: false})
      .reject(function(act) {
        return _.any(resto, function (otra) {
          return act != otra && otra.asiste && act.sePisaCon(otra);
        })
      })
      .forEach(function (act) {
        act.asiste = null
      });
  };

  return Bloque;
});
