"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Compras_diarias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      factura_de_comprasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Factura_de_compras",
          key: "id",
        },
      },
      productoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Productos",
          key: "id",
        },
      },
      cantidad_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_compras: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Compras_diarias");
  },
};
