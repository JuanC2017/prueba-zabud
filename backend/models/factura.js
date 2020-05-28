'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = mongoose.model('Item');
var Producto = mongoose.model('Producto');

var FacturaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    cliente: String,
    item: { type: Schema.ObjectId, ref: 'Item' },
    producto: { type: Schema.ObjectId, ref: 'Producto' },
    valorTotal: Number

});


module.exports = mongoose.model('Factura', FacturaSchema);