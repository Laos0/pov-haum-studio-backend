import express from 'express';
import loginController from '../controllers/loginController.js';
import { commonPaths, userPaths } from '../libs/routePaths.js'


// creating a new router instance
const router = express.Router();

// defining post route
router.post('/', loginController.login); // logging in 

export default router;