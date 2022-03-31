"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Login.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "tiene que ser un correo valido",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "la contraseña debe tener al menos 6 caracteres",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Login",
    }
  );
  return Login;
};
