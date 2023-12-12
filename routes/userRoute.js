/** this file will handle with user requests */
/*  These routers are known as middleware
    that will have access to the request object
    (req), the reponse object (res) and the middleware function 
    commonly denoted by a variable named next

    We will use methods from database.js to respond accordingly 
    base on user requests
*/
import express from 'express';
import { getTest } from '../controllers/userController.js';

// creating a new router instance
const router = express.Router();

// defining routes
router.get('/test', getTest);


export default router; // default way to export 
