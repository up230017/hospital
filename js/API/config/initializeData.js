const bcrypt = require('bcryptjs');
const Usuario = require('../entities/usuario/usuarioModel');
const Cita = require('../entities/cita/citaModel');
const databaseErrorHandler = require('../middlewares/databaseErrorHandler');

const initializeData = async (app) => {
  try {
    // Check if there are any users in the database
    const userCount = await Usuario.countDocuments();
    if (userCount === 0) {
      // No users found, create default users
      const defaultUsers = [
        {
          nombre: 'admin',
          password: '09876543',
          email: 'admin@hos.com'
        },
        {
          nombre: 'usuario',
          password: '12345678',
          email: 'usuario@hos.com'
        },
        // Add more default users as needed
      ];

      await Usuario.insertMany(defaultUsers);
      console.log('Default users created');
    } else {
      console.log('Users already exist in the database');
    }

    const citaCount = await Cita.countDocuments();
    if (citaCount === 0) {
      // No users found, create default users
      const defaultUsers = [
        {
          email_usuario: 'admin@hos.com',
          nombre_medico: 'Dr. Richard James',
          especialidad: 'Medicina General',
          fecha_hora: '2025-07-21, 12:00',
          direccion: '17th Cross, Richmond Circle, Ring Road, London'
        },
        {
          email_usuario: 'admin@hos.com',
          nombre_medico: 'Dra. Emily Larson',
          especialidad: 'Ginecología',
          fecha_hora: '2025-07-22, 15:00',
          direccion: '27th Cross, Richmond Circle, Ring Road, London'
        },
        {
          email_usuario: 'usuario@hos.com',
          nombre_medico: 'Dr. Richard James',
          especialidad: 'Medicina General',
          fecha_hora: '2025-07-20, 12:00',
          direccion: '17th Cross, Richmond Circle, Ring Road, London'
        },
        {
          email_usuario: 'usuario@hos.com',
          nombre_medico: 'Dr. Krishna Patel',
          especialidad: 'Dermatología',
          fecha_hora: '2025-07-19, 16:00',
          direccion: '37th Cross, Richmond Circle, Ring Road, London'
        },
      ];

      await Cita.insertMany(defaultUsers);
      console.log('Default Citas created');
    } else {
      console.log('Citas already exist in the database');
    }

  } catch (error) {
    console.error('Error initializing data:', error);
    app.use((req, res, next) => databaseErrorHandler(error, req, res, next));
    process.exit(1);
  }
};

module.exports = initializeData;