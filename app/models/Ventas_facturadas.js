"use strict";
const { Model } = (sequelize, DataTypes) => {
  class Ventas_facturadas extends Model {
    static associate(models) {
      Ventas_facturadas.hasMany(models.Ventas_productos, {
        as: "Ventas_productos",
        foreignKey: "ventas_facturadasId",
      });
      Ventas_facturadas.hasMany(models.Deuda_ventas, {
        as: "Deuda_ventas",
        foreignKey: "ventas_facturadasId",
      });
      Ventas_facturadas.hasMany(models.Abono_deuda, {
        as: "Abono_deuda",
        foreignKey: "ventas_facturadasId",
      });
      Ventas_facturadas.belongsTo(models.Clientes, {
        as: "Clientes",
        foreignKey: "clientesId",
      });

    }
  }
  Ventas_facturadas.init(
    {
      clientesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtotal_ventas_fact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adicional_ventas_fact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_ventas_fact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_ventas_fact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_ventas_fact: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      codigo_venta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ventas_facturadas",
    }
  );
  return Ventas_facturadas;
};
