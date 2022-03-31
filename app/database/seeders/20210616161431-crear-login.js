const { Login } = require("../../models/index");
const bcrypt = require("bcrypt");
const authConfig = require("../../../config/auth");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      Login.create({
        nombre: "franyori",
        correo: "franyori-@gmail.com",
        password: bcrypt.hashSync(
          "19528512",
          Number.parseInt(authConfig.rounds)
        ),
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Logins", null, {});
  },
};
