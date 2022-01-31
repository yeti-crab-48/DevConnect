//Controller middleware for path: /api/user

/*--------importing our database-------------*/
const db = require('../models/yetiCrabdb.js');


/*---------importing our hidden JWT essentials----------------*/
require('dotenv').config({path: '../.env'})


/*--------security and authentication----------*/

//importing npm packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//function to encrypt account password to improve security when signing up
function encrypt(password) {
  const workFactor = 10;
  return bcrypt.hash(password, workFactor)
}
/*--------------------------------------------*/


/*--------JSON WEB TOKENS---------*/

//jwt token created when user logs in or signs up
function generateToken(id) {
  return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: '2h'});
}
//refresh token currently not being used
function generateRefreshToken(id) {
  return jwt.sign(id, process.env.JWT_REFRESH);
}



/*-----------Exports-------------*/
module.exports = {

  //middleware for /api/user/login, it will find the record in the User Table and go to the next middleware if successful
  login(req, res, next) {
    console.log('ping', req.body);
    const {username, password} = req.body;
    const queryEntry = `
      SELECT * FROM Users
      WHERE username = $1
    `
    db.query(queryEntry, [username], (err, result) => {
      if(err) {
        return next(err);
      }
      if(result.rows.length === 0){
        return next({code: 1});
      }
      const { password: hashedPassword, id } = result.rows[0];
      bcrypt.compare(password, hashedPassword, (err, bcryptRes) => {
        if(bcryptRes){
          res.locals.user_id = id;
          return next();
        } else {
          return next({code: 1});
        }
      })
    });
  },


  //middleware for /api/user/signup, it will create a new record in user Table if username is unique and redirect to homepage '/'
  signUp(req, res, next) {
    const queryEntry = 
      `INSERT INTO Users(username, password)
      VALUES($1, $2)
      RETURNING id`;
      encrypt(req.body.password).then(hash => {
        db.query(queryEntry, [req.body.username, hash], (err, result) => {
          if(err) {
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
    return next();
  },


  //middleware to check the jwtToken sent through as cookie and authorize the user
  auth(req, res, next) {
    jwt.verify(req.cookies.jwtToken, process.env.JWT_SECRET, (err, decoded) => {
      if(decoded) {
        return next();
      } else {
        return next({code: 1});
      }
    })
  }
}