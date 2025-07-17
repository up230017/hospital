const express = require('express');
const { body, param, query } = require('express-validator');
const validate = require('../../middlewares/validation');
const citacontroller = require('./citaController');
const authMiddleware = require('../../middlewares/authMiddlewares');

const router = express.Router();

//este es la ruta para obetener todas las citas
router.get('/cita', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
], validate, citacontroller.getCitas);

//este es la ruta para obtener una cita
router.get('/cita/:id', [
  param('id').isMongoId().withMessage('Invalid cita ID'),
], validate, citacontroller.getCitaPorID);

//este es la ruta para crear una cita
router.post('/cita', [
    // Nombre del médico: obligatorio, máximo 50 caracteres
  body('nombre_medico')
    .exists({ checkFalsy: true }).withMessage('El nombre del médico es obligatorio'),

  // Especialidad: obligatoria, debe ser una de las permitidas
  body('especialidad')
    .exists({ checkFalsy: true }).withMessage('La especialidad es obligatoria')
    .isIn(['Medicina General', 'Ginecología', 'Dermatología', 'Pediatría', 'Neurología', 'Gastroenterología'])
    .withMessage('Especialidad no válida'),

  // Fecha y hora: obligatoria, debe ser fecha válida (puedes usar ISO8601 o regex)
  body('fecha_hora')
    .exists({ checkFalsy: true }).withMessage('La fecha y hora son obligatorias'),

  // Dirección: obligatoria, máximo 100 caracteres
  body('direccion')
    .exists({ checkFalsy: true }).withMessage('La dirección es obligatoria')
    .isLength({ max: 100 }).withMessage('La dirección no debe exceder los 100 caracteres')

],validate, citacontroller.postCita);

//este es la ruta para actualizar una cita
router.put('/cita/:id', [
    param('id').isMongoId().withMessage('Invalid cita ID'),
    // Nombre del médico: obligatorio, máximo 50 caracteres
  body('nombre_medico')
    .exists({ checkFalsy: true }).withMessage('El nombre del médico es obligatorio'),

  // Especialidad: obligatoria, debe ser una de las permitidas
  body('especialidad')
    .exists({ checkFalsy: true }).withMessage('La especialidad es obligatoria')
    .isIn(['Medicina General', 'Ginecología', 'Dermatología', 'Pediatría', 'Neurología', 'Gastroenterología'])
    .withMessage('Especialidad no válida'),

  // Fecha y hora: obligatoria, debe ser fecha válida (puedes usar ISO8601 o regex)
  body('fecha_hora')
    .exists({ checkFalsy: true }).withMessage('La fecha y hora son obligatorias'),

  // Dirección: obligatoria, máximo 100 caracteres
  body('direccion')
    .exists({ checkFalsy: true }).withMessage('La dirección es obligatoria')
    .isLength({ max: 100 }).withMessage('La dirección no debe exceder los 100 caracteres')

],validate, citacontroller.putCita);

//este es la ruta para borrar una cita
router.delete('/cita/:id', [
  param('id').isMongoId().withMessage('Invalid cita ID'),
], validate, citacontroller.deleteCita);

module.exports = router;