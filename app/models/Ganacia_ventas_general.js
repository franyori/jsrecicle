'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ganacia_ventas_general extends Model {
  
    static associate(models) {
      // define association here

      Ganacia_ventas_general.belongsTo(models.Ventas_productos, {
        as: "Ventas_productos",
        foreignKey: "ventas_productosId",
      })

    }
  };
  Ganacia_ventas_general.init({
    ventas_productosId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ganacia_venta_global: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_ganacias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Ganacia_ventas_general',
  });
  return Ganacia_ventas_general;
};