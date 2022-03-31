'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Abono_deudas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ventas_facturadasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ventas_facturadas",
          key: "id",
        },
      },
      cantidad_abono: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_abono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_abono: {
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
    await queryInterface.dropTable('Abono_deudas');
  }
};