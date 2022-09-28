// sintaxis de nodemon
// const express = require('express'); //Version de common js
import express from 'express';      //Version de import
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error))

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');


// Crear nuestro propio middleware de express
// Obtener el año actual
app.use((request, response, next) =>{
    const year = new Date();

    response.locals.actualYear = year.getFullYear();
    response.locals.nombreSitio = "Agencia de Viajes";
    return next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'))

// Agregar router
app.use('/', router);

// Listen
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`);
})