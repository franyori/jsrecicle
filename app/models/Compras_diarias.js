"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Compras_diarias extends Model {
    static associate(models) {
      Compras_diarias.belongsTo(models.Factura_de_compras, {
        as: "Factura_de_compras",
        foreignKey: "factura_de_comprasId",
      });
      Compras_diarias.belongsTo(models.Productos, {
        as: "Productos",
        foreignKey: "productoId",
      });

      Compras_diarias.hasMany(models.historico_compra, {
        as: "historico_compra",
        foreignKey: "compras_diariasId",
      });
     
    }
  }
  Compras_diarias.init(
    {
      factura_de_comprasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      cantidad_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      total_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      status_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fecha_compras: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Compras_diarias",
    }
  );
  return Compras_diarias;
};
