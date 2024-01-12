import express from 'express';
import orderController from '../controllers/orderController.js';
import { commonPaths } from '../libs/routePaths.js'
import multer from 'multer';

const storage = multer.memoryStorage(); // Use memory storage to handle files as Buffers
const upload = multer({ storage: storage });


// creating a new router instance
const router = express.Router();

//defining get routes
router.get('/', orderController.getAllOrders); // retrieve all the orders in the database
router.get('/testOrder', orderController.testGetOrder);

// defining post routes
router.post('/new', orderController.order); // placing an order
router.post('/sendEmailInvoice', upload.single('file'), orderController.sendEmailInvoice); // send invoice to client's email

export default router;