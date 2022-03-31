"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deuda_ventas extends Model {
    static associate(models) {
      Deuda_ventas.belongsTo(models.Ventas_facturadas, {
        as: "Ventas_facturadas",
        foreignKey: "ventas_facturadasId",
      });
    }
  }
  Deuda_ventas.init(
    {
      ventas_facturadasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_deuda: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_deuda: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_deuda: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Deuda_ventas",
    }
  );
  return Deuda_ventas;
};
