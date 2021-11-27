var express = require('express');
var router = express.Router();
/* CONTROLLERS */
const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/admin', adminController.admin);
router.get('/create', adminController.createProducts);
router.get('/edit', adminController.editProducts);


module.exports = router;