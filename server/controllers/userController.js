//Controller middleware for path: /api/user

//requiring our db
const db = require('../models/yetiCrabdb.js');
const bcrypt = require('bcrypt');

// bcrypt.hash
// bcrypt.compare
const workFactor = 10;

//function to encrypt account password to improve security when signing up
function encrypt(password) {
  return bcrypt.hash(password, workFactor)
}


module.exports = {
  //middleware for /api/user/login, it will find the record in the db user Table and go to the next middle if it is found, if not then redirect to signup
  login(req, res, next) {
    req.body
    console.log('login controller');
    next();
  },
  //middleware for /api/user/signup, it will create a new record in user Table if username is unique and redirect to homepage
  signUp(req, res, next) {
    const queryEntry = `
      INSERT INTO Users(username, password)
      VALUES($1, $2)`;
      encrypt(req.body.password).then(hash => {
        console.log(typeof hash);
        db.query(queryEntry, [req.body.username, hash], (err, result) => {
          if(err) {
            console.log('errr: ', err.message);
            next(err)
          }
          return next();
        });
      });
  }
}