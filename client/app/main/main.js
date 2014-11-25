'use strict';

angular.module('wisitTrackerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .when('/bloque/:numeroBloque', {
        templateUrl: 'app/main/bloque.html',
        controller: 'BloqueCtrl'
      });
  });
