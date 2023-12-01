const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    delete: deleteFlight
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
}

async function index(req, res){
    const flights = await Flight.find({});
    res.render('flights', {title: 'All Flights', flights})
}

async function show(req, res){
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find().where({flight: flight})
    res.render('flights/show', {title: `Flight Details`, flight, tickets})
}

async function deleteFlight(req, res){
    await Flight.deleteOne(Flight.findById(req.params.id));
    res.redirect('/flights');
}