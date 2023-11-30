const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

async function newFlight(req, res){
    res.render('flights/new', {title: 'Add New Flight',})
}

async function create(req, res){
    if (req.body.departs === ''){
        const dt = new Date();
        let departsDate = `${(dt.getFullYear())+1}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
        departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`
        req.body.departs = departsDate
    }
    try{
        await Flight.create(req.body);
        res.redirect('/flights')
    } catch(err){
        console.log(err);
        res.render('flights/new', {title: 'Add New Flight'})
    }
    console.log(req.body)
}

async function index(req, res){
    const flights = await Flight.find({});
    res.render('flights', {title: 'All Flights', flights})
}