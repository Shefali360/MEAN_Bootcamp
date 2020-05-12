const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const user = require("./service");

module.exports.config = (passport) => {
    passport.use(new localStrategy(user.login));
    passport.use(new GoogleStrategy({
        clientID:"361997301071-mea7cthog156psvo7ll2qo4gl250ikk5.apps.googleusercontent.com" ,
        clientSecret:"7af10f3w1-C38gFcvgkcIbMd",
        callbackURL: "http://localhost:3030/auth/google/callback",
        passReqToCallback: true
      },
      function(request,accessToken, refreshToken, profile, done) {
         done(null,request,
            );
      }
      ));
      passport.serializeUser((user, done) => {
        done(null, user);
      });
      
      passport.deserializeUser((user, done) => {
        done(null, user);
      });
}