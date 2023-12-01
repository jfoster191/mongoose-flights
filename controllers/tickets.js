const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket (req, res){
    const flight = await Flight.findById(req.params.flightId)
    const tickets = await Ticket.find({}).where({flight: flight}).sort('price');
    res.render('tickets/new', {title: 'Add New Ticket', tickets, flight});
}

async function create (req, res){
    const URL = req.header('Referer')
    const id = URL.slice(30,54)
    try{
        await Ticket.create(req.body);
    } catch(err){
        console.log(err);
    }
    res.redirect(`/flights/${id}`);
    addFlightToTicket(req, res, id);
}

async function addFlightToTicket(req, res, id){
    const flightId = await Flight.findById(id)
    const ticket = await Ticket.find().sort({_id: -1})
    const lastTicket = ticket[0];
    lastTicket.flight = flightId;
    await lastTicket.save();
}