app.service("Actividad", function() {
  var Actividad = function () {};

  Actividad.fromJson = function (json) {
    return _.assignAndTransform(
      new Actividad(),
      json,
      {
        inicio: Date.parse,
        fin: Date.parse
      }
    );
  };

  Actividad.prototype.cambiarAsistencia = function () {
    if (this.asiste === true)
      this.asiste = undefined;
    else
      this.asiste = true;
  };

  Actividad.prototype.icon = function () {
    return this.checkearAsistencia("fa-check", "fa-remove", "fa-minus");
  };

  Actividad.prototype.color = function () {
    return this.checkearAsistencia("btn-success", "btn-danger", "btn-default");
  };

  Actividad.prototype.checkearAsistencia = function (valorTrue, valorFalse, valorNull) {
    switch (this.asiste) {
      case true:
        return valorTrue;

      case false:
        return valorFalse;

      default:
        return valorNull;
    }
  };

  Actividad.prototype.sePisaCon = function (otra) {
    return this.duracion().overlaps(otra.duracion());
  };

  Actividad.prototype.duracion = function () {
    return moment().range(this.inicio, this.fin);
  };

  return Actividad;
});
