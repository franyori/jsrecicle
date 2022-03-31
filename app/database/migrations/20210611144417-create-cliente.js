"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Clientes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      cedula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
      },

      nombres: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      apellidos: {
        type: Sequelize.STRING,
      },
      telefono: {
        type: Sequelize.STRING,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      status: {
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
    await queryInterface.dropTable("Clientes");
  },
};
