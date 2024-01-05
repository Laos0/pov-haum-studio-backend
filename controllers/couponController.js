/** Purpose of this file is to store temp data of the coupons and
 * provide necessary api endpoints relevant to coupon codes
 * Once client wants a database, we will be calling database.js instead
 */

import couponManager from '../mockData/couponDB.js';

const validate = async (req, res) => {

    try{
        // extract the req.body by object destructuring, finding order_json and email from req.body and linking it
        const {code} = req.body;

        const coupon = couponManager.validateCoupon(code);

        //console.log(isValid);

        res.status(200).json(coupon);
    }catch(error){
        console.error('Error placing an order:', error);
        res.status(500).json({ message: 'Cannot retrieve code', error: error.message });
    }

};

export default {validate}