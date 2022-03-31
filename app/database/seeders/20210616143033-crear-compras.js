const { Compras_diarias } = require("../../models/index");

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      //aqui es
      Compras_diarias.create(
        {
          clientesId:1,
          productoId: 1,
          cantidad_compra:5,
          total_compra: 600,
          status_compra: "PAGADO",
          fecha_compras:new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {}
      ), //aqui es el modelo
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkDelete("Compras_diarias", null, {}),
    ]);
  },
  
};
