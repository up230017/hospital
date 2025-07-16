const express = require('express');

const router = express.Router();

const usuraioRoutes = require('./usuario/usuarioRoutes');

router.use(usuraioRoutes);

module.exports = router;