const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['BOS', 'AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date
}, {
    timestamps: true
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String, 
        enum: ['Southwest', 'United', 'Delta', 'American', 'Spirit']
    },
    airport: {
        type: String, 
        enum: ['BOS', 'AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'BOS'
    },
    flightNo: {
        type: Number,
        min: 10, max: 9999
    },
    departs: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);