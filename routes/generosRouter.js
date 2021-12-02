var express = require('express');
var router = express.Router();
var generosController = require ("../controllers/apiGeneroController")

//listar generos
router.get ("/", generosController.list);

module.exports = router;