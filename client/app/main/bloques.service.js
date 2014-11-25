app.service('Bloques', function(Bloque) {
  var Bloques = {};

  Bloques.all = function() {
    return _.map([
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
      }], Bloque.fromJson);
  };

  Bloques.get = function (numero) {
    return _.find(Bloques.all(), { numero: numero });
  };

  return Bloques;
})
