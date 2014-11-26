app.service('Bloques', function(Bloque, $http, $localStorage) {
  var baseUrl = "/api/bloques";

  var Bloques = {};

  Bloques.all = function() {
    return $http.get(baseUrl).then(function (response) {
      return _(response.data).map(Bloque.fromJson);
    });
  };

  Bloques.get = function (numero) {
    return $http.get(baseUrl + "/" + numero).then(function (response) {
      var bloque = Bloque.fromJson(response.data);

      var preferencias = $localStorage['bloque-' + bloque.numero];

      if (preferencias != null)
        bloque.setAsistencias(preferencias);

      return bloque;
    });
  };

  Bloques.savePreferences = function(bloque) {
    $localStorage['bloque-' + bloque.numero] = _.map(
      bloque.actividades,
      function(actividad) {
        return {
          id: actividad._id,
          asiste: actividad.asiste
        }
      }
    );
  };

  return Bloques;
})
