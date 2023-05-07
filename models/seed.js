///////////////////////////////
// Import Dependencies
///////////////////////////////
require('dotenv').config()
const mongoose = require('../config/database')
const Flight = require('./flight')
mongoose.connect(process.env.DATABASE_URL)
///////////////////////////////
// Seed Script Code
///////////////////////////////
// save the connection in a variable
const db = mongoose.connection
// console.log('db in seed file', db)

db.on('open', () => {
    // start with an array of flights
    const startFlights = [
        {
            airline: 'American',
            airport: 'DEN',
            flightNo: 123,
            departs: 8/7/2023,

        }, 
        {
            airline: 'United',
            airport: 'LAX',
            flightNo: 456,
            departs: 12/24/2023,

        },
    ]
    // when we seed data, we want to delete everything in the database in that collection
    // this avoids dupilicates
    Flight.deleteMany({})
        .then(deletedFlights => {
            console.log('this is what deleteMany returns', deletedFlights)
            // after that we run a cerate to insert those documents into the db
            Flight.create(startFlights)
            .then(data => {
                console.log('this is what was created', data)
                db.close()
            })
            .catch(err => {
                console.log(err)
                db.close()
            })
        })
    })