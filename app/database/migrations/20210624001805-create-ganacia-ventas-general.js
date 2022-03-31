'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ganacia_ventas_generals', {
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
      ganacia_venta_global: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_ganacias: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Ganacia_ventas_generals');
  }
};