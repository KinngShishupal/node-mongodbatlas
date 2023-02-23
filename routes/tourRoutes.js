const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  checkID,
  checkBodyMiddleware,
} = require('../controllers/tourController');
const router = express.Router();

// param middleware that runs when certain parameter is there in route
// here it is used to validate the received id paramater
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBodyMiddleware, createTour);
router.get('/:id', getTour);

module.exports = router;
