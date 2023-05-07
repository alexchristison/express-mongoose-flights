const Flight = require('../models/flight');

function newFlight(req, res) {
  console.log('the new route has been hit');
  res.render('flights/new');
}

function create(req, res) {
  console.log('this is the req.body in create\n', req.body);

  Flight.create(req.body)
    .then(flightDoc => {
      console.log('=== below is the flight from the db');
      console.log(flightDoc);
      console.log('===============');

      return res.redirect(`/flights/${flightDoc.id}`);
    })
    .catch(err => {
      console.log('================err');
      console.log(err);
      console.log('================');

      return res.send('Error creating flight. Check the terminal.');
    });
}

function index(req, res) {
  Flight.find({})
    .then(flightDocs => {
      console.log('found all the flights\n', flightDocs);
      res.render('flights/index', { flights: flightDocs });
    })
    .catch(err => {
      console.log('================err');
      console.log(err);
      console.log('================');

      return res.send('Error finding flights. Check the terminal.');
    });
}

function show(req, res) {
  console.log('these are the request parameters\n', req.params);

  Flight.findById(req.params.id)
    .then(flight => {
      console.log('this is the flight in show\n', flight);

      res.render('flights/show', { flight: flight });
    })
    .catch(err => {
      console.log('=================err');
      console.log(err);
      console.log('====================');

      return res.send('Error finding flight. Check the terminal.');
    });
}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};



// ///////////////////////////////
// // Import Dependencies
// ///////////////////////////////
// // import the flight model
// const Flight = require('../models/flight')

// //////////////////////////////////////////////////////////////
// // Define our controller functions
// //////////////////////////////////////////////////////////////
// function newFlight(req, res) {
//     console.log('the new route has been hit');
//     res.render('flights/new')
// }
// function create(req, res) {
//     console.log('this is the req.body in create\n', req.body)
// }

// // the mongoose model method create adds a doument to the db
// //mongoose model method return a promise
// Flight.create(req.body)
//     .then(flightDoc => {
//         console.log('=== below is the flight from the db')
//         console.log('flightDoc')
//         console.log('===============')

//         return res.redirect(`/flights/${flightDoc.id}`)
//     })
//     .catch(err => {
//         console.log('================err')
//         console.log(err)
//         console.log('================')

//         return res.send('err creating, check the terminal')

//     })

// function index(req, res) {
//     // tell the model, find all the flights in the db
//     // send those flights back as a response
//     // sending as an empty object says 'find EVERYTHING'
//     Flight.find({})
//         .then(flightDocs => {
//             console.log('found all the flights\n', flightDocs)
        
//             res.render('flights/index', { flights: flightDocs})
//         })
//         .catch(err => {
//             console.log('================err')
//             console.log(err)
//             console.log('================')

//             return res.send('err creating, check the terminal')
//         })
// }

// function show(req, res) {
//     // we're going to use the model method findIdBy
//     // findIdBy take a mongDb id and finds the appropriate document
//     console.log('these are the reqest parameters\n', req.params)
//     Flight.findById(req.params.id)
//         .then(flight => {
//             console.log('this is the flight in show\n', flight)

//             res.render('flights/show', {flight: flight})
//         })
//         .catch(err => {
//             console.log('=================err')
//             console.log(err)
//             console.log('====================')

//             return res.send('err creating, check the terminal')
//         })
// }

// ///////////////////////////////
// // Export our modules
// ///////////////////////////////
// module.exports = {
//     new: newFlight,
//     create,
//     index,
//     show,
// }



