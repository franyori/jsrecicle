"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Almacens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productoId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Productos",
          key:'id'
          },
      },
      cantidad_disponible: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion_almacen: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Almacens");
  },
};
