const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Cita:
 *       type: object
 *       required:
 *         - nombre_medico
 *         - especialidad
 *         - fecha_hora
 *         - direccion
 *       properties:
 *         nombre_medico:
 *           type: string
 *           description: nombre del medico
 *         especialidad:
 *           type: string
 *           description: especialidad del medico
 *           enum: ["Medicina General", "Ginecología", "Dermatología", "Pediatría", "Neurología", "Gastroenterología"]
 *         fecha_hora:
 *           type: string
 *           description: fecha y hora de la cita
 *         direccion:
 *           type: string
 *           description: direccion de la cita
 *       example:
 *         nombre_medico: String
 *         especialidad: Medicina General
 *         fecha_hora: String
 *         direccion: String
 */

const citaSchema = Schema({

  nombre_medico: {
    type: String,
    required: true,   
  },

  especialidad: {
    type: String,
    required: true,   
    enum: ["Medicina General", "Ginecología", "Dermatología", "Pediatría", "Neurología", "Gastroenterología"]
  },

  fecha_hora: {
    type: String,
    required: true,   
  },

  direccion:{
    type: String,
    required:true
  }
});

const Cita =  mongoose.model('Cita', citaSchema);

module.exports = Cita;