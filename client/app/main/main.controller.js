'use strict';

_.mixin({
  assignAndTransform: function(destination, source, transformations) {
    _.forIn(source, function(value, key) {
      if (transformations[key] != undefined)
        destination[key] = transformations[key](value);
      else
        destination[key] = value;
    });

    return destination;
  }
});

var Actividad = function() {};

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

Actividad.prototype.cambiarAsistencia = function() {
  this.asiste = !this.asiste;
};

Actividad.prototype.icon = function() {
  return this.checkearAsistencia("fa-check", "fa-remove", "fa-minus");
};

Actividad.prototype.color = function() {
  return this.checkearAsistencia("btn-success", "btn-danger", "btn-default");
};

Actividad.prototype.checkearAsistencia = function(valorTrue, valorFalse, valorNull) {
  switch (this.asiste) {
    case true:
      return valorTrue;

    case false:
      return valorFalse;

    default:
      return valorNull;
  }
};

Actividad.prototype.sePisaCon = function(otra) {
  return this.duracion().overlaps(otra.duracion());
};

Actividad.prototype.duracion = function() {
  return moment().range(this.inicio, this.fin);
};

var Bloque = function() {};

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

Bloque.prototype.inicio = function() {
  return _.min(this.actividades, 'inicio').inicio;
};

Bloque.prototype.fin = function() {
  return _.max(this.actividades, 'fin').fin;
};

Bloque.prototype.cambiarAsistencia = function(actividad) {
  actividad.cambiarAsistencia();

  if (!actividad.asiste)
    return;

  _(this.actividades)
    .without(actividad)
    .filter(function(act) { return act.sePisaCon(actividad); })
    .forEach(function(act) { act.asiste = false });
};

angular.module('wisitTrackerApp')
  .service('Bloques', function() {
    var Bloques = {};

    Bloques.all = function() {
      return [
      {
        numero: 1,
        dia: "Viernes",
        actividades: [
          {
            nombre: "Experiencias de la construcción de una carrera de programación",
            inicio: "14:30",
            fin: "15:20",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Pleasy Web: Inclusion Digital",
            inicio: "15:20",
            fin: "15:55",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Computadora Industrial Abierta Argentina (CIAA)",
            inicio: "15:55",
            fin: "16:30",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Tutorial en Apache Spark: Clasificando tweets en realtime",
            inicio: "14:30",
            fin: "16:00",
            espacio: "Laboratorio Rojo",
            asiste: null
          },
          {
            nombre: "How I met your Android",
            inicio: "14:30",
            fin: "16:00",
            espacio: "Laboratorio Azul",
            asiste: null
          }
        ]
      },
      {
        numero: 2,
        dia: "Viernes",
        actividades: [
          {
            nombre: "Desarrollo de videojuegos con pilas-engine",
            inicio: "17:15",
            fin: "17:45",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Escalar sin antecedentes - Una Aventura de Microservicios",
            inicio: "18:00",
            fin: "18:30",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Utilización de NoSQL para resolución de problemas al trabajar con cantidades masivas de datos",
            inicio: "18:45",
            fin: "19:15",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Webapp moderna utilizando Stack Mean",
            inicio: "17:15",
            fin: "19:15",
            espacio: "Laboratorio Rojo",
            asiste: null
          },
          {
            nombre: "How I met your Android",
            inicio: "17:15",
            fin: "19:15",
            espacio: "Laboratorio Azul",
            asiste: null
          }
        ]
      },
      {
        numero: 3,
        dia: "Viernes",
        actividades: [
          {
            nombre: "En camino hacia Java 8",
            inicio: "19:30",
            fin: "20:00",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Poné Node.js en la nube",
            inicio: "20:45",
            fin: "21:15",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Un sistema para 500 millones de inversiones",
            inicio: "21:30",
            fin: "22:00",
            espacio: "Aula Magna",
            asiste: null
          }
        ]
      }];
    };

    Bloques.get = function (numero) {
      return _.find(Bloques.all(), { numero: numero });
    };

    return Bloques;
  })

  .controller('MainCtrl', function ($scope, Bloques) {
    $scope.conferencia = _.map(Bloques.all(), Bloque.fromJson);
  })

  .controller('BloqueCtrl', function ($scope, $routeParams, Bloques) {
    $scope.bloque = Bloque.fromJson(Bloques.get(parseInt($routeParams.numeroBloque)));

    $scope.cambiarAsistencia = function(actividad) {
      $scope.bloque.cambiarAsistencia(actividad);
    };
  });
