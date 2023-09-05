
const passport =  require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.Google_Client_Id,
    clientSecret: process.env.Google_Client_secret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
},
    function(req, accessToken, refreshToken, user, done){
        done(null, user);
    }
))

passport.serializeUser((user, done)=>{
        done(null, user)
})

passport.deserializeUser((user, done)=>{
        done((null, user))
})
module.exports = passport;