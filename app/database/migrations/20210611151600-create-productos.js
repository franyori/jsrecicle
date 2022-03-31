"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre_producto: {
        type: Sequelize.STRING,
        unique: true,
      },
      descripcion_producto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Categorias",
          key:'id'
          },
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unidad_medida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      precio_costo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precio_venta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      iva: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Productos");
  },
};
