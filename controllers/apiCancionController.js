let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;


let cancionesController = {
    list: (req, res) => {
        db.Cancion.findAll()
        .then(function(canciones){
           // console.log(canciones);
             return res.status(200).json({
                total: canciones.length,
                data: canciones,
                status: "200"
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "la concha de tu madre esta poronga no funciona"
            });
        }); 
    },

     store: (req, res) => {
        
        db.Cancion
        
        
        .create(req.body)
        
        .then(function(cancion){
             return res.status(200).json({
                data: cancion,
                status: 200,
                created : 'ok'
            })
            
        }) 
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "que pija esto q no funciona, no?"
            });
        });
    },

     show: (req, res) => {
        db.Cancion.findByPk(req.params.id, {include: ["genero","artista"]})
        .then(function(cancion){
            return res.status(200).json({
                data: cancion,
                status: 200
            });
        })
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: 500
            });
        }); 
    },
     delete: (req, res) => {
         db.Cancion
         .destroy({
             where: { 
                 id: req.params.id
             }
         })
             .then((cancion)=>{
                 return res.json(cancion,cancioneliminada)
             })
             .catch(function(error){
                return res.status(500).json({
                    error: error,
                    status: 500
                });
            }); 
         
     },


     edit: (req, res) => {
        
        db.Cancion 
            .update(req.body, {
            where: { 
                id: req.params.id
            }
            
        })
        .then(function(cancion){
             return res.status(200).json({
                data: cancion,
                status: 200,
                updated : 'ok'
            })
            
        }) 
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "oh no, no funciona"
            });
        });
    },
     search : (req, res) => {
         db.Cancion.findAll({
             where: {
                 titulo: { [db.Sequelize.Op.like]: '%' + req.query.keyword + '%' }
             }
         })
         .then(function(canciones){
             return res.status(200).json(canciones);
 
        })
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: 500
            });
        });  
    }
        }

        module.exports = cancionesController;