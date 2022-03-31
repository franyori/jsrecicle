const { Almacens } = require("../models/index");
const { Productos } = require("../models/index");

module.exports = {

  async listarAlmacen(req, res) {
    let product = await Almacens.findAll({
      include: [
        {
          model: Productos,
          as: "Productos",
        },
      ],
    });

    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else {
      res.json(product);
    }
  },
};
