//Controller middleware for path: /api/user

module.exports = {
  //middleware for /api/user/login, it will find the record in the db user Table and go to the next middle if it is found, if not then redirect to signup
  login(req, res, next) {
    console.log('login controller');
    next();
  },
  //middleware for /api/user/signup, it will create a new record in user Table if username is unique and redirect to homepage
  signUp(req, res, next) {
    console.log('singUp controller');
    next();
  }
}