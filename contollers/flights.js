const Flight = require('../models/flight');

module.exports = {
    new: newFlight
}

async function newFlight(req, res){
    res.render('flights/new', {title: 'Add New Flight'})
}