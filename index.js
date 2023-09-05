const express = require('express');
const app = express();
const session = require('express-session')
const passport = require('passport');
require('dotenv').config();


// For Parse the URL-encoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use(passport.initialize())
app.use(passport.session())

// The main route file path 

const route = require('./route/index');
app.use('/', route)

app.listen(3000, ()=>console.log(`The post is running on 4500`))





