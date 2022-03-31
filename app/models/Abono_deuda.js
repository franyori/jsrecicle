"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Abono_deuda extends Model {
    static associate(models) {
      Abono_deuda.belongsTo(models.Ventas_facturadas, {
        as: "Ventas_facturadas",
        foreignKey: "ventas_facturadasId",
      });
    }
  }
  Abono_deuda.init(
    {
      ventas_facturadasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad_abono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_abono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_abono: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Abono_deuda",
    }
  );
  return Abono_deuda;
};
