//Controller middleware for path: /api/listings

//requiring our db
const db = require('../models/yetiCrabdb.js');

module.exports = {
  //will send the data of all current listings from db to frontend to populate the board when client logs in after component mounts
  populate(req, res, next) {
    console.log('populate Controller');
    next();
  },
  //will send data from db listings table of the specific clicked listing to frontend to pop out
  popUp(req, res, next) {
    console.log('popUp Controller');
    next();
  },
  //will delete the record in db listings table
  delete(req, res, next) {
    console.log('delete Controller');
    next();
  }
}