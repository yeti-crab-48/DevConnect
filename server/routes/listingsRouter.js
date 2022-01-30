/*------ Routing when path is /api/listings --------*/
//express import and router
const express = require('express');
const router = express.Router();

/*--------------importing Controllers ---------------*/
//listingsController will deal with querying our database 
const listingsController = require('../controllers/listingsController.js');
//userController deals with authentication
const userController = require('../controllers/userController.js');

//GET request made when client is in the homepage, end result is sending a JSON of all the records in Post Table
router.get('/', userController.auth, listingsController.populate, (req, res) => {
  res.json(res.locals.posts);
});

//GET request made when one of the listings is clicked, end result is sending a JSON of a specific record in Post Table that was clicked
router.get('/:id', userController.auth, listingsController.popUp, (req, res) => {
  res.json(res.locals.post);
});

//DELETE request made when delete button is clicked on a specific listing, end result is file being deleted from database and returning the deleted record as JSON
router.delete('/:id', userController.auth, listingsController.delete, (req, res) => {
  res.json(res.locals.deletedPost);
});

module.exports = router;