// This file allows us to connect to MySql database
// and we do query here to CRUD data in database

import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

/** ONLY DISABLE IF CLIENT DON'T NEED DATABASE */
const skipFile = false;
if(skipFile){
    console.trace('ENABLE DATABASE IF NEEDED:');
    
    process.exit();
}

// this is how you connect to mysql database
// to change the values, visit the .env file
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();


export default pool;
