const { Proveedores } = require("../models/index");

module.exports = {
  async crearProveedores(req, res) {
    let proveedores = await Proveedores.create({
      rif: req.body.rif,
      razon_social: req.body.razon_social,
      representante_legal: req.body.representante_legal,
      telefono_proveedor: req.body.telefono_proveedor,
      direccion_proveedor: req.body.direccion_proveedor,
      status_proveedor: req.body.status_proveedor,
    })
      .then((proveedores) => {
        res.status(200).json("Proveedor Registrado Correctamente");
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  async listarProveedores(req, res) {
    let resul = await Proveedores.findAll();
    res.json(resul);
  },

  async updateProveedores(req, res) {
    let emple = await Proveedores.findByPk(req.body.id);

    if (!emple) {
      res.status(404).json({ msg: "Proveedor no Encontrado!!" });
    } else {
        (emple.razon_social = req.body.razon_social),
        (emple.representante_legal = req.body.representante_legal),
        (emple.telefono_proveedor = req.body.telefono_proveedor),
        (emple.direccion_proveedor = req.body.direccion_proveedor),
        (emple.status_proveedor = req.body.status_proveedor),
        emple
          .save()
          .then((emple) => {
            res.status(200).end("Proveedor Modificado");
          })
          .catch((err) => {
            console.log(emple);
            res.status(500).json(err);
          });
    }
  },
};
