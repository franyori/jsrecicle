"use strict";

//aqui importamos el modelo el cual vamos a llenar la tabla
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert(
        "Categorias",
        [
          { nombre: "Plastico",  descripcion: "plastico", status:"ACTIVO", createdAt: new Date(), updatedAt: new Date() },
          
        ],
        {}
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /* /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("Categorias", null, {});
  },
};
