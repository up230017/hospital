const express = require('express');
const { body, param, query } = require('express-validator');
const validate = require('../../middlewares/validation');
const usuarioController = require('./usuarioController');
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
  // Password: obligatorio, 8-20 caracteres
  body('password')
    .exists({ checkFalsy: true }).withMessage('La contraseña es obligatoria')
    .isLength({ min: 8, max: 20 }).withMessage('La contraseña debe tener entre 8 y 20 caracteres'),

  // Nombre: obligatorio, máximo 30 caracteres
  body('nombre')
    .exists({ checkFalsy: true }).withMessage('El nombre es obligatorio'),

  // Email: obligatorio, válido
  body('email')
    .exists({ checkFalsy: true }).withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido'),

  // Dirección: opcional, máximo 100 caracteres (puedes ajustar)
  body('direccion')
    .optional()
    .isLength({ max: 100 }).withMessage('La dirección no debe exceder los 100 caracteres'),

  // Género: opcional, solo "Masculino" o "Femenino"
  body('genero')
    .optional()
    .isIn(['Masculino', 'Femenino']).withMessage('El género debe ser Masculino o Femenino'),

  // Teléfono: opcional, 10 dígitos numéricos
  body('telefono')
    .optional()
    .matches(/^[0-9]{10}$/).withMessage('El teléfono debe tener exactamente 10 dígitos numéricos'),

  // Fecha de nacimiento: opcional, debe ser fecha ISO válida
  body('fecha_nacimiento')
    .optional(),

],validate, usuarioController.postUsuario)


//este es la ruta para actualizar un usuario
router.put('/usuario/:id', [
  param('id').isMongoId().withMessage('Invalid Usuario ID'),
  // Password: obligatorio, 8-20 caracteres
  body('password')
    .exists({ checkFalsy: true }).withMessage('La contraseña es obligatoria')
    .isLength({ min: 8, max: 20 }).withMessage('La contraseña debe tener entre 8 y 20 caracteres'),

  // Nombre: obligatorio, máximo 30 caracteres
  body('nombre')
    .exists({ checkFalsy: true }).withMessage('El nombre es obligatorio'),

  // Email: obligatorio, válido
  body('email')
    .exists({ checkFalsy: true }).withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido'),

  // Dirección: opcional, máximo 100 caracteres (puedes ajustar)
  body('direccion')
    .optional()
    .isLength({ max: 100 }).withMessage('La dirección no debe exceder los 100 caracteres'),

  // Género: opcional, solo "Masculino" o "Femenino"
  body('genero')
    .optional()
    .isIn(['Masculino', 'Femenino']).withMessage('El género debe ser Masculino o Femenino'),

  // Teléfono: opcional, 10 dígitos numéricos
  body('telefono')
    .optional()
    .matches(/^[0-9]{10}$/).withMessage('El teléfono debe tener exactamente 10 dígitos numéricos'),

  // Fecha de nacimiento: opcional, debe ser fecha ISO válida
  body('fecha_nacimiento')
    .optional(),

],validate, usuarioController.putUsuario)


//este es la ruta para borrar un Usuario
router.delete('/usuario/:id', [
  param('id').isMongoId().withMessage('Invalid Usuario ID'),
], validate, usuarioController.deleteUsuario);

module.exports = router;