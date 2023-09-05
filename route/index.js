const express = require('express');
const routes = express.Router();
const passport = require('passport');
require('../controller/auth')

function isLoggedIn (req, res, next){
    req.user ? next() : res.sendStatus(401)
}

routes.get('/auth/google/success', isLoggedIn, (req, res)=>{
    console.log("ok")
    res.send('Nothing')
})

routes.get('/auth/google/failure', (req, res)=>{
    res.send('Nothing Happened')
})

routes.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

routes.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

module.exports = routes;