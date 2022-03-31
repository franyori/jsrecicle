"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Proveedores extends Model {
    static associate(models) {
      Proveedores.hasMany(models.Factura_de_compras, {
        as: "Factura_de_compras",
        foreignKey: "proveedoresId",
      });
    }
  }
  Proveedores.init(
    {
      rif: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      razon_social: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { msg: "Solo debe contener Letras" },
          len: { args: [2, 255], msg: "Solo adminite com minimo 2 Caracteres" },
        },
      },
      representante_legal: {
        type: DataTypes.STRING,
      },
      telefono_proveedor: {
        type: DataTypes.STRING,
      },
      direccion_proveedor: {
        type: DataTypes.STRING,
      },
      status_proveedor: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Proveedores",
    }
  );
  return Proveedores;
};
