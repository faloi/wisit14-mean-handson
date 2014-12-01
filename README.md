wisit14-mean-handson
====================

Seed para el Hands On sobre stack MEAN a realizarse en el marco del [#wisit14](http://wisit.uqbar.org/)

## Objetivo del taller
Constuiremos una aplicación web para llevar el registro de las actividades (charlas y/o talleres) a las cuáles queremos asistir, y ayudarnos a visualizar el solapamiento entre las mismas. Obviamente, utilizaremos las distintas tecnologías del stack MEAN para lograrlo.

## Prerrequisitos
Para poder participar del taller, es necesario instalar:
- Git
- MongoDB
- NodeJS
- Algún editor de texto, como el Sublime Text 3

Pueden encontrar links directos de descarga en [el Google Doc que compartimos por mail](https://docs.google.com/document/d/13wPA1RIsDhLjMzW8573F6L7wDXglu5r9G8cTlRHRdiA/edit#heading=h.s6aeidy366d).

## Inicio rápido
Asumiendo que fueron instalados los prerrequisitos, basta con ejecutar estos comandos para levantar el proyecto:

```bash
# Instalar Yeoman, Grunt y Bower, necesarios para correr el proyecto 
# y bajar las dependencias
npm install -g bower
npm install -g grunt-cli
npm install -g yo

# Clonar el proyecto y acceder a la carpeta
git clone https://github.com/faloi/wisit14-mean-handson.git
cd wisit14-mean-handson

# Instalar las dependencias del servidor (npm) y del cliente (bower)
npm install && bower install

# Levantar servidor y cliente
grunt serve
```

## Cómo fue preparado el proyecto
Para la generación inicial del código, utilizamos una herramienta de [scaffolding](en.wikipedia.org/wiki/Scaffold_(programming)) para NodeJS llamada [Yeoman](yeoman.io). 

Lo que nos provee es una interfaz de línea de comando para instalar y utilizar distintos [generadores](http://yeoman.io/generators/). El que usamos para este ejemplo se llama [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack).

Todo lo anterior se resume en estos comandos:

```bash
npm install -g yo
npm install -g generator-angular-fullstack
mkdir wisit-tracker && cd $_
yo angular-fullstack wisit-tracker
```

![image](https://cloud.githubusercontent.com/assets/1585835/5240229/c0a9870e-78dd-11e4-9c8c-f05706b62348.png)

Las opciones que elegimos para el tutorial fueron:

**Client**

1. Javascript
2. HTML
3. Sass
4. ngRoute
5. Yes (Bootstrap)
6. Yes (UI Bootstrap)

**Server**

1. Yes (mongoDB with Mongoose)
2. Yes (authentication boilerplate)
3. Facebook
4. No (socket.io)
