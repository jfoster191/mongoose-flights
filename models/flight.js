const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    departs: Date
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);