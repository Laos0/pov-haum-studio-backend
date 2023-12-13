/** This file deals with the logics of logging in */
import pool from "../database.js";
import { DatabaseEnums } from "../databaseEnums/databaseEnums.js";
import jwt from "jsonwebtoken";
import crypto from "crypto"

const login = async (req, res) => {
    try{
        // object destructuring 
        const {email, password} = req.body;

        // sql 
        const sql = `SELECT ${DatabaseEnums.USER.PASSWORD} FROM ${DatabaseEnums.TABLE_NAMES.USER} where ${DatabaseEnums.USER.EMAIL}="${email}"`;
        const [result] = await pool.query(sql);

        if(password === result[0].password){

            console.log("The password is: ", result[0].password);
            
            // generating secret key
            const secretKey = crypto.randomBytes(32).toString('hex');
            
            // creating jwt
            const token = jwt.sign({userEmail: email}, secretKey, {expiresIn: '30s'});

            res.status(200).json({ message: 'Logged in successfully', token: token});

        }else{
            console.log("The password is: ", result[0].password);
            res.status(401).json({ message: 'Unauthorized: Incorrect password' });
        }


    }catch(error){
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

export default { login };