'use strict';

app
  .controller('MainCtrl', function ($scope, Bloques) {
    $scope.conferencia = Bloques.all();
  })

  .controller('BloqueCtrl', function ($scope, $routeParams, Bloques) {
    $scope.bloque = Bloques.get(parseInt($routeParams.numeroBloque));

    $scope.cambiarAsistencia = function(actividad) {
      $scope.bloque.cambiarAsistencia(actividad);
    };
  });
