const express = require('express');
const path = require('path');
const { 
  createTicket,
  getTickets 
} = require(path.join(__dirname, '..', 'controllers', 'ticketController'));

const router = express.Router();

router.post('/', createTicket);
router.get('/', getTickets);

module.exports = router;