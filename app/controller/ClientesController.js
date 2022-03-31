const { Clientes } = require("../models/index");

module.exports = {
  async crearClientes(req, res) {
    let clientes = await Clientes.create({
      cedula: req.body.cedula,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      status: req.body.status,
    })
      .then((clientes) => {
        //res.json(empleado)
        res.status(200).json("Cliente Registrado Correctamente");
      })
      .catch((err) => {
        // console.log(err);
        res.status(500).json(err);
      });
  },

  //con esta fncion buco  todos los empleados por id
  async find(req, res, next) {
    let client = await Clientes.findByPk(req.params.id);

    if (!client) {
      res.status(404).json({ msg: "No se encontro Cliente" });
    } else {
      //res.json(emple);
      req.client = client;
      next();
    }
  },

  async listarclientes(req, res) {
    let resul = await Clientes.findAll();
    res.json(resul);
  },

  async updateclientes(req,res) {
    
    let emple = await Clientes.findByPk(req.body.id);

    if (!emple) {
      res.status(404).json({ msg: "Cliente no encontrado" });
    } else {
      (emple.cedula = req.body.cedula),
        (emple.nombres = req.body.nombres),
        (emple.apellidos = req.body.apellidos),
        (emple.telefono = req.body.telefono),
        (emple.direccion = req.body.direccion),
        (emple.status = req.body.status),
        emple
          .save()
          .then((emple) => {
            //res.json(emple);
            res.status(200).end("Empleado modificado");
            //console.log(emple);
          })
          .catch((err) => {
            console.log(emple);
            res.status(500).json(err);
          });
    }
  }
};
