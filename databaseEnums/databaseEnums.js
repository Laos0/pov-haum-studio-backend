/** Purpose of this enum class is to list multiple tables in a database 
 * so it can be used in sql statements, you wont have to remember what the table names are
 * Add more into this as the database grows
 */
const DatabaseTableEnum = {
    USER: 'user'
}

const DatabaseColEnum = {
    EMAIL: 'email',
    PASSWORD: 'password'
}

const DatabaseEnums = {
    TABLE_NAMES: DatabaseTableEnum, // for the table name in the database
    USER: { // for the column names in the User table
        EMAIL: DatabaseColEnum.EMAIL,
        PASSWORD: DatabaseColEnum.PASSWORD
    } // comma and repeat for newer tables
}

/** DatabaseEnums.USER */

export {DatabaseEnums};