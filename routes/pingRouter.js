import express from 'express';
import pingController from '../controllers/pingController.js';

/**
 * This file allows us to access the domain.com/api/v1/ping/* path
 */

// creating a new router instance
const router = express.Router();

//defining get routes
router.get('/', pingController.ping); 


export default router;