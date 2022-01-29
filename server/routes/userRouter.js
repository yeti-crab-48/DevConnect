//Contains all our endpoints when the url is /api/user
const express = require('express');
const router = express.Router();

//Controllers
const userController = require('../controllers/userController.js');

//request made when client logins into an account
router.post('/login', userController.login, userController.genSession, (req, res) => {
  res.cookie('jwtToken', res.locals.token, { httpOnly: true });
  res.cookie('jwtRefreshToken', res.locals.refreshToken, { httpOnly: true });
  res.redirect('/')
  
});

//request made when client signs up for an account
router.post('/signup', userController.signUp, userController.genSession, (req, res) => {
  res.cookie('jwtToken', res.locals.token, { httpOnly: true });
  res.cookie('jwtRefreshToken', res.locals.refreshToken, { httpOnly: true });
  res.redirect('/');
});

module.exports = router;