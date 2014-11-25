'use strict';

var Actividad = function(nombre, asiste) {
  this.nombre = nombre;
  this.asiste = asiste;
}

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
  };
}

angular.module('wisitTrackerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.actividades = _.map([
      {
        nombre: "Experiencias de la construcción de una carrera de programación",
        asiste: null
      },
      {
        nombre: "Pleasy Web: Inclusion Digital",
        asiste: true
      },
      {
        nombre: "Computadora Industrial Abierta Argentina (CIAA)",
        asiste: false
      },
      {
        nombre: "Construyendo una infraestructura de Big Data rentable y escalable",
        asiste: null
      },
      {
        nombre: "Escalar sin antecedentes - Una Aventura de Microservicios",
        asiste: null
      },
      {
        nombre: "Utilización de NoSQL para resolución de problemas al trabajar con cantidades masivas de datos",
        asiste: null
      },
      {
        nombre: "En camino hacia Java 8",
        asiste: null
      },
      {
        nombre: "Implementando Puppet en una agencia estatal en Argentina",
        asiste: null
      },
      {
        nombre: "Un sistema para 500 millones de inversiones",
        asiste: null
      }
    ], function(actividadJson) {
      return new Actividad(actividadJson.nombre, actividadJson.asiste);
    });
  });
