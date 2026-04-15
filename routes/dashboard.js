import express from 'express';
import * as dashboardController from '../controller/dashboardcontroller.js';

const router = express.Router();

// Protected dashboard route
router.get('/dashboard', dashboardController.getDashboard);

export default router;