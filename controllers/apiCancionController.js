let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;


let cancionesController = {
    list: (req, res) => {
        db.Cancion.findAll(   {include: ["genero","artista","album"]})
        .then(function(canciones){
           // console.log(canciones);
             return res.status(200).json({
                total: canciones.length,
                status: "200",
                url: '/canciones',
                data: canciones,
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "error"
            });
        }); 
    },

     create: (req, res) => {
        
        db.Cancion.create(
            {
            id: req.body.id,
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            album_id: req.body.album_id,
            genero_id: req.body.genero_id,
            artista_id: req.body.artista_id,

            }
            
            ).then(confirm =>{
            let respuesta;
            if (confirm){
                respuesta= {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones'
                    },
                    data: confirm
                }
            }
            else{
                respuesta= {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones'
                    },
                    data: confirm
                }
            }
            res.json(respuesta); 
        })
        
        
        .catch(error =>res.send(error));
        
    },

     show: (req, res) => {
        db.Cancion.findByPk(
            req.params.id, 
            {include: ["genero","artista","album"]}
            )
        .then(function(cancion){
            if((!cancion)){
                return res.status(404).json({
                    meta: {
                        status: 404,
                        notfound: "El id no existe",
                    }
                });}
                else{ return res.status(200).json({
                    data: cancion,
                    status: 200
                });}




           
        })
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: 500
            });
        }); 
    },


     delete: (req, res) => {
         db.Cancion.destroy(
             {
             where: { 
                 id: req.params.id
             }
            })
             .then((response)=>{
                 return res.json(response)
             })
             .catch(function(error){
                return res.status(500).json({
                    error: error,
                    status: 500
                });
            }); 
         
     },


     edit: (req, res) => {
        
        db.Cancion.update(req.body, 
            {
            where: { 
                id: req.params.id
            }
            
        })
        .then(function(cancion){
             return res.status(200).json({
                data: req.body,
                status: 200,
                updated : 'ok'
            })
            
        }) 
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "error"
            });
        });
    },



    
        }

        module.exports = cancionesController;