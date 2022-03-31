'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Deuda_compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      factura_de_comprasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Factura_de_compras",
          key: "id",
        },
      },
      total_deuda_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_deuda_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_deuda_compra: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Deuda_compras');
  }
};