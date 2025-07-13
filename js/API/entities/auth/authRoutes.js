const express = require('express');
const { body } = require('express-validator');
const authController = require('../auth/authController');
const { registerLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

router.post('/register', registerLimiter, [
  body('userName').notEmpty().withMessage('User name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], authController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
], authController.login);

router.post('/refresh-token', [
  body('token').notEmpty().withMessage('Refresh token is required'),
], authController.refreshToken);

module.exports = router;