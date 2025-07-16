const Usuario = require('./usuarioModel')

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene todos los Usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: El catalogo de los Usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
exports.getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).send(usuarios);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Obtiene Usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del Usuario
 *     responses:
 *       200:
 *         description: La descripcion del Usuario por Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */
exports.getUsuarioPorID = async (req, res, next) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).send(usuario);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Crea un nuevo Usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Some server error
 */
exports.postUsuario = async (req, res, next) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send(usuario);
  } catch (error) {
    next(error);
  }
};



/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Actualiza un Usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: EL Id del Usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: El Usuario se actualizo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Some server error
 */
exports.putUsuario = async (req, res, next) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).send(usuario);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Elimina un Usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del Usuario
 *     responses:
 *       200:
 *         description: El Usuario se elimino
 *       404:
 *         description: Usuario no encontrado
 */
exports.deleteUsuario = async (req, res, next) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};