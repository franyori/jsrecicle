const express = require("express");
const router = express.Router();

//importamos los controllers
const ClientesController = require("./app/controller/ClientesController");
const ProveedoresController = require("./app/controller/ProveedoresController");
const CategoriasController = require("./app/controller/CategoriasController");
const ProductosController = require("./app/controller/ProductosController");
const ComprasController = require("./app/controller/ComprasController");
const LoginController = require("./app/controller/LoginController");
const AlmacenController = require("./app/controller/AlmacenController");
const VentasController = require("./app/controller/VentasController");
const AbonoventasController = require("./app/controller/AbonoventasController");

//middelware
const auth = require("./app/middelware/auth");

//home
router.get("/", (req, res) => {
  res.send("Bienvenidoss");
});

//Rutas loguin y registro
router.post("/api/login", LoginController.signIn);
router.post("/api/registro", LoginController.signUp);

//Rutas clientes
router.get("/api/listar", auth, ClientesController.listarclientes);
router.post("/api/clientes", auth, ClientesController.crearClientes);
router.patch("/api/clientesupdate/", auth, ClientesController.updateclientes);

//Rutas Proveedores
router.get("/api/listarproveedores", auth, ProveedoresController.listarProveedores);
router.post("/api/proveedores", auth, ProveedoresController.crearProveedores);
router.patch("/api/updateproveedores", auth, ProveedoresController.updateProveedores);

//Rutas Categorias
router.get("/api/listarcategorias",auth,CategoriasController.listarCategorias);
router.post("/api/categorias", auth, CategoriasController.crearCategorias);
router.patch(
  "/api/categoriasupdate/",
  auth,
  CategoriasController.updateCategorias
);

//Rutas Productos
router.get("/api/listarproductos", ProductosController.listarProductos);
router.post("/api/crearproductos", auth, ProductosController.crearProductos);
router.patch("/api/productosupdate/", auth, ProductosController.updateProducto);

//Rutas Compras
router.get("/api/listarcompras", auth, ComprasController.listarCompras);
router.get("/api/listarcomprasfechas", auth, ComprasController.listarcomprasfechas);
router.get("/api/listarcomprasfacturadas", auth, ComprasController.listarComprasFacturadas);
router.post("/api/listarproductofechas", auth, ComprasController.listarproductofechas);
router.get("/api/listarcompraid/:id", auth, ComprasController.listarCompraid);
router.post("/api/crearcompras", auth, ComprasController.crearCompras);
router.patch("/api/comprasupdate", auth, ComprasController.updateCompras);

//Rutas Almacen
router.get("/api/listaralmacen", auth, AlmacenController.listarAlmacen);

//Rutas Ventas
router.get("/api/listarventas", auth, VentasController.listarVentas);
router.get("/api/listarventafacturadas", auth, VentasController.listarVentasFacturadas);
router.get("/api/listarventasid/:id", auth, VentasController.listarVentasid);
router.post("/api/crearventas", auth, VentasController.crearVentas);

//Rutas Abono ventas
router.get("/api/listarabonoventas/:id", auth, AbonoventasController.listarabonoventas);
router.post("/api/crearabonos", auth, AbonoventasController.crearAbonos);
router.post("/api/updatedeuda", auth, AbonoventasController.updateDeuda);

module.exports = router; //exportamos todas nuestras rutas ••••••••
