import { DatabaseEnums } from "../databaseEnums/databaseEnums.js"

const orderGetQueries = {
    GET_ALL_ORDERS: `SELECT * FROM order_detail`
}

const orderPostQueries = {
    ADD_NEW_ORDER: `INSERT INTO ${DatabaseEnums.TABLE_NAMES.ORDER_DETAIL} (order_id, order_json, email) VALUES (?, ?, ?)`
}

export default {orderPostQueries}