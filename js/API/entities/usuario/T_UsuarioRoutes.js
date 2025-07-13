const express = require('express');
const { body, param, query } = require('express-validator');
const validate = require('../../middlewares/validation');
const usuarioController = require('./T_UsuarioController');
const authMiddleware = require('../../middlewares/authMiddlewares');

const router = express.Router();

//este es la ruta para obetener todos los Usuarios
router.get('/usuario', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
], validate, usuarioController.getUsuarios);

//este es la ruta para obeter un Usuario
router.get('/usuario/:id', [
  param('id').isMongoId().withMessage('Invalid Usuario ID'),
], validate, usuarioController.getUsuarioPorID);


//este es la ruta para crear un usuario
router.post('/usuario', [
],validate, usuarioController.postUsuario)


//este es la ruta para actualizar un usuario
router.put('/usuario/:id', [
  param('id').isMongoId().withMessage('Invalid Usuario ID'),
],validate, usuarioController.putUsuario)


//este es la ruta para borrar un Usuario
router.delete('/usuario/:id', [
  param('id').isMongoId().withMessage('Invalid Usuario ID'),
], validate, usuarioController.deleteUsuario);

module.exports = router;