"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Almacens extends Model {
   
    static associate(models) {
      Almacens.belongsTo(models.Productos, {
        as: "Productos",
        foreignKey: "productoId",
      })
      
      Almacens.hasMany(models.Ventas_productos, {
        as: "Ventas_productos",
        foreignKey: "almacenId",
      })

      
     }
  }
  Almacens.init(
    {
      cantidad_disponible: {
        type: DataTypes.STRING,
      },
      productoId: {
        type: DataTypes.INTEGER,
      },
      descripcion_almacen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Almacens",
    }
  );
  return Almacens;
};
