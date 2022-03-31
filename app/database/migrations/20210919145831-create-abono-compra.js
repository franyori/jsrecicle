"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Abono_compras", {
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
      cantidad_abono_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_abono_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_abono_compra: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Abono_compras");
  },
};
