/** This is a where all the requests are created for users */

import { query } from "express";
import pool from "../database.js"


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
        const users = await pool.query('SELECT * FROM user').then();
        res.status(200).json(users[0]); // Assuming users[0] contains the fetched user data
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
      }
};

export { getTest, getAllUsers }; // this is how you export with ESM not commonjs

