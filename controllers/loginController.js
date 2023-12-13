/** This file deals with the logics of logging in */
import pool from "../database.js"

const login = async (req, res) => {
    try{
        // object destructuring 
        const {email, password} = req.body;

        // sql 
        const sql = `SELECT * FROM ${email} where`;
        
    }catch(error){

    }
};