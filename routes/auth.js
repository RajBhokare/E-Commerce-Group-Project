import express from 'express';
import * as authController from '../controller/authController.js';

const router = express.Router();

// Login page (GET)
router.get('/login', authController.showLogin);

// Process login (POST)
router.post('/login', authController.loginUser);

// Logout
router.get('/logout', authController.logoutUser);

export default router;