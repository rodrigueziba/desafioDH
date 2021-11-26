module.exports = (sequelize, dataTypes) => {
    let alias = "Cancion";
  
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: dataTypes.STRING,
       
      },
      duracion: {
        type: dataTypes.INTEGER,
        
      },
      apellido: {
        type: dataTypes.STRING,
       
      },
    };
  
    let config = {
      tableName: "canciones",
      timestamps: true,
      deletedAt: false,
    };
  
    const Cancion = sequelize.define(alias, cols, config);
  
    Cancion.associate = (models) => {
      
      Cancion.HasMany(models.Album, {
        as: "albumes",
        foreignKey: "album_id",
      });
      Cancion.HasMany(models.Artista, {
        as: "artistas",
        foreignKey: "artista_id",
      });
      Cancion.HasMany(models.Genero, {
        as: "generos",
        foreignKey: "genero_id",
      });
    };
  
    return Cancion;
  };