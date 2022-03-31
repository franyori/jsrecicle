"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ventas_productos extends Model {
    static associate(models) {
      
      Ventas_productos.belongsTo(models.Almacens, {
        as: "Almacen",
        foreignKey: "almacenId",
      });

      Ventas_productos.belongsTo(models.Ventas_facturadas, {
        as: "Ventas_facturadas",
        foreignKey: "ventas_facturadasId",
      });

      Ventas_productos.hasMany(models.Historico_ventas, {
        as: "Historico_ventas",
        foreignKey: "ventas_productosId",
      });

      Ventas_productos.hasMany(models.Ganacia_ventas_general, {
        as: "Ganacia_ventas_general",
        foreignKey: "ventas_productosId",
      });
    }
  }
  Ventas_productos.init(
    {
      
      almacenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad_ventas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio_ventas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_ventas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_ventas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_ventas: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ventas_facturadasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ventas_productos",
    }
  );
  return Ventas_productos;
};
