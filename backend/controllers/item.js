'use strict'

var Item = require('../models/item');
var mongoose = require('mongoose');
var path = require('path');


var controller = {

    saveItem: function (req, res) {
        var item = new Item();
        var params = req.body;
        item._id = new mongoose.Types.ObjectId();
        item.cantidad = params.cantidad;
        item.producto = params.producto;

        item.save((err, itemStored) => {

            if (err) return res.status(500).send({ message: "Error al guardar item" });

            if (!itemStored) return res.status(404).send({ message: "Error item no encontrado o no se ha podido guardar item" });

            return res.status(200).send({ item: itemStored });

        });

    },


    getItem: function (req, res) {

        var itemId = req.params.id;
        if (itemId == null) return res.status(404).send({ message: " Item no encontrada" });

        Item.findById(itemId)
            .populate('producto', 'nombre valor codigo') 
            .exec(
            (err, item) => {



            if (err) return res.status(500).send({ message: "Error al obtener el item" });

            if (!item) return res.status(404).send({ message: "Error el item no existe" });
           

            return res.status(200).send({ item });
            
            

        });

    },

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
*/
    deleteItem: function (req, res) {

        var itemId = req.params.id;
        Item.findByIdAndRemove(itemId, (err, itemRemoved) => {

            if (err) return res.status(500).send({ message: 'Error al Borrar item' });
            if (!itemRemoved) return res.status(404).send({ message: 'No existe item para eliminar' });
            return res.status(200).send({ message: 'item eliminado', item: itemRemoved });

        });

    },



}


module.exports = controller;