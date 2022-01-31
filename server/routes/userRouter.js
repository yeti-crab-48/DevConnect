/*------ Routing when path is /api/user --------*/
//express import and router
const express = require('express');
const router = express.Router();

/*------importing Controller for logging in/signing up---------*/
const userController = require('../controllers/userController.js');


//post request made when client logins into an account | path : /api/user/login
router.post('/login', userController.login, userController.genSession, (req, res) => {
  //our generated tokens being saved as a cookie
  res.cookie('jwtToken', res.locals.token, { httpOnly: true });
  // res.cookie('jwtRefreshToken', res.locals.refreshToken, { httpOnly: true });
  return res.json({success: true});
  
});

//post request made when client signs up for an account | path: /api/user/signup
router.post('/signup', userController.signUp, userController.genSession, (req, res) => {
  res.cookie('jwtToken', res.locals.token, { httpOnly: true });
  // res.cookie('jwtRefreshToken', res.locals.refreshToken, { httpOnly: true });
  return res.json({success: true});
});


router.get('/auth', userController.auth, (req, res) => {
  res.json({success: true});
})

module.exports = router;