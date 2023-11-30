var express = require('express');
var router = express.Router();

const flightsCtrl = require('../contollers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);

module.exports = router;
