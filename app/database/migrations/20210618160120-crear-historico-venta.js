'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Historico_ventas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ventas_productosId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Ventas_productos",
          key:'id'
          },
      },
      status_historico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_historico: {
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
    await queryInterface.dropTable('Historico_ventas');
  }
};