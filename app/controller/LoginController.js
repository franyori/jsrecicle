const { Login } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

module.exports = {
  //logueo

  signIn(req, res) {
    let { correo, password } = req.body;

    //buscar el usuario
    Login
      .findOne({
        where: {
          correo: correo,
        },
      })
      .then((Login) => {
        if (!Login) {
          res.status(404).json({ msg: "usuario con correo no encotrado" });
        } else {
          //compararlas contraseñas
          if (bcrypt.compareSync(password, Login.password)) {
            //creamos token
            let token = jwt.sign({ Login: Login }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.json({
                Login: Login,
                token: token,
            });
          } else {
            res.status(401).json({ msg: "contraseña invalaida" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  //Registro
  signUp(req, res) {
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    //crear un usuario
    Login
      .create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: password,
      })
      .then((Login) => {
        //creamos el token
        let token = jwt.sign({ Login: Login }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        ///devolvemos esto como un objeto
        res.json({
            Login: Login,
            token: token,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
