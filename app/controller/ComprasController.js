const { Compras_diarias } = require("../models/index");
const { historico_compra } = require("../models/index");
const { Productos } = require("../models/index");
const { Almacens } = require("../models/index");
const { Factura_de_compras } = require("../models/index");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
var moment = require("moment");
module.exports = {
  async crearCompras(req, res) {
    try {
      if (req.body.status_fact_compra == "PAGADO") {
        let factura = await Factura_de_compras.create({
          proveedoresId: req.body.items[0].proveedoresId,
          codigo_compra: req.body.items[0].codigo_compra,
          subtotal_fact_compra: req.body.total_fact_compra,
          adicional_fact_compra: 0,
          total_fact_compra: req.body.total_fact_compra,
          status_fact_compra: req.body.status_fact_compra,
          fecha_fact_compra: moment().format("MM-DD-YYYY"),
        })
          .then((factura) => {
            let factura_de_comprasId = factura["id"];
            req.body.items.forEach((i) => {
              Compras_diarias.create(
                {
                  factura_de_comprasId: factura_de_comprasId,
                  productoId: parseInt(i["productoId"]),
                  cantidad_compra: parseInt(i["cantidad_compra"]),
                  total_compra: parseInt(i["total_compra"]),
                  status_compra: i["status_compra"],
                  fecha_compras: i["fecha_compras"],

                  historico_compra: [
                    {
                      compras_diariasId: "",
                      status_historico: i["status_compra"],
                      fecha_historico: moment().format("MM-DD-YYYY"),
                    },
                  ],
                },
                {
                  include: [{ all: true, nested: true }],
                }
              );
            });
            res.status(200).json("Compra Registrada Correctamente");
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      } else {
        let factura = await Factura_de_compras.create(
          {
            proveedoresId: req.body.items[0].proveedoresId,
            codigo_compra: req.body.items[0].codigo_compra,
            subtotal_fact_compra: req.body.total_fact_compra,
            adicional_fact_compra: 0,
            total_fact_compra: req.body.total_fact_compra,
            status_fact_compra: req.body.status_fact_compra,
            fecha_fact_compra: moment().format("MM-DD-YYYY"),
            Deuda_compras: [
              {
                factura_de_comprasId: "",
                total_deuda_compra: parseInt(req.body.total_deuda),
                status_deuda_compra: "PENDIENTE",
                fecha_deuda_compra: moment().format("MM-DD-YYYY"),
              },
            ],
            Abono_compras: [
              {
                factura_de_comprasId: "",
                cantidad_abono_compra: parseInt(req.body.cantidad_abono),
                cantidad_abono_compra: "PENDIENTE",
                fecha_abono_compra: moment().format("MM-DD-YYYY"),
              },
            ],
          },
          {
            include: [{ all: true, nested: true }],
          }
        )
          .then((factura) => {
            let factura_de_comprasId = factura["id"];
            req.body.items.forEach((i) => {
              Compras_diarias.create(
                {
                  factura_de_comprasId: factura_de_comprasId,
                  productoId: parseInt(i["productoId"]),
                  cantidad_compra: parseInt(i["cantidad_compra"]),
                  total_compra: parseInt(i["total_compra"]),
                  status_compra: i["status_compra"],
                  fecha_compras: i["fecha_compras"],

                  historico_compra: [
                    {
                      compras_diariasId: "",
                      status_historico: i["status_compra"],
                      fecha_historico: moment().format("MM-DD-YYYY"),
                    },
                  ],
                },
                {
                  include: [{ all: true, nested: true }],
                }
              );
            });
            res.status(200).json("Compra Registrada Correctamente");
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      } //condicional madre de pagado o pendiente
      let art = await req.body.items.forEach((e) => {
        let product = Almacens.findAll({
          where: {
            productoId: {
              [Op.eq]: parseInt(e["productoId"]),
            },
          },
          raw: true,
        })
          .then((product) => {
            let idproducto = product.map(function (i) {
              return i.cantidad_disponible;
            });
            let stock = idproducto;
            almacen = parseInt(stock) + parseInt(e["cantidad_compra"]);
            Almacens.update(
              { cantidad_disponible: almacen },
              { where: { productoId: e["productoId"] } }
            );
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      });
    } catch (err) {
      console.log(err);
      throw new Error("error en la insercion", err);
    }
  },

  async listarCompras(req, res) {
    let product = await Compras_diarias.findAll({
      include: [{ model: Productos, as: "Productos" }],
    });

    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else {
      res.json(product);
    }
  },
  async listarComprasFacturadas(req, res) {
    let facturadas = await Factura_de_compras.findAll({
      include: [{ association: "Proveedores" }],
    });

    if (!facturadas) {
      res.status(404).json({ msg: "No encontrada Facturas" });
    } else {
      res.json(facturadas);
    }
  },

  async updateCompras(req, res) {
    let emple = await Compras_diarias.findByPk(req.body.id);

    if (!emple) {
      res.status(404).json({ msg: "Compra no encontrado" });
    } else {
      (emple.status_compra = req.body.status_compra),
        emple
          .save()
          .then((emple) => {
            res.status(200).end("Compra modificado");
          })
          .catch((err) => {
            //console.log(emple);
            res.status(500).json(err);
          });
    }
  },
  async listarcomprasfechas(req, res) {
    let comprafecha = await Compras_diarias.findAll({
      include: [{ model: Productos, as: "Productos" }],
      where: {
        fecha_compras: {
          [Op.eq]: moment().format("MM-DD-YYYY"),
        },
      },
    });

    res.json(comprafecha);
  },

  async listarproductofechas(req, res) {
    let compraproductofecha = await Compras_diarias.findAll({
      include: [
        {
          model: Productos,
          as: "Productos",
          where: {
            id: {
              [Op.eq]: req.body.productoId,
            },
          },
        },
      ],
      where: {
        fecha_compras: {
          [Op.between]: [
            moment(req.body.fecha).toDate(),
            moment(req.body.fechados).toDate(),
          ],
        },
      },
    });
    res.json(compraproductofecha);
  },

  async listarCompraid(req, res) {
    const id = req.params.id;
    let compraid = await Compras_diarias.findAll({
      include: [
        { association: "Factura_de_compras" },
        {
          association: "Productos",
        },
      ],
      where: {
        factura_de_comprasId: {
          [Op.eq]: parseInt(id),
        },
      },
    });
    if (!compraid) {
      res.status(404).json({ msg: "Compra no encontrado" });
    } else {
      res.json(compraid);
    }
  },
};
