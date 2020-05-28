'use strict'

var express = require('express'); //libreria de express llamando
var bodyParser = require('body-parser'); //libreria de body-parse  llmando
var app = express(); //pasando express a esta variable y usandola abajo

// archivos de rutas
var producto_routes = require('./routes/producto');
var item_routes = require('./routes/item');
var factura_routes = require('./routes/factura');


//middlewears

app.use(bodyParser.urlencoded({ extended: false })); //middleware global, que convierte lo que le llegue en un objeto json
app.use(bodyParser.json());


//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/', producto_routes);
app.use('/', item_routes);
app.use('/', factura_routes);


//exportar
module.exports = app;