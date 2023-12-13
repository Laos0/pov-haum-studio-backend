/** purpose of this util is to generate jwt token for users */

import jwt from "jsonwebtoken";
import crypto from "crypto"

const secretKey = crypto.randomBytes(32).toString('hex');

// it doesnt need to be email, it can be userId etc...
// for best practice, avoid using sensitive information like email
const generateTokenByEmail = (email) => {

    const token = jwt.sign({userEmail: email}, secretKey, {expiresIn: '5m'});
    return token;
}


export default {generateTokenByEmail};