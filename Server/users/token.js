const jwt = require('jsonwebtoken');
const tokenKey = "MY_APP_AUTHENTICATION";

module.exports.generateToken = (payload) => jwt.sign(payload, tokenKey, { expiresIn: "60m" });
module.exports.verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, tokenKey);
        return true;
    } catch (error) {
        return false;
    }
};