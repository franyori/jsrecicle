"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    
    static associate(models) {
      Productos.belongsTo(models.Categorias, {
        as: "Categorias",
        foreignKey: "categoriaId",
      });
    
    Productos.hasMany(models.Compras_diarias, {
      as: "Compras_diarias",
      foreignKey: "productoId",
    });

    Productos.hasMany(models.Almacens, {
      as: "Almacen",
      foreignKey: "productoId",
    });
  }
  }
  Productos.init(
    {
      nombre_producto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      descripcion_producto: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      categoriaId: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      unidad_medida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio_costo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio_venta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      iva: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );
  return Productos;
};
