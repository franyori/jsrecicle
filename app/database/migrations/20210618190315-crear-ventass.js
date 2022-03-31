"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ventas_productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      almacenId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Almacens",
          key: "id",
        },
      },
      ventas_facturadasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ventas_facturadas",
          key: "id",
        },
      },
      cantidad_ventas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precio_ventas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_ventas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha_ventas: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status_ventas: {
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
    await queryInterface.dropTable("Ventas_productos");
  },
};
