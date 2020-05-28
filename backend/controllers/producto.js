'use strict'

var Producto = require('../models/producto');
var mongoose = require('mongoose');

var controller = {

    saveProducto: function (req, res) {
        var producto = new Producto();
        var params = req.body;
        producto._id = new mongoose.Types.ObjectId();
        producto.codigo = params.codigo;
        producto.valor = params.valor;
        producto.nombre = params.nombre;



        producto.save((err, productoStored) => {

            if (err) return res.status(500).send({ message: "Error al guardar producto" });

            if (!productoStored) return res.status(404).send({ message: "Error eps no encontrado o no se ha podido guardar producto" });

            return res.status(200).send({ producto: productoStored });

        });

    },


    getProducto: function (req, res) {
    
        var productoId = req.params.id;
        if (productoId == null) return res.status(404).send({ message: " producto no encontrada" });

        Producto.findById(productoId, (err, producto) => {
            if (err) return res.status(500).send({ message: "Error al obtener el producto" });

            if (!producto) return res.status(404).send({ message: "Error el producto no existe" });

            return res.status(200).send({ producto });

        });

    },


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

    deleteProducto: function (req, res) {

        var productoId = req.params.id;
        Producto.findByIdAndRemove(productoId, (err, productoRemoved) => {

            if (err) return res.status(500).send({ message: 'Error al Borrar producto' });
            if (!productoRemoved) return res.status(404).send({ message: 'No existe producto para eliminar' });
            return res.status(200).send({ message: 'producto eliminado', producto: productoRemoved });

        });

    },



}


module.exports = controller;