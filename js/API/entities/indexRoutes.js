const express = require('express');

const router = express.Router();

const usuraioRoutes = require('./usuario/usuarioRoutes');
const citaRoutes = require('./cita/citaRoutes');
const authRoutes = require('./auth/authRoutes');

router.use(usuraioRoutes);
router.use(citaRoutes);
router.use('/auth', authRoutes);

module.exports = router;