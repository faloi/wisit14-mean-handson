app.service('Bloques', function(Bloque, $http) {
  const baseUrl = "/api/bloques";

  var Bloques = {};

  Bloques.all = function() {
    return $http.get(baseUrl).then(function (response) {
      return _.map(response.data, Bloque.fromJson);
    });
  };

  Bloques.get = function (numero) {
    return $http.get("/api/bloques/" + numero).then(function (response) {
      return Bloque.fromJson(response.data);
    });
  };

  return Bloques;
})
