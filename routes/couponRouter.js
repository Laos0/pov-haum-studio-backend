import express from 'express';
import couponController from '../controllers/couponController.js'


// creating a new router instance
const router = express.Router();

//defining post routes
router.post('/validate', couponController.validate); // retrieve all the orders in the database


export default router;