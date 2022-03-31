const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { Login } = require("../models/index");
module.exports = (req, res, next) => {
  //console.log(req.headers);
  ///comprobar si existe el token

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "acceso no autorizado" });
  } else {
    //comprobamos la validez del token
    let token = req.headers.authorization.split(" ")[1];

    // comprobando la validez del token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        //console.log(token);
        res
          .status(500)
          .json({ msg: "ha ocurrido un error al deofdicar el token ", err });
      } else {
        //console.log(decoded);
        //req.user=decoded.user;
        //buscar por id y con los roles asociados
        Login.findByPk(decoded.Login.id).then((Login) => {
          //console.log(user);
          req.Login = Login;
          next();
        });
      }
    });
  }
};
