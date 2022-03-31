"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
   
    static associate(models) {
      Clientes.hasMany(models.Ventas_facturadas, {
        as: "Ventas_facturadas",
        foreignKey: "clientesId",
      });
    }
  }
  Clientes.init(
    {
      cedula: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
        isNumeric: true,
      },

      nombres: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { msg: "Solo debe contener Letras" },
          len: { args: [2, 255], msg: "Solo adminite com minimo 2 Caracteres" },
        },
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { msg: "Solo debe contener Letras" },
          len: { args: [2, 255], msg: "Solo adminite com minimo 2 Caracteres" },
        },
      },
      telefono: {
        type: DataTypes.STRING,
      },
      direccion: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Clientes",
    }
  );
  return Clientes;
};
