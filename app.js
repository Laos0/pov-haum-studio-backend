import express, { Router } from 'express';
import  userRouter  from './routes/userRoute.js';
import { apiPaths } from './apiVersion/apiPaths.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080 || 3306;
app.use(cors());

// a middleware: this will allow us to send json from frontend to here
// without express.json(), our req.body will be {} 
// app.use(express.json()) also tells Express to automatically parse JSON request bodies for you
app.use(express.json())  

/** below here you can list all the routes you want to use so you can do requests */
app.use(apiPaths.API_USER_V1, userRouter); // starting path: http://localhost:8080/api/v1/users

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
}),

app.listen(port);