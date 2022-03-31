"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    
    static associate(models) {
      Categorias.hasMany(models.Productos, {
        as: "Productos",
        foreignKey: "categoriaId",
      });
    }
  }
  Categorias.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categorias",
    }
  );
  return Categorias;
};
