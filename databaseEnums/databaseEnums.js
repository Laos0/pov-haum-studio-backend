/** Purpose of this enum class is to list multiple tables in a database 
 * so it can be used in sql statements, you wont have to remember what the table names are
 * Add more into this as the database grows
 */
const DatabaseTableEnum = {
    USER: 'user',
    ORDER_DETAIL: 'order_detail'
}

const DatabaseColEnum = {
    EMAIL: 'email',
    PASSWORD: 'password',
    CREATED_AT: 'create_at',
    ORDER_JSON: 'order_json',
    ORDER_DATE: 'order_date',
    ORDER_ID: 'order_id',
    USER_ID: 'user_id'

}

const DatabaseEnums = {
    TABLE_NAMES: DatabaseTableEnum, // for the table name in the database
    USER: { // for the column names in the User table
        USER_ID: DatabaseColEnum.USER_ID,
        EMAIL: DatabaseColEnum.EMAIL,
        PASSWORD: DatabaseColEnum.PASSWORD,
        CREATED_AT: DatabaseColEnum.CREATED_AT
    }, 
    ORDER: { 
        ORDER_ID: DatabaseColEnum.ORDER_ID,
        ORDER_JSON: DatabaseColEnum.ORDER_JSON,
        EMAIL: DatabaseColEnum.EMAIL,
        ORDER_DATE: DatabaseColEnum.ORDER_DATE
    }// comma and repeat for newer tables
}

/** DatabaseEnums.USER */

export {DatabaseEnums};