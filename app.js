import express, { Router} from 'express';
import rateLimit from 'express-rate-limit';
import  userRouter  from './routes/userRouter.js';
import loginRouter from './routes/loginRouter.js';
import orderRouter from './routes/orderRouter.js';
import couponRouter from './routes/couponRouter.js';
import pingRouter from './routes/pingRouter.js';
import { apiPaths } from './apiVersion/apiPaths.js';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// Define allowed origins
const allowedOrigins = ['https://pov-haum-studio-ng.onrender.com', 'http://localhost:4200'];

// Set the host and port for the server to listen on
const host = '0.0.0.0'; // This binds the server to all network interfaces

const port = process.env.PORT || 8080;

// Define a rate limit middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes for actual deployment, right now it is 1 min
    max: 30, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiter middleware to all requests
app.use(limiter);
  
app.use(cors());

// enable preflights for all routes
// app.options('*', cors(corsOptions));

// a middleware: this will allow us to send json from frontend to here
// without express.json(), our req.body will be {} 
// app.use(express.json()) also tells Express to automatically parse JSON request bodies for you
app.use(express.json({ limit: '10mb' }));

/** below here you can list all the routes you want to use so you can do requests, or mounting the routers */
app.use(apiPaths.API_USER_V1, userRouter); // starting path: http://localhost:8080/api/v1/users
app.use(apiPaths.API_LOGIN_V1, loginRouter); // starting path: http://localhost:8080/api/v1/login
app.use(apiPaths.API_ORDER_V1, orderRouter); // starting path: http://localhost:8080/api/v1/order
app.use(apiPaths.API_COUPON_V1, couponRouter); // starting path: http://localhost:8080/api/v1/coupon
app.use(apiPaths.API_PING_V1, pingRouter); // starting path: http://localhost:8080/api/v1/ping

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

/* ENABLE THIS TO PING SERVER FROM SERVER SIDE
// Function to ping the server
const pingServer = async () => {
    try {

        // testing locally: const response = await fetch('http://localhost:4200/api/v1/ping/active');
        const response = await fetch('https://pov-haum-studio.onrender.com/api/v1/ping/active'); // Adjust the URL accordingly
        if (response.ok) {
            console.log('Server pinged successfully');
        } else {
            console.error('Failed to ping server');
        }
    } catch (error) {
        console.error('Error pinging server:', error);
    }
};

// Ping the server every 15 minutes (adjust interval as needed)
const pingInterval = 15 * 60 * 1000; // 15 minutes in milliseconds
setInterval(pingServer, pingInterval);

END OF SERVER PINGING */
