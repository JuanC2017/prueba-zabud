'use strict'

var express = require('express');
var ProductoController = require('../controllers/producto');

var router = express.Router();

//middleware
var multipart = require('connect-multiparty');

router.post('/save-producto', ProductoController.saveProducto);
router.get('/producto/:id?', ProductoController.getProducto);
router.get('/productos', ProductoController.getProductos);
router.delete('/producto/:id?', ProductoController.deleteProducto);


module.exports = router;