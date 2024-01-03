import express from 'express';
import orderController from '../controllers/orderController.js';
import { commonPaths } from '../libs/routePaths.js'


// creating a new router instance
const router = express.Router();

//defining get routes
router.get('/', orderController.getAllOrders); // retrieve all the orders in the database
router.get('/testOrder', orderController.testGetOrder);

// defining post routes
router.post('/new', orderController.order); // placing an order

export default router;