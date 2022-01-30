/*---------express imports----------*/
const express = require('express');
const router = express.Router();


/*---------controller imports--------*/
const apiController = require('../controllers/apiController.js');
const userController = require('../controllers/userController.js');

/*------------Routing when path is /api ----------------------*/
//router imports
const userRouter = require('./userRouter.js');
const listingsRouter = require('./listingsRouter.js');

//when the url path is /api/user, go into the userRouter.js in routes folder
router.use('/user', userRouter); 

//when the urlpath is /api/listings, go into the listingsRouter.js in routes folder
router.use('/listings', listingsRouter); 
/*--------------------------------------------*/


/*--------post request when client submits a 'post' form | Path: /api/createPost --------*/
router.post('/createpost', userController.auth, apiController.createPost, (req, res) => {
  /* res.json(res.locals.post); <---- Sends back the created post as JSON (currently not used) */

  //sends JSON back for frontend to redirect
  res.json({postSuccess: true});
});

module.exports = router;