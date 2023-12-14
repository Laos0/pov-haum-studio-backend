import express from 'express';
import orderController from '../controllers/orderController.js';
import { commonPaths } from '../libs/routePaths.js'


// creating a new router instance
const router = express.Router();

// defining post route
router.post('/', orderController.order);

export default router;