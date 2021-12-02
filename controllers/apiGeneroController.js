let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;


let generosController = {
    list: (req, res) => {
        db.Genero.findAll()
        .then(function(generos){
        
             return res.status(200).json({
                total: generos.length,
                status: "200",
                url: '/generos',
                data: generos,
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "error"
            });
        }); 
    },

   
    
        }

        module.exports = generosController;