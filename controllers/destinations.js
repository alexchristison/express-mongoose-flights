const Flight = require('../models/flight');

function create(req, res) {
    // we need to find the flight
    Flight.findById(req.params.flightId)
        .then(flightDoc => {
            // then push the review into that flight's destnations array
            flightDoc.destinations.push(req.body)
            // save the movie
            return flightDoc.save()
        })
        .then(flightDoc => {
            // redirect to the flight show page
            res.redirect(`/flights/${flightDoc._id}`)
        })
        // if there is an error, handle it 
        .catch(err => {
            console.log('this is the error in review create\n', err)

            res.send(err)
        })
}

// last we need to export our controller functions

module.exports = {
    create
}
