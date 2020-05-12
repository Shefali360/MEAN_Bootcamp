const user = require("./service");
const tokenService=require("./token")
const passport=require('passport')

module.exports.home = (req, res) => {
  res.json({
    success:"true"
  });
}

module.exports.create = async (req, res) => {
  try {
    const data=await user.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.login=async(req,res,next)=>{
    passport.authenticate('local', function(err, user ,info) {
      if (err) { return res.json(err); }
      if (!user) {
        return res.json({ error: 'Invalid username or password' });
      }
      const payload = {
        name:req.body.name,
        email: req.body.email
    }
    const token = tokenService.generateToken(payload);
    return res.json({ success: true, token });
})(req, res, next);
}