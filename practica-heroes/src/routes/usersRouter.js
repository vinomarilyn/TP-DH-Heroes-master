var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController')
/* GET users listing. */
router.get('/login', usersController.login);//definimos el nombre de las rutas + variable que queremos requerir
router.get('/register', usersController.register);// del controlador + el archivo-ejs


module.exports = router;
