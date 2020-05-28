'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/prueba-zabud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('coneccion a la base de datos de mongo establecida satisfactoriamente');
        //creacion del servidor en node
        app.listen(port, () => { //tiene dos parametros le indicamos el puerto y la funcion de callback con un console.log

            console.log('servidor corriendo correctamente en la url:  localhost:3000');
        })



    })
    .catch(err => console.log(err));