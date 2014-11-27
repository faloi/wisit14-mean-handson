/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Bloque = require('../api/bloque/bloque.model');
var User = require('../api/user/user.model');

Bloque.find({}).remove(function() {
  Bloque.create(
    {
      numero: 1,
      dia: "Viernes",
      actividades: [
        {
          nombre: "Experiencias de la construcción de una carrera de programación",
          inicio: "14:30",
          fin: "15:20",
          espacio: "Aula Magna"
        },
        {
          nombre: "Pleasy Web: Inclusion Digital",
          inicio: "15:20",
          fin: "15:55",
          espacio: "Aula Magna"
        },
        {
          nombre: "Computadora Industrial Abierta Argentina (CIAA)",
          inicio: "15:55",
          fin: "16:30",
          espacio: "Aula Magna"
        },
        {
          nombre: "Tutorial en Apache Spark: Clasificando tweets en realtime",
          inicio: "14:30",
          fin: "16:00",
          espacio: "Laboratorio Rojo"
        },
        {
          nombre: "How I met your Android",
          inicio: "14:30",
          fin: "16:00",
          espacio: "Laboratorio Azul"
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
          espacio: "Aula Magna"
        },
        {
          nombre: "En camino hacia Java 8",
          inicio: "18:00",
          fin: "18:30",
          espacio: "Aula Magna"
        },
        {
          nombre: "Hackear la Política",
          inicio: "18:45",
          fin: "19:15",
          espacio: "Aula Magna"
        },
        {
          nombre: "Webapp moderna utilizando Stack Mean",
          inicio: "17:15",
          fin: "19:15",
          espacio: "Laboratorio Rojo"
        },
        {
          nombre: "How I met your Android (continuación)",
          inicio: "17:15",
          fin: "19:15",
          espacio: "Laboratorio Azul"
        }
      ]
    },
    {
      numero: 3,
      dia: "Viernes",
      actividades: [
        {
          nombre: "Poné Node.js en la nube",
          inicio: "19:30",
          fin: "20:00",
          espacio: "Aula Magna"
        },
        {
          nombre: "Escalar sin antecedentes - Una Aventura de Microservicios",
          inicio: "20:45",
          fin: "21:15",
          espacio: "Aula Magna"
        },
        {
          nombre: "Un sistema para 500 millones de inversiones",
          inicio: "21:30",
          fin: "22:00",
          espacio: "Aula Magna"
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
          espacio: "Aula Magna"
        },
        {
          nombre: "Improving the resilience of embedded architectures to Hardware Faults",
          inicio: "10:35",
          fin: "11:10",
          espacio: "Aula Magna"
        },
        {
          nombre: "Programación orientada a sujetos",
          inicio: "10:00",
          fin: "10:35",
          espacio: "Auditorio"
        },
        {
          nombre: "Un enfoque participativo y ágil para la enseñanza de objetos en la FIUBA",
          inicio: "10:35",
          fin: "11:10",
          espacio: "Auditorio"
        },
        {
          nombre: "Desarrollo Web en Grails",
          inicio: "10:00",
          fin: "11:10",
          espacio: "Laboratorio Verde"
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
          espacio: "Aula Magna"
        },
        {
          nombre: "Implementación de Safety Critical Java HVM sobre ARM Cortex M4 y extensión de su IDE",
          inicio: "12:15",
          fin: "12:50",
          espacio: "Aula Magna"
        },
        {
          nombre: "Wollok – Relearning How To Teach Object-Oriented Programming",
          inicio: "11:40",
          fin: "12:15",
          espacio: "Auditorio"
        },
        {
          nombre: "¿Por qué todos los chicos y todas las chicas deben aprender a programar?",
          inicio: "12:15",
          fin: "12:50",
          espacio: "Auditorio"
        },
        {
          nombre: "Desarrollo Web en Grails (continuación)",
          inicio: "11:40",
          fin: "12:50",
          espacio: "Laboratorio Verde"
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
          espacio: "Aula Magna"
        },
        {
          nombre: "Utilización de NoSQL para resolución de problemas al trabajar con cantidades masivas de datos",
          inicio: "14:35",
          fin: "15:10",
          espacio: "Aula Magna"
        },
        {
          nombre: "Los cambios de la innovación y su impacto en el sector de las tecnologías de la información y la comunicación",
          inicio: "15:10",
          fin: "15:45",
          espacio: "Aula Magna"
        },
        {
          nombre: "Breakpoint support for Live Environments: The case of Pharo",
          inicio: "14:00",
          fin: "14:35",
          espacio: "Auditorio"
        },
        {
          nombre: "An approach to typed data binding using typed macros",
          inicio: "14:35",
          fin: "15:10",
          espacio: "Auditorio"
        },
        {
          nombre: "Melta: Prototipo de una base de objetos en Python",
          inicio: "15:10",
          fin: "15:45",
          espacio: "Auditorio"
        }
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
          espacio: "Aula Magna"
        },
        {
          nombre: "El lenguaje de programación Crystal",
          inicio: "16:15",
          fin: "17:00",
          espacio: "Auditorio"
        }
      ]
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
