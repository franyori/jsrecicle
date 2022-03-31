"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Factura_de_compras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      proveedoresId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Proveedores",
          key: "id",
        },
      },
      codigo_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtotal_fact_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      adicional_fact_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_fact_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_fact_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_fact_compra: {
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
    await queryInterface.dropTable("Factura_de_compras");
  },
};
