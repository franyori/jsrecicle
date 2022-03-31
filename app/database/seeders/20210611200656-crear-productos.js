const { Productos } = require("../../models/index");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      //aqui es
      Productos.create(
        {
          nombre_producto: "plastico duro",
          categoriaId: 1,
          descripcion_producto: "plastico duro",
          status: "ACTIVO",
          unidad_medida: "KG",
          precio_costo: 4000,
          precio_venta: 8000,
          iva: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {}
      ), //aqui es el modelo
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkDelete("Productos", null, {}),
    ]);
  },
};
