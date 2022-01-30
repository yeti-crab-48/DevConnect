//Contains all our endpoints when the url is /api/listings
const express = require('express');
const router = express.Router();

//Controller
const listingsController = require('../controllers/listingsController.js');
const userController = require('../controllers/userController.js');

//get request made when client is in the homepage, end result is sending a JSON of all the listings
router.get('/', userController.auth, listingsController.populate, (req, res) => {
  res.json(res.locals.posts);
});

//get request made when one of the listings is clicked, end result is sending a specific JSON of the clicked listing
router.get('/:id', userController.auth, listingsController.popUp, (req, res) => {
  res.json(res.locals.post);
});
//delete request made when delete button is clicked, end result is file being deleted from database
router.delete('/:id', userController.auth, listingsController.delete, (req, res) => {
  res.json(res.locals.deletedPost);
});

module.exports = router;