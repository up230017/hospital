const Cita = require('./citaModel')

/**
 * @swagger
 * /cita:
 *   get:
 *     summary: Obtiene todas las Citas
 *     tags: [Cita]
 *     responses:
 *       200:
 *         description: El catalogo de las Citas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cita'
 */
exports.getCitas = async (req, res, next) => {
  try {
    const citas = await Cita.find();
    res.status(200).send(citas);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /cita/{id}:
 *   get:
 *     summary: Obtiene Cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del Cita
 *     responses:
 *       200:
 *         description: La descripcion de la Cita por Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       404:
 *         description: Cita no encontrada
 */
exports.getCitaPorID = async (req, res, next) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) {
      res.status(404).json({ message: 'Cita no encontrado' });
    } else {
      res.status(200).send(cita);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /cita:
 *   post:
 *     summary: Crea una nueva Cita
 *     tags: [Cita]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       201:
 *         description: Cita creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       500:
 *         description: Some server error
 */
exports.postCita = async (req, res, next) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.status(201).send(cita);
  } catch (error) {
    next(error);
  }
};



/**
 * @swagger
 * /cita/{id}:
 *   put:
 *     summary: Actualiza una Cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: EL Id de la Cita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       200:
 *         description: La Cita se actualizo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       404:
 *         description: Cita no encontrada
 *       500:
 *         description: Some server error
 */
exports.putCita = async (req, res, next) => {
  try {
    const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cita) {
      res.status(404).json({ message: 'Cita no encontrado' });
    } else {
      res.status(200).send(cita);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /cita/{id}:
 *   delete:
 *     summary: Elimina una Cita por ID
 *     tags: [Cita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id de la Cita
 *     responses:
 *       200:
 *         description: La Cita se elimino
 *       404:
 *         description: Cita no encontrada
 */
exports.deleteCita = async (req, res, next) => {
  try {
    const cita = await Cita.findByIdAndDelete(req.params.id);
    if (!cita) {
      res.status(404).json({ message: 'Cita no encontrado' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};