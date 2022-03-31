const { Productos } = require("../models/index");
const { Almacens } = require("../models/index");
const { Categorias } = require("../models/index");

module.exports = {
  async crearProductos(req, res) {
    let productos = await Productos.create(
      {
        nombre_producto: req.body.nombre_producto,
        descripcion_producto: req.body.descripcion_producto,
        categoriaId: req.body.categoriaId,
        status: req.body.status,
        unidad_medida: req.body.unidad_medida,
        precio_costo: req.body.precio_costo,
        precio_venta: req.body.precio_venta,
        iva: req.body.iva,

        Almacen: [
          {
            productoId: "",
            cantidad_disponible: 1,
            descripcion_almacen: req.body.descripcion_producto,
          },
        ],
      },
      {
        include: [{ model: Almacens, as: "Almacen", required: true }],
      }
    )
      .then((productos) => {
        //res.json(empleado)
        res.status(200).json("Productos Registrado Correctamente");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        // console.log(req.body.cedula);
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

  async listarProductos(req, res) {
    let product = await Productos.findAll({
      // include: [
      //   {
      //     association: "Categorias",
      //   },
      // ],
      include: [
        { model: Categorias, as: "Categorias" },
        { model: Almacens, as: "Almacen" },
      ],
    });

    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else {
      res.json(product);
    }
  },

  async updateProducto(req, res) {
    let emple = await Productos.findByPk(req.body.id);

    if (!emple) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else {
      (emple.nombre_producto = req.body.nombre_producto),
        (emple.descripcion_producto = req.body.descripcion_producto),
        (emple.categoriaId = req.body.categoriaId),
        (emple.status = req.body.status),
        (emple.unidad_medida = req.body.unidad_medida),
        (emple.precio_costo = req.body.precio_costo),
        (emple.precio_venta = req.body.precio_venta),
        (emple.iva = req.body.iva),
        emple
          .save()
          .then((emple) => {
            //res.json(emple);
            res.status(200).end("Producto modificado");
            //console.log(emple);
          })
          .catch((err) => {
            //console.log(emple);
            res.status(500).json(err);
          });
    }
  },
};
