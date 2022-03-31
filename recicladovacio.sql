-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: reciclado
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Abono_deudas`
--

DROP TABLE IF EXISTS `Abono_deudas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Abono_deudas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ventas_productosId` int(11) NOT NULL,
  `cantidad_abono` int(11) NOT NULL,
  `status_abono` varchar(255) NOT NULL,
  `fecha_abono` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_productosId` (`ventas_productosId`),
  CONSTRAINT `Abono_deudas_ibfk_1` FOREIGN KEY (`ventas_productosId`) REFERENCES `Ventas_productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Abono_deudas`
--

LOCK TABLES `Abono_deudas` WRITE;
/*!40000 ALTER TABLE `Abono_deudas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Abono_deudas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Almacens`
--

DROP TABLE IF EXISTS `Almacens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Almacens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productoId` int(11) DEFAULT NULL,
  `cantidad_disponible` varchar(255) NOT NULL,
  `descripcion_almacen` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productoId` (`productoId`),
  CONSTRAINT `Almacens_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `Productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Almacens`
--

LOCK TABLES `Almacens` WRITE;
/*!40000 ALTER TABLE `Almacens` DISABLE KEYS */;
INSERT INTO `Almacens` VALUES (2,6,'1','derivados','2021-06-18 22:15:05','2021-07-03 16:19:25'),(3,1,'1','derivados','2021-06-18 22:15:05','2021-07-04 12:38:18'),(4,2,'1','derivados','2021-06-18 22:15:05','2021-07-03 21:11:07'),(5,7,'1','sillas-mesas','2021-06-25 14:01:45','2021-06-29 01:36:36'),(6,8,'1','potesitos','2021-06-25 14:03:22','2021-07-02 20:51:16'),(7,9,'1','potesitos','2021-06-25 14:04:36','2021-06-29 01:29:47'),(8,5,'1','archivo','2021-06-25 14:04:36','2021-07-02 20:51:16');
/*!40000 ALTER TABLE `Almacens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categorias`
--

DROP TABLE IF EXISTS `Categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorias`
--

LOCK TABLES `Categorias` WRITE;
/*!40000 ALTER TABLE `Categorias` DISABLE KEYS */;
INSERT INTO `Categorias` VALUES (1,'Plastico','plastico','ACTIVO','2021-06-18 20:16:40','2021-06-18 20:16:40'),(2,'Carton','Todo lo del Gremio','ACTIVO','2021-06-18 20:44:14','2021-06-18 20:44:14'),(3,'Archivo','papeless','ACTIVO','2021-06-18 20:44:35','2021-06-23 14:37:34');
/*!40000 ALTER TABLE `Categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Clientes`
--

DROP TABLE IF EXISTS `Clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` int(11) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clientes`
--

LOCK TABLES `Clientes` WRITE;
/*!40000 ALTER TABLE `Clientes` DISABLE KEYS */;
INSERT INTO `Clientes` VALUES (1,19528512,'franyori','berbeci','04143054294','caracas','ACTIVO','2021-06-18 20:27:18','2021-06-18 20:27:18'),(2,12345456,'SAVENPE','ASEO','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','ACTIVO','2021-06-18 20:43:41','2021-06-25 14:08:19'),(3,23456789,'Maxxxxxxp','LTDgg','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','INACTIVO','2021-06-21 18:50:24','2021-06-21 18:59:58'),(4,4564321,'OSWALDOs','SAVENPE','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','ACTIVO','2021-06-21 19:22:07','2021-06-28 19:14:38'),(5,10808800,'cecilio','urbano','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','ACTIVO','2021-06-25 15:05:17','2021-06-25 15:05:17'),(6,21415602,'gregorio','savenpe','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','ACTIVO','2021-06-25 15:41:44','2021-06-25 15:41:44'),(7,13567,'viejito','grosero','04143054294','Calle la Cinta, Qta. Antojo, Las Mercedes.','ACTIVO','2021-06-29 01:36:00','2021-06-29 01:36:00');
/*!40000 ALTER TABLE `Clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Compras_diarias`
--

DROP TABLE IF EXISTS `Compras_diarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Compras_diarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientesId` int(11) NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad_compra` int(11) NOT NULL,
  `total_compra` int(11) NOT NULL,
  `status_compra` varchar(255) NOT NULL,
  `fecha_compras` datetime DEFAULT NULL,
  `codigo_compra` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clientesId` (`clientesId`),
  KEY `productoId` (`productoId`),
  CONSTRAINT `Compras_diarias_ibfk_1` FOREIGN KEY (`clientesId`) REFERENCES `Clientes` (`id`),
  CONSTRAINT `Compras_diarias_ibfk_2` FOREIGN KEY (`productoId`) REFERENCES `Productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Compras_diarias`
--

LOCK TABLES `Compras_diarias` WRITE;
/*!40000 ALTER TABLE `Compras_diarias` DISABLE KEYS */;
/*!40000 ALTER TABLE `Compras_diarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Deuda_ventas`
--

DROP TABLE IF EXISTS `Deuda_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Deuda_ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ventas_productosId` int(11) NOT NULL,
  `total_deuda` int(11) NOT NULL,
  `status_deuda` varchar(255) NOT NULL,
  `fecha_deuda` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_productosId` (`ventas_productosId`),
  CONSTRAINT `Deuda_ventas_ibfk_1` FOREIGN KEY (`ventas_productosId`) REFERENCES `Ventas_productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Deuda_ventas`
--

LOCK TABLES `Deuda_ventas` WRITE;
/*!40000 ALTER TABLE `Deuda_ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Deuda_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ganacia_ventas_generals`
--

DROP TABLE IF EXISTS `Ganacia_ventas_generals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ganacia_ventas_generals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ventas_productosId` int(11) NOT NULL,
  `ganacia_venta_global` int(11) NOT NULL,
  `status_ganacias` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_productosId` (`ventas_productosId`),
  CONSTRAINT `Ganacia_ventas_generals_ibfk_1` FOREIGN KEY (`ventas_productosId`) REFERENCES `Ventas_productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ganacia_ventas_generals`
--

LOCK TABLES `Ganacia_ventas_generals` WRITE;
/*!40000 ALTER TABLE `Ganacia_ventas_generals` DISABLE KEYS */;
INSERT INTO `Ganacia_ventas_generals` VALUES (53,82,10000000,'VENTA','2021-07-04 12:38:18','2021-07-04 12:38:18');
/*!40000 ALTER TABLE `Ganacia_ventas_generals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Historico_ventas`
--

DROP TABLE IF EXISTS `Historico_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Historico_ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ventas_productosId` int(11) NOT NULL,
  `status_historico` varchar(255) NOT NULL,
  `fecha_historico` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_productosId` (`ventas_productosId`),
  CONSTRAINT `Historico_ventas_ibfk_1` FOREIGN KEY (`ventas_productosId`) REFERENCES `Ventas_productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Historico_ventas`
--

LOCK TABLES `Historico_ventas` WRITE;
/*!40000 ALTER TABLE `Historico_ventas` DISABLE KEYS */;
INSERT INTO `Historico_ventas` VALUES (55,82,'VENTA','2021-07-04 04:00:00','2021-07-04 12:38:18','2021-07-04 12:38:18');
/*!40000 ALTER TABLE `Historico_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Logins`
--

DROP TABLE IF EXISTS `Logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Logins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Logins`
--

LOCK TABLES `Logins` WRITE;
/*!40000 ALTER TABLE `Logins` DISABLE KEYS */;
INSERT INTO `Logins` VALUES (1,'franyori','franyori-@gmail.com','$2b$10$N9qmZNPcyARIhv.NOq7Oiubv9xkPXEX356XSCzJoxWRjgNcavO6lO','2021-06-18 21:13:40','2021-06-18 21:13:40');
/*!40000 ALTER TABLE `Logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Productos`
--

DROP TABLE IF EXISTS `Productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `descripcion_producto` varchar(255) NOT NULL,
  `categoriaId` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `unidad_medida` varchar(255) NOT NULL,
  `precio_costo` int(11) NOT NULL,
  `precio_venta` int(11) NOT NULL,
  `iva` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_producto` (`nombre_producto`),
  KEY `categoriaId` (`categoriaId`),
  CONSTRAINT `Productos_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `Categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Productos`
--

LOCK TABLES `Productos` WRITE;
/*!40000 ALTER TABLE `Productos` DISABLE KEYS */;
INSERT INTO `Productos` VALUES (1,'Plastico duro','tobos-cesta',1,'ACTIVO','KG',700000,8000,0,'2021-06-18 20:16:40','2021-06-25 14:05:24'),(2,'Carton','cajas,carton',2,'ACTIVO','Kg',200000,900,1,'2021-06-18 21:41:04','2021-06-25 13:58:29'),(5,'Archivo','papel,hojas',3,'ACTIVO','Kg',200000,900,2,'2021-06-18 22:04:14','2021-06-28 19:15:30'),(6,'Chicle','plastico suave',1,'ACTIVO','kg',500000,900,1,'2021-06-18 22:15:05','2021-06-25 13:59:57'),(7,'Plastico duro Mixto','sillas-mesas',1,'ACTIVO','Kg',200000,900,12,'2021-06-25 14:01:45','2021-06-25 14:02:08'),(8,'Soplado','potesitos',1,'ACTIVO','Kg',200000,900,12,'2021-06-25 14:03:22','2021-06-25 14:03:22'),(9,'Soplado2','potesitos,',1,'ACTIVO','Kg',500000,900,12,'2021-06-25 14:04:35','2021-06-28 19:42:40');
/*!40000 ALTER TABLE `Productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ventas_productos`
--

DROP TABLE IF EXISTS `Ventas_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ventas_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientesId` int(11) NOT NULL,
  `almacenId` int(11) NOT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `precio_ventas` int(11) NOT NULL,
  `total_ventas` int(11) NOT NULL,
  `fecha_ventas` datetime NOT NULL,
  `status_ventas` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clientesId` (`clientesId`),
  KEY `almacenId` (`almacenId`),
  CONSTRAINT `Ventas_productos_ibfk_1` FOREIGN KEY (`clientesId`) REFERENCES `Clientes` (`id`),
  CONSTRAINT `Ventas_productos_ibfk_2` FOREIGN KEY (`almacenId`) REFERENCES `Almacens` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ventas_productos`
--

LOCK TABLES `Ventas_productos` WRITE;
/*!40000 ALTER TABLE `Ventas_productos` DISABLE KEYS */;
INSERT INTO `Ventas_productos` VALUES (82,1,3,100,800000,80000000,'2021-07-04 04:00:00','PAGADO','2021-07-04 12:38:18','2021-07-04 12:38:18');
/*!40000 ALTER TABLE `Ventas_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historico_compras`
--

DROP TABLE IF EXISTS `historico_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historico_compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `compras_diariasId` int(11) NOT NULL,
  `status_historico` varchar(255) NOT NULL,
  `fecha_historico` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_diariasId` (`compras_diariasId`),
  CONSTRAINT `historico_compras_ibfk_1` FOREIGN KEY (`compras_diariasId`) REFERENCES `Compras_diarias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_compras`
--

LOCK TABLES `historico_compras` WRITE;
/*!40000 ALTER TABLE `historico_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `historico_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('20210611144417-create-cliente.js'),('20210611145938-create-categorias.js'),('20210611151600-create-productos.js'),('20210611153347-create-almacen.js'),('20210611154524-create-compras-diarias.js'),('20210611173927-create-historico-compra.js'),('20210616161921-crear-login.js'),('20210618160120-crear-historico-venta.js'),('20210618190315-crear-ventass.js'),('20210624001805-create-ganacia-ventas-general.js'),('20210626013958-create-deuda-ventas.js'),('20210626015400-create-abono-deuda.js');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seeds`
--

DROP TABLE IF EXISTS `seeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seeds` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seeds`
--

LOCK TABLES `seeds` WRITE;
/*!40000 ALTER TABLE `seeds` DISABLE KEYS */;
INSERT INTO `seeds` VALUES ('20210611195905-categorias.js'),('20210611200656-crear-productos.js'),('20210616143033-crear-compras.js'),('20210616161431-crear-login.js');
/*!40000 ALTER TABLE `seeds` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-04 12:47:15
