const express = require('express')
const router = express.Router()
const destinationCtrl = require('../controllers/destinations')

// router.get('/:flightId/new', destinationCtrl.newDestination)

// destinations/:flightId
// router.post('/:flightId', destinationCtrl.create)
// router.post ('/flights/:id/destinations', destinationCtrl.create)
router.post('/flights/:id/destinations', destinationCtrl.create)

module.exports = router