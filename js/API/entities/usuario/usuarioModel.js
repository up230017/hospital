const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - password
 *         - email
 *       properties:
 *         nombre:
 *           type: string
 *           description: nombre del usuario
 *         password:
 *           type: string
 *           description: contraseña del usuario
 *         email:
 *           type: string
 *           description: email del usuario
 *         direccion:
 *           type: string
 *           description: direccion del usuario
 *         Género:
 *           type: string
 *           description: genero del usuario
 *           enum: ["Masculino", "Femenino"]
 *         telefono:
 *           type: string
 *           description: telefono del usuario
 *         fecha_nacimiento:
 *           type: string
 *           description: decha de nacimiento del usuario
 *       example:
 *         nombre: String
 *         password: String
 *         email: String@String.com
 *         direccion: String
 *         Género: Masculino
 *         telefono: "1234567890"
 *         fecha_nacimiento: String
 */

const usuarioSchema = Schema({

  nombre: {
    type: String,
    required: true,   
  },

  password: {
    type: String,
    required: true,   
  },

  email: {
    type: String,
    required: true,   
    unique: true
  },

  direccion:{
    type: String,
  },

  Género: {
    type: String,
    enum: ["Masculino", "Femenino"]
  },

  telefono: {
    type: String,
    match: [/^[0-9]{10}$/, 'El número de teléfono debe tener exactamente 10 dígitos numéricos'],
  },

  fecha_nacimiento:{
    type: String,
  }

});

const Usuario =  mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;