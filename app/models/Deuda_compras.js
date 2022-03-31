"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deuda_compras extends Model {
    static associate(models) {
      Deuda_compras.belongsTo(models.Factura_de_compras, {
        as: "Factura_de_compras",
        foreignKey: "factura_de_comprasId",
      });
    }
  }
  Deuda_compras.init(
    {
      factura_de_comprasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_deuda_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_deuda_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_deuda_compra: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Deuda_compras",
    }
  );
  return Deuda_compras;
};
