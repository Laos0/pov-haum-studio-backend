import express from 'express';
import pingController from '../controllers/pingController.js';

/**
 * This file defines routes for pinging the server.
 */

// Create a new router instance
const router = express.Router();

// Define the GET route for pinging the server
router.get('/active', pingController.ping);

export default router;
