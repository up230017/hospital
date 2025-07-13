/* eslint-disable consistent-return */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../T_Usuario/usuarioModel.js');
const RefreshToken = require('../auth/refreshTokenModel.js');

// Function to generate JWT token
const generateToken = (userId, name, role) => jwt.sign({ userId, name, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

// Function to check if user exists
const checkUserExists = async (email) => User.findOne({ email });

// Function to hash password
const hashPassword = async (password) => bcrypt.hash(password, 10);

// Function to generate refresh token
const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  return new RefreshToken({ token: refreshToken, userId }).save();
};

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - userDisplayName
 *               - email
 *               - password
 *               - role
 *             properties:
 *               userName:
 *                 type: string
 *               userDisplayName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: ['Admin', 'Sales', 'Support', 'Manager', 'User']
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Some server error
 */
exports.register = async (req, res, next) => {
  try {
    const {
      userName, userDisplayName = userName, email, password, role = 'User',
    } = req.body;

    const existingUser = await checkUserExists(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      userName,
      userDisplayName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Some server error
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await checkUserExists(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // eslint-disable-next-line no-underscore-dangle
    const token = generateToken(user._id, user.role, user.userDisplayName);
    // eslint-disable-next-line no-underscore-dangle
    const refreshToken = await generateRefreshToken(user._id);

    res.status(200).json({ token, refreshToken: refreshToken.token });
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh the access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       400:
 *         description: Invalid refresh token
 */
exports.refreshToken = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId);
    if (user) {
      const newToken = generateToken(user.userId, user.name, user.role);
      res.status(200).json({ token: newToken });
    } else {
      res.status(401).json({ message: 'Invalid refresh token' });
    }
  } catch (error) {
    next(error);
  }
};