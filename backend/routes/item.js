'use strict'

var express = require('express');
var ItemController = require('../controllers/item');

var router = express.Router();

//middleware
var multipart = require('connect-multiparty');

router.post('/save-item', ItemController.saveItem);
router.get('/item/:id', ItemController.getItem);
router.delete('/item/:id?', ItemController.deleteItem);


module.exports = router;