'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Item = mongoose.model('Item');

var ProductoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    codigo: String,
    valor: Number,
    nombre: String


});



module.exports = mongoose.model('Producto', ProductoSchema);