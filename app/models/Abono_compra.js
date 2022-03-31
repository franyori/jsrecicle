"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Abono_compra extends Model {
    
    static associate(models) {
      Abono_compra.belongsTo(models.Factura_de_compras, {
        as: "Factura_de_compras",
        foreignKey: "factura_de_comprasId",
      });
    }
  }
  Abono_compra.init(
    {
      factura_de_comprasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad_abono_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_abono_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_abono_compra: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Abono_compra",
    }
  );
  return Abono_compra;
};
