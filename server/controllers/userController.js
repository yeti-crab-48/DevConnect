require('dotenv').config({path: '../.env'})
//Controller middleware for path: /api/user

//requiring our db
const db = require('../models/yetiCrabdb.js');

//security and authentication
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//function to encrypt account password to improve security when signing up
function encrypt(password) {
  const workFactor = 10;
  return bcrypt.hash(password, workFactor)
}


//JSON WEB TOKENS
function generateToken(id) {
  return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: '1h'});
}
function generateRefreshToken(id) {
  return jwt.sign(id, process.env.JWT_REFRESH);
}


module.exports = {
  //middleware for /api/user/login, it will find the record in the db user Table and go to the next middle if it is found, if not then redirect to signup
  login(req, res, next) {
    req.body
    next();
  },
  //middleware for /api/user/signup, it will create a new record in user Table if username is unique and redirect to homepage
  signUp(req, res, next) {
    const queryEntry = 
      `INSERT INTO Users(username, password)
      VALUES($1, $2)
      RETURNING id`;
      encrypt(req.body.password).then(hash => {
        db.query(queryEntry, [req.body.username, hash], (err, result) => {
          if(err) {
            console.log('err: ', err.message);
            return next(err);
          }
          res.locals.user_id = result.rows[0].id;
          return next();
        });
      });
  },
  //middleware to generate a session when user signs up or logs in
  genSession(req, res, next) {
    res.locals.token = generateToken(res.locals.user_id);
    res.locals.refreshToken = generateRefreshToken(res.locals.user_id);
    next();
  }
}