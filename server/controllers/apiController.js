//Controller middleware for path: /api

module.exports = {
  //will insert a new record into the db Listings Table matching all the info from the submitted form
  createPost(req, res, next) {
    console.log('createPost middleware');
    next();
  }
};