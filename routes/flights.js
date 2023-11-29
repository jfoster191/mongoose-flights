var express = require('express');
var router = express.Router();

const flightsCtrl = require('../contollers/flights')

/* GET users listing. */
router.get('/new', flightsCtrl.new);

module.exports = router;
