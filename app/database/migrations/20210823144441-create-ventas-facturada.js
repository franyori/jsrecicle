"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ventas_facturadas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Clientes",
          key: "id",
        },
      },
      codigo_venta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtotal_ventas_fact: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      adicional_ventas_fact: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_ventas_fact: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_ventas_fact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_ventas_fact: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Ventas_facturadas");
  },
};
