"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Proveedores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rif: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      razon_social: {
        type: Sequelize.STRING,
        unique: true,
      },
      representante_legal: {
        type: Sequelize.STRING,
      },
      telefono_proveedor: {
        type: Sequelize.STRING,
      },
      direccion_proveedor: {
        type: Sequelize.STRING,
      },
      status_proveedor: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Proveedores");
  },
};
