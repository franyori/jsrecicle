"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class historico_compra extends Model {
    
    static associate(models) {
      historico_compra.belongsTo(models.Compras_diarias, {
        as: "Compras_diarias",
        foreignKey: "compras_diariasId",
      });

        
    }
  }
  historico_compra.init(
    {
      compras_diariasId: {
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
      modelName: "historico_compra",
    }
  );
  return historico_compra;
};
