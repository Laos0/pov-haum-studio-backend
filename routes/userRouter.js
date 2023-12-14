/** this file will handle with user requests */
/*  These routers are known as middleware
    that will have access to the request object
    (req), the reponse object (res) and the middleware function 
    commonly denoted by a variable named next
*/
import express from 'express';
import userController from '../controllers/userController.js';
import { commonPaths, userPaths } from '../libs/routePaths.js'


// creating a new router instance
const router = express.Router();

// defining GET ROUTES
router.get(commonPaths.TEST, userController.getTest);
router.get(commonPaths.GET_ALL, userController.getAllUsers);

// defining POST ROUTES
router.post('/new', userController.addNewUser); // creating a new user



export default router; // default way to export 
