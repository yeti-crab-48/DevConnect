//Controller middleware for path: /api

/*--------importing our db ---------------*/
const db = require('../models/yetiCrabdb.js');

/*---------importing npm package----------*/ 
const jwt = require('jsonwebtoken');


/*-----------Exports------------*/
module.exports = {
  //will insert a new record into the db Post Table matching all the info from the submitted form
  createPost(req, res, next) {
    const queryEntry=
    `INSERT INTO Post (numapplicant, title, body, created_at, contact, skills, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;
    const {id: user_id} = jwt.decode(req.cookies.jwtToken, process.env.JWT_SECRET);
    const {title, body, contact, skills} = req.body;
    db.query(queryEntry, [0, title, body, new Date().toLocaleString(), contact, skills, user_id], (err, result) => {
      if(err) {
        return next({code: 2});
      }
      res.locals.post = result.rows[0]
      return next();
    });
  }
};