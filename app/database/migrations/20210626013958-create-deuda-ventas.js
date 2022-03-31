"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Deuda_ventas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ventas_facturadasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ventas_facturadas",
          key: "id",
        },
      },
      total_deuda: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_deuda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_deuda: {
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
    await queryInterface.dropTable("Deuda_ventas");
  },
};
