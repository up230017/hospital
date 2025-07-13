const mongoose = require('mongoose');
const databaseErrorHandler = require('../middlewares/databaseErrorHandler');
require('dotenv').config();

console.log('MONGODB_URI:', process.env.MONGODB_URI);

const connectDB = async () => {
  const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    app.use((req, res, next) => databaseErrorHandler(error, req, res, next));
    process.exit(1);
  }
}

module.exports = connectDB;