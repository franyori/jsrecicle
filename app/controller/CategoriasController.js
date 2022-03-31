const { Categorias } = require("../models/index");

module.exports = {
  async crearCategorias(req, res) {
    let categorias = await Categorias.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      status: req.body.status,
    })
      .then((categorias) => {
        //res.json(empleado)
        res.status(200).json("Categoria Registrado Correctamente");
      })
      .catch((err) => {
         console.log(err);
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

  async listarCategorias(req, res) {
    let resul = await Categorias.findAll();
    res.json(resul);
  },

  async updateCategorias(req,res) {
    
    let emple = await Categorias.findByPk(req.body.id);

    if (!emple) {
      res.status(404).json({ msg: "Cliente no encontrado" });
    } else {
        (emple.nombre = req.body.nombre),
        (emple.descripcion = req.body.descripcion),
        (emple.status = req.body.status),
        emple
          .save()
          .then((emple) => {
            //res.json(emple);
            res.status(200).end("Categoria modificado");
            //console.log(emple);
          })
          .catch((err) => {
            //console.log(emple);
            res.status(500).json(err);
          });
    }
  }
};
