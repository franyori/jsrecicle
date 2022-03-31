const { Abono_deuda } = require("../models/index");
const { Deuda_ventas } = require("../models/index");
const { Ventas_facturadas } = require("../models/index");

const { Op } = require("sequelize");
var moment = require("moment");

module.exports = {
  async crearAbonos(req, res) {
    let abono = await Abono_deuda.create({
      ventas_facturadasId: req.body.id,
      cantidad_abono: req.body.cantidad_abono,
      status_abono: req.body.status_abono,
      fecha_abono: moment().format("MM-DD-YYYY"),
    })
      .then((abono) => {
        res.status(200).json("Abono Registrado Correctamente");
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  async listarabonoventas(req, res) {
    const id = req.params.id;
    let resul = await Abono_deuda.findAll({
      where: {
        ventas_facturadasId: {
          [Op.eq]: parseInt(id),
        },
      },
    });
    // console.log(id);
    res.json(resul);
  },

  async updateDeuda(req, res) {

    if (req.body.status_deuda == "PAGADO") {
      let emple = await Ventas_facturadas.findByPk(req.body.id);
      (emple.status_ventas_fact = "PAGADO"), emple.save();
    }

    if (req.body.total_deuda == 0) {
      let deuda = await Deuda_ventas.update(
        {
          total_deuda: req.body.total_deuda,
          status_deuda: "PAGADO",
        },
        { where: { ventas_facturadasId: parseInt(req.body.id) } }
      )
        .then((deuda) => {
          res.status(200).json("Deuda Actualizada Correctamente");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    } else {
      let deuda = await Deuda_ventas.update(
        {
          total_deuda: req.body.total_deuda,
          status_deuda: "PENDIENTE",
        },
        { where: { ventas_facturadasId: parseInt(req.body.id) } }
      )
        .then((deuda) => {
          res.status(200).json("Deuda Actualizada Correctamente");
          // console.log(this.almacen);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  },
};
