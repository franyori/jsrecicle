const { Ventas_productos } = require("../models/index");
const { Almacens } = require("../models/index");
const { Ventas_facturadas } = require("../models/index");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
var moment = require("moment");
module.exports = {
  async crearVentas(req, res) {
    try {
      //suma de total de los items de la compra
      let sumatotalventas = 0;
      req.body.items.forEach(function (e) {
        sumatotalventas += e.total_ventas;
      });
      sumaitemsventas = sumatotalventas;
      //inserto Ventas_facturadas
      if (req.body.status_ventas == "PAGADO") {
        let ventafacturadas = await Ventas_facturadas.create({
          clientesId: req.body.items[0].clientesId,
          codigo_venta: req.body.items[0].codigo_venta,
          subtotal_ventas_fact: sumaitemsventas,
          adicional_ventas_fact: 0,
          total_ventas_fact: sumaitemsventas,
          status_ventas_fact: req.body.status_ventas,
          fecha_ventas_fact: moment().format("MM-DD-YYYY"),
        });
      } else {
        let ventafacturadas = await Ventas_facturadas.create(
          {
            clientesId: req.body.items[0].clientesId,
            codigo_venta: req.body.items[0].codigo_venta,
            subtotal_ventas_fact: sumaitemsventas,
            adicional_ventas_fact: 0,
            total_ventas_fact: sumaitemsventas,
            status_ventas_fact: req.body.status_ventas,
            fecha_ventas_fact: moment().format("MM-DD-YYYY"),

            Deuda_ventas: [
              {
                ventas_facturadasId: "",
                total_deuda: parseInt(req.body.total_deuda),
                status_deuda: "PENDIENTE",
                fecha_deuda: moment().format("MM-DD-YYYY"),
              },
            ],
            Abono_deuda: [
              {
                ventas_facturadasId: "",
                cantidad_abono: parseInt(req.body.cantidad_abono),
                status_abono: "PENDIENTE",
                fecha_abono: moment().format("MM-DD-YYYY"),
              },
            ],
          },
          {
            include: [{ all: true, nested: true }],
          }
        );
      }
      //consulto el ultimo id para agregarlo ventas_facturadasId en el insert de los itmes
      let ventascount = Ventas_facturadas.findAll({
        attributes: [[sequelize.fn("max", sequelize.col("id")), "count"]],
        raw: true,
        order: sequelize.literal("count DESC"),
      })
        .then((ventascount) => {
          //numero del ultimo id de facturas ventas
          let numerocount = ventascount.map(function (i) {
            return i.count;
          });
          let ventas_facturadasId = numerocount[0];

          req.body.items.forEach((e) => {
            let ventas = Ventas_productos.create(
              {
                almacenId: parseInt(e["almacenId"]),
                ventas_facturadasId: parseInt(ventas_facturadasId),
                cantidad_ventas: parseInt(e["cantidad_ventas"]),
                precio_ventas: parseInt(e["precio_ventas"]),
                total_ventas: parseInt(e["total_ventas"]),
                status_ventas: e["status_ventas"],
                fecha_ventas: moment().format("MM-DD-YYYY"),
                Historico_ventas: [
                  {
                    Ventas_productosId: "",
                    status_historico: "VENTA",
                    fecha_historico: moment().format("MM-DD-YYYY"),
                  },
                ], //esta ganacia es por cada items de la venta
                Ganacia_ventas_general: [
                  {
                    ventas_productosId: "",
                    ganacia_venta_global: parseInt(e["ganacia_venta_global"]),
                    status_ganacias: e["status_ganacias"],
                  },
                ],
              },
              {
                include: [{ all: true, nested: true }],
              }
            );
          });
          res.status(200).json("Venta Registrada Correctamente");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
      //consultando la cantidad_disponible en almacen
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
            if (parseInt(stock) == 1) {
              res.json("Debe ALmacenar Comprar mas Productos");
            } else if (parseInt(stock) < e["cantidad_ventas"]) {
              res.json("LA cantidad a comprar es mayor a la del inventario");
            } else {
              almacen = parseInt(stock) - parseInt(e["cantidad_ventas"]);
              Almacens.update(
                { cantidad_disponible: almacen },
                { where: { productoId: e["productoId"] } }
              );
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      });
    } catch (err) {
      throw new Error("error en la insercion", err);
    }
  },

  async listarVentas(req, res) {
    let product = await Ventas_productos.findAll({
      include: [
        { association: "Ventas_facturadas" },
        {
          association: "Almacen",
          include: [{ association: "Productos" }],
        },
      ],
    });
    if (!product) {
      res.status(404).json({ msg: "Ventas no encontrado" });
    } else {
      res.json(product);
    }
  },

  async listarVentasid(req, res) {
    const id = req.params.id;
    let ventaid = await Ventas_productos.findAll({
      include: [
        { association: "Ventas_facturadas" },
        {
          association: "Almacen",
          include: [{ association: "Productos" }],
        },
      ],
      where: {
        ventas_facturadasId: {
          [Op.eq]: parseInt(id),
        },
      },
    });
    if (!ventaid) {
      res.status(404).json({ msg: "Ventas no encontrado" });
    } else {
      res.json(ventaid);
    }
  },

  async listarVentasFacturadas(req, res) {
    let ventas = await Ventas_facturadas.findAll({
      include: [{ association: "Clientes" }],
    });
    if (!ventas) {
      res.status(404).json({ msg: "Ventas no encontrado" });
    } else {
      res.json(ventas);
    }
  },
};
