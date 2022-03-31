"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Historico_ventas extends Model {
    
    static associate(models) {
      Historico_ventas.belongsTo(models.Ventas_productos, {
        as: "Ventas_productos",
        foreignKey: "ventas_productosId",
      });
    }
  }
  Historico_ventas.init(
    {
      ventas_productosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      status_historico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_historico: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Historico_ventas",
    }
  );
  return Historico_ventas;
};
