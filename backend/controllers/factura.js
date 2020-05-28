'use strict'

var Factura = require('../models/factura');
var mongoose = require('mongoose');



var controller = {

    saveFactura: function (req, res) {
        var factura = new Factura();
        var params = req.body;
        factura._id = new mongoose.Types.ObjectId();
        factura.cliente = params.cliente;
        factura.item = params.item;
        factura.producto = params.producto;
        factura.valorTotal = (params.item.cantidad * params.producto.valor);

        factura.save((err, facturaStored) => {

            if (err) return res.status(500).send({ message: "Error al guardar factura" });

            if (!facturaStored) return res.status(404).send({ message: "Error factura no encontrado o no se ha podido guardar" });

            return res.status(200).send({ factura: facturaStored });

        });

    },


    getFactura: function (req, res) {

        var facturaId = req.params.id;
        if (facturaId == null) return res.status(404).send({ message: " Factura no encontrada" });

        Factura.findById(facturaId)
            .populate('item', 'cantidad')
            .populate('producto', 'valor')
            .exec(
                (err, factura) => {

                    if (err) return res.status(500).send({ message: "Error al obtener el factura" });

                    if (!factura) return res.status(404).send({ message: "Error factura no existe" });


                    return res.status(200).send({ factura });



                });

    },

    postCalcular:function(cantidad, valor){

        cantidad = Item.cantidad;
        valor = Producto.valor;

        return this.valorTotal = cantidad * valor;

    }

    /*
        getProductos: function (req, res) {
    
            Producto.find().sort('_id').exec((err, productos) => { //con sort('-name')--> se ordena de la z-a
    
                if (err) return res.status(500).send({ message: "error al devolver los datos" });
    
                if (!productos) return res.status(404).send({ message: "No existe productos" });
    
                return res.status(200).send({ productos });
    
            });
    
        },
    
    
        updateProducto: function (req, res) {
    
            var productoId = req.params.id;
            var update = req.body;
    
            Producto.findByIdAndUpdate(productoId, update, { new: true }, (err, productoUpdated) => {
    
                if (err) return res.status(500).send({ message: 'Error al actualizar producto' });
                if (!productoUpdated) return res.status(404).send({ message: 'No existe producto para actualizar' });
    
                return res.status(200).send({ message: 'producto actualizado', productos: productoUpdated });
    
            });
    
        },
    
    deleteItem: function (req, res) {

        var itemId = req.params.id;
        Item.findByIdAndRemove(itemId, (err, itemRemoved) => {

            if (err) return res.status(500).send({ message: 'Error al Borrar item' });
            if (!itemRemoved) return res.status(404).send({ message: 'No existe item para eliminar' });
            return res.status(200).send({ message: 'item eliminado', item: itemRemoved });

        });

    },


*/
}


module.exports = controller;