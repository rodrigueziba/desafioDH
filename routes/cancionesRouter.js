var express = require('express');
var router = express.Router();
var cancionesController = require ("../controllers/apiCancionController")

//Creacion

router.get ("/", cancionesController.list);

//router.get ("/search", cancionesController.search);

router.post("/", cancionesController.store);

router.get ("/:id", cancionesController.show);

router.delete ("/:id", cancionesController.delete);

router.get ("/", cancionesController.store);



//router.get("/edit/:id", cancionesController.edit);

//router.post("/:id", cancionesController.delete);

module.exports = router;