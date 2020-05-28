'use strict'

var express = require('express');
var FacturaController = require('../controllers/factura');

var router = express.Router();

//middleware
var multipart = require('connect-multiparty');

router.post('/save-factura', FacturaController.saveFactura);
router.get('/factura/:id', FacturaController.getFactura);



module.exports = router;