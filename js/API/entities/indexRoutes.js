const express = require('express');

const router = express.Router();

const usuraioRoutes = require('./usuario/usuarioRoutes');
const citaRoutes = require('./cita/citaRoutes');

router.use(usuraioRoutes);
router.use(citaRoutes);

module.exports = router;