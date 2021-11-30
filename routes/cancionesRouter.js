var express = require('express');
var router = express.Router();
var cancionesController = require ("../controllers/apiCancionController")

//Creacion

router.get ("/", cancionesController.list);
router.post("/", cancionesController.create);
//router.get ("/search", cancionesController.search);




router.get ("/:id", cancionesController.show);

router.delete ("/:id", cancionesController.delete);




//router.get("/edit/:id", cancionesController.edit);

//router.post("/:id", cancionesController.delete);

module.exports = router;