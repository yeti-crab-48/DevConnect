//Contains all our endpoints when the url is /api/
const express = require('express');
const router = express.Router();

//Controllers
const apiController = require('../controllers/apiController.js')

//Routers
const userRouter = require('./userRouter.js');
const listingsRouter = require('./listingsRouter.js');

//when the url path is /api/user, go into the userRouter.js in routes folder
router.use('/user', userRouter); 

//when the urlpath is /api/listings, go into the listingsRouter.js in routes folder
router.use('/listings', listingsRouter); 


//post request when client submits a 'post' form 
router.post('/createpost', apiController.createPost, (req, res) => {
  res.end('/api/createpost');
});

module.exports = router;