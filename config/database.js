require("dotenv").config();

module.exports = {
  //configuracion de la base de datos
  username: process.env.BD_USERNAME || "franyori",
  password: process.env.BD_PASSWORD || "franyori",
  database: process.env.BD_DATABASE || "reciclado",
  host: process.env.BD_HOST || "localhost",
  dialect: process.env.BD_DIALECT || "mysql",

  //configuracion de seeder
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  ///configuracion de migraciones

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
