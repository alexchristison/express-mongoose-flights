const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights')

// GET flight create form
// this route is /flights/new
router.get('/new', flightCtrl.new);
// GET all flights
// this route is /flights
router.get('/', flightCtrl.index)
// POST flight creation 
// this rout is /flights
router.post('/', flightCtrl.create)

// GET an individual flight using the id
// /flights/<some flight id>
router.get('/:id', flightCtrl.show)

module.exports = router;
