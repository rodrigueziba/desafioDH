var express = require('express');
var router = express.Router();
var cancionesController = require ("../controllers/apiCancionController")

//listar canciones
router.get ("/", cancionesController.list);
//crear cancion
router.post("/", cancionesController.create);
//mostrar una cancion
router.get("/:id", cancionesController.show);
//borrar una cancion
router.delete ("/:id", cancionesController.delete);
//editar una cancion
router.put("/edit/:id", cancionesController.edit);



module.exports = router;