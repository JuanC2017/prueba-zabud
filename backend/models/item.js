'use strict'

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;
var Producto = mongoose.model('Producto');




var ItemSchema = new Schema({
    _id: Schema.Types.ObjectId,
    cantidad: Number,
    producto: { type: Schema.Types.ObjectId, ref: "Producto" },
    //varlorTotal: { type: Number,  get: cantidad => Math.rou}
     


});


module.exports = mongoose.model('Item', ItemSchema);