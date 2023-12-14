import express from 'express';
import orderController from '../controllers/orderController.js';
import { commonPaths } from '../libs/routePaths.js'


// creating a new router instance
const router = express.Router();

//defining get route
router.get('/', orderController.getAllOrders); // retrieve all the orders in the database

// defining post route
router.post('/new', orderController.order); // placing an order

export default router;