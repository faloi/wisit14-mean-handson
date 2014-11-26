'use strict';

app
  .controller('MainCtrl', function ($scope, Bloques) {
    Bloques.all().then(function(bloques) {
      $scope.conferencia = bloques;
    });
  })

  .controller('BloqueCtrl', function ($scope, $routeParams, Bloques) {
    Bloques.get(parseInt($routeParams.numeroBloque)).then(function(bloque) {
      $scope.bloque = bloque;
    });

    $scope.cambiarAsistencia = function(actividad) {
      $scope.bloque.cambiarAsistencia(actividad);
    };
  });
