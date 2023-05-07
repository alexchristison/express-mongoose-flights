// const Flight = require('../models/flight');
// first we bring in the mongoose module
const mongoose = require('mongoose')

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

// now we'll create our schema
// this schema will serve as teh blueprint for our model 
// we define the properties (aka paths) and assign data types to those properties
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
        // default: () => {
        //     const oneYearFromNow = newDate();
        //     oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() +1);
        //     return oneYearFromNow;
        // }
}, {
    timestamps: true
});

// we want to compile our schema into a model 
// we also want to export our model 
// and we cna do that in one line
// we call the model method from the mongoose object
// the model method takes two arguments
// the first is the NAME we want to use to refer to the model, CAPITALIZED
// the second is the schema to use to create the model 
module.exports = mongoose.model('Flight', flightSchema);