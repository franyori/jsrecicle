"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Factura_de_compras extends Model {
    static associate(models) {
      Factura_de_compras.belongsTo(models.Proveedores, {
        as: "Proveedores",
        foreignKey: "proveedoresId",
      });
      Factura_de_compras.hasMany(models.Compras_diarias, {
        as: "Compras_diarias",
        foreignKey: "factura_de_comprasId",
      });
      Factura_de_compras.hasMany(models.Abono_compra, {
        as: "Abono_compra",
        foreignKey: "factura_de_comprasId",
      });
      Factura_de_compras.hasMany(models.Deuda_compras, {
        as: "Deuda_compras",
        foreignKey: "factura_de_comprasId",
      });
    }
  }
  Factura_de_compras.init(
    {
      proveedoresId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtotal_fact_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adicional_fact_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_fact_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_fact_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_fact_compra: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      codigo_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Factura_de_compras",
    }
  );
  return Factura_de_compras;
};
