//Contains all our endpoints when the url is /api/listings
const express = require('express');
const router = express.Router();

//Controller
const listingsController = require('../controllers/listingsController.js');
const userController = require('../controllers/userController.js');

//get request made when client is in the homepage, end result is sending a JSON of all the listings
router.get('/', userController.auth, listingsController.populate, (req, res) => {
  res.end('/api/listings');
});

//get request made when one of the listings is clicked, end result is sending a specific JSON of the clicked listing
router.get('/:id', listingsController.popUp, (req, res) => {
  res.end('/api/listings/' + req.params.id);
});

router.delete('/:id', listingsController.delete, (req, res) => {
  res.end('/api/listings');
});

module.exports = router;