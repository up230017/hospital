const express = require('express');

const router = express.Router();

const usuraioRoutes = require('./usuario/T_UsuarioRoutes');

router.use(usuraioRoutes);

module.exports = router;