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
      },
      {
        numero: 4,
        dia: "Sábado",
        actividades: [
          {
            nombre: "Diseño de software y hardware de un Controlador Lógico Programable (PLC) y su entorno de programación",
            inicio: "10:00",
            fin: "10:35",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Improving the resilience of embedded architectures to Hardware Faults",
            inicio: "10:35",
            fin: "11:10",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Programación orientada a sujetos",
            inicio: "10:00",
            fin: "10:35",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "Un enfoque participativo y ágil para la enseñanza de objetos en la FIUBA",
            inicio: "10:35",
            fin: "11:10",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "Desarrollo Web en Grails",
            inicio: "10:00",
            fin: "11:10",
            espacio: "Laboratorio Verde",
            asiste: null
          }
        ]
      },
      {
        numero: 5,
        dia: "Sábado",
        actividades: [
          {
            nombre: "FOP-ARSAT: Simulando la Red Federal de Fibra Óptica usando Python",
            inicio: "11:40",
            fin: "12:15",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Implementación de Safety Critical Java HVM sobre ARM Cortex M4 y extensión de su IDE",
            inicio: "12:15",
            fin: "12:50",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Wollok – Relearning How To Teach Object-Oriented Programming",
            inicio: "11:40",
            fin: "12:15",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "¿Por qué todos los chicos y todas las chicas deben aprender a programar?",
            inicio: "12:15",
            fin: "12:50",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "Desarrollo Web en Grails",
            inicio: "11:40",
            fin: "12:50",
            espacio: "Laboratorio Verde",
            asiste: null
          }
        ]
      },
      {
        numero: 6,
        dia: "Sábado",
        actividades: [
          {
            nombre: "De mentes libres",
            inicio: "14:00",
            fin: "14:35",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Utilización de NoSQL para resolución de problemas al trabajar con cantidades masivas de datos",
            inicio: "14:35",
            fin: "15:10",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Los cambios de la innovación y su impacto en el sector de las tecnologías de la información y la comunicación",
            inicio: "15:10",
            fin: "15:45",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "Breakpoint support for Live Environments: The case of Pharo",
            inicio: "14:00",
            fin: "14:35",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "An approach to typed data binding using typed macros",
            inicio: "14:35",
            fin: "15:10",
            espacio: "Auditorio",
            asiste: null
          },
          {
            nombre: "Melta: Prototipo de una base de objetos en Python",
            inicio: "15:10",
            fin: "15:45",
            espacio: "Auditorio",
            asiste: null
          },
        ]
      },
      {
        numero: 7,
        dia: "Sábado",
        actividades: [
          {
            nombre: "Lean Sales Up",
            inicio: "16:15",
            fin: "17:00",
            espacio: "Aula Magna",
            asiste: null
          },
          {
            nombre: "El lenguaje de programación Crystal",
            inicio: "16:15",
            fin: "17:00",
            espacio: "Auditorio",
            asiste: null
          }
        ]
      }
    ], Bloque.fromJson);
  };

  Bloques.get = function (numero) {
    return _.find(Bloques.all(), { numero: numero });
  };

  return Bloques;
})
