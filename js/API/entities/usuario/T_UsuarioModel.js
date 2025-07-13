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
 *         - fecha_nacimiento
 *       properties:
 *         nombre:
 *           type: string
 *           description: nombre del usuario
 *         password:
 *           type: string
 *           description: contraseña del usuario
 *         fecha_nacimiento:
 *           type: string
 *           description: decha de nacimiento del usuario
 *       example:
 *         nombre: String
 *         password: String
 *         hostorial: {
 *            fecha_nacimiento: String
 *         }
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

  hostorial: {
    fecha_nacimiento: {
      type: String,
      required: true,
      
    }
  }

});

const Usuario =  mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;