import express, { Router } from 'express';
import  userRouter  from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import orderRouter from './routes/orderRouter.js';
import { apiPaths } from './apiVersion/apiPaths.js';
import cors from 'cors';

const app = express();

// Set the host and port for the server to listen on
const host = '0.0.0.0'; // This binds the server to all network interfaces

const port = process.env.PORT || 8080;
app.use(cors({
    origin: 'https://pov-haum-studio-ng.onrender.com', // Your Angular app domain
    methods: 'GET,PUT,POST,DELETE',
    credentials: false, // If you're using cookies or authentication headers
}));

// a middleware: this will allow us to send json from frontend to here
// without express.json(), our req.body will be {} 
// app.use(express.json()) also tells Express to automatically parse JSON request bodies for you
app.use(express.json());

/** below here you can list all the routes you want to use so you can do requests, or mounting the routers */
app.use(apiPaths.API_USER_V1, userRouter); // starting path: http://localhost:8080/api/v1/users
app.use(apiPaths.API_LOGIN_V1, loginRouter); // starting path: http://localhost:8080/api/v1/login
app.use(apiPaths.API_ORDER_V1, orderRouter); // starting path: http://localhost:8080/api/v1/order

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

// Set the host and port for the server to listen on
/**  TODO: We can declare the host as HOST=0.0.0.0 in the .env file
 * const host = process.env.HOST || '0.0.0.0'; // Use the HOST environment variable or default to '0.0.0.0'
 * const port = process.env.PORT || 8080;
 */
app.set('port', port);
app.set('host', host);

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});