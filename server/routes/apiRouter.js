//Contains all our endpoints when the url is /api/
const express = require('express');
const router = express.Router();

//Controllers
const apiController = require('../controllers/apiController.js');
const userController = require('../controllers/userController.js');


//Routers
const userRouter = require('./userRouter.js');
const listingsRouter = require('./listingsRouter.js');

//when the url path is /api/user, go into the userRouter.js in routes folder
router.use('/user', userRouter); 

//when the urlpath is /api/listings, go into the listingsRouter.js in routes folder
router.use('/listings', listingsRouter); 


//post request when client submits a 'post' form 
router.post('/createpost', userController.auth, apiController.createPost, (req, res) => {
  // res.json(res.locals.post);
  res.json({postSuccess: true});
});

module.exports = router;