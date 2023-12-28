/** This is a where all the requests are created for users */

import queries from "../queries/userQueries.js";
//import pool from "../database.js"
import { v4 as uuidv4 } from 'uuid';


const getTest = async (req, res) => {
    try {
        console.log('user router testing');
        res.send('User router testing from server');
    } catch(error) {
        res.status(500).send('Error fetching test...');
    }
};

const getAllUsers = async (req, res) => {
    try {
        //const users = await pool.query('SELECT * FROM user');
        res.status(200).json(users[0]); // Assuming users[0] contains the fetched user data
    }catch(error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

const addNewUser = async (req, res) => {
    try {
        // Extract user data from the request body aka object destructuring 
        const { email, password } = req.body;
        console.log(req.body);

        // MySQL query to insert a new user into the database
        const sql = `INSERT INTO user (user_id, email, password) VALUES (?, ?, ?)`;

        // Generate a UUID for user_id 
        const uuid = uuidv4();

        const values = [uuid, email, password];

        //const result = await pool.query(queries.postUserQueries.ADD_NEW_USER, values);// the magic of sql <-- this is where the insert happens

        res.status(200).json({ message: 'User added successfully' });
    } catch (error) {
        console.error('Error adding new user:', error);
        res.status(500).json({ message: 'Error adding new user', error: error.message });
    }
};
export default { getTest, getAllUsers, addNewUser}; // this is how you export with ESM not commonjs

