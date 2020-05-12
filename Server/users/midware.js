const tokenService = require('./token');

module.exports.verify = (req, res, next) => {
    console.log("hi");
    console.log(req.headers);
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    const verification = tokenService.verifyToken(token);
    if(verification)
        return next();
    else
        res.json({err: "Invalid token"});
}