const express = require('express')
const router = express.Router()
const destinationCtrl = require('../controllers/destinations')

router.post('/:flightId', destinationCtrl.create)

module.exports = router