var express = require('express');
var router = express.Router();
/* CONTROLLERS */
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/detalles', productController.productDetail);
router.get('/carrito', productController.productCart);


module.exports = router;