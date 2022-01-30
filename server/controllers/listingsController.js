//Controller middleware for path: /api/listings

/*------ importing our database ---------------*/
const db = require('../models/yetiCrabdb.js');



/*-----------Exports-------------*/
module.exports = {

  //will send the data of all current listings from db to frontend to populate the board when client logs in after component mounts
  populate(req, res, next) {
    const queryEntry = 
    `SELECT * FROM Post`;
    db.query(queryEntry, (err, result) => {
      if(err) {
        return next({code: 2});
      }
      res.locals.posts = result.rows;
      return next();
    });
  },


  //will send data from db listings table of a specific listing(when clicked) to frontend to pop out
  popUp(req, res, next) {
    const queryEntry = 
    `SELECT * FROM Post
    WHERE id = $1`;
    console.log(req.params.id);
    db.query(queryEntry, [req.params.id], (err, result) => {
      if(err) {
        return next({code: 2});
      }
      res.locals.post = result.rows[0];
      return next();
    });
  },


  //will delete the record in db listings table
  delete(req, res, next) {
    const queryEntry =
    `DELETE FROM Post 
    WHERE id = $1
    RETURNING *`;
    console.log(req.params.id);
    db.query(queryEntry, [req.params.id], (err, result) => {
      console.log('delete');
      if(err) {
        console.log(err);
        return next({code: 2});
      }
      res.locals.deletedPost = result.rows[0]
      return next();
    });
  }
}