//Contains all our endpoints when the url is /api/user
const express = require('express');
const router = express.Router();

//Controllers
const userController = require('../controllers/userController.js');

//request made when client logins into an account
router.post('/login', userController.login, (req, res) => {
  res.end('/api/user/login');
});

//request made when client signs up for an account
router.post('/signup', userController.signUp, (req, res) => {
  res.end('/api/user/signup');
});

module.exports = router;