//import pool from "../database.js";
import { DatabaseEnums } from "../databaseEnums/databaseEnums.js";
import { v4 as uuidv4 } from 'uuid';
import queries from '../queries/orderQueries.js';
import nodeMailerUtils from "../libs/nodeMailerUtils.js";

const order = async (req, res) => {

    try{
        // extract the req.body by object destructuring, finding order_json and email from req.body and linking it
        const {order_json, email} = req.body;
        //console.log(JSON.parse(req.body.order_json).businessName);

        // generating uuid for the order_detail
        const uuid = uuidv4();

        const values = [uuid, order_json, email];

        // inserting data into the order_detail table in database
        //const result = await pool.query(queries.orderPostQueries.ADD_NEW_ORDER, values);

        // send invoice to user's email, parse the req.body.order_json turning it back into an object
        nodeMailerUtils.sendInvoiceToEmail('gachanopulls@gmail.com', 'seyn trml xvzf vjvn', 'isonylao@gmail.com', JSON.parse(req.body.order_json));

        res.status(200).json({ message: 'Order placed successfully!' });
    }catch(error){
        console.error('Error placing an order:', error);
        res.status(500).json({ message: 'Error placing an order', error: error.message });
    }

};

const getAllOrders = async (req, res) => {
    try {
        const orders = await pool.query('SELECT * FROM order_detail');
        res.status(200).json(orders[0]); // Assuming users[0] contains the fetched order data
    }catch(error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
}


export default {order, getAllOrders};