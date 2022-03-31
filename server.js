const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./app/models/index");
const bodyParser = require("body-parser");
const helmet = require("helmet");
var compression = require("compression");
//var http = require("http");
var ip = require('ip');
const internalIp = require("internal-ip");
console.log(internalIp.v4.sync());
//configuracion
app.set("port", process.env.PORT || 3000);
//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());

//Rutas
app.use(require("./routes"));
////////////////////////

app.listen(app.get("port"),'localhost', function () {
  console.log("Corriendos Servidor Puerto 3000");

  sequelize
    .authenticate()
    .then(() => {
      console.log("Nos hemos conectado a la base de Datos");
    })
    .catch((err) => {
      console.log("Error de conexion a la base de Datos");
    });
});
