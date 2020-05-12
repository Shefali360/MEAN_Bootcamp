const router = require('express').Router();
const user = require('./controller');
const midware = require('./midware');
const passport=require("passport");


router.get('/home',midware.verify,user.home)
router.post('/signup', user.create);
router.post('/login',user.login)
router.get('/auth/google',
  passport.authenticate('google', 
  { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router.get('/auth/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure' }));
    router.get('/auth/google/success', (req, res) => {
        res.send("Successful");
    });
    
    router.get('/auth/google/failure', (req, res) => {
        res.send("Unsuccessful");
    });



  module.exports = router;