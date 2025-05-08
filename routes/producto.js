const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productocontroller');

router.post('/crear', productoController.crearProducto);
router.put('/editar/:id', productoController.editarProducto);
router.delete('/eliminar/:id', productoController.eliminarProducto);
router.get('/obtener/:id', productoController.obtenerProductos);  
router.get('/listar', productoController.listarProductos);       

module.exports = router;
