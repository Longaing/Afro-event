// server/routes/admin.js
const express = require('express');
const { getTickets } = require('../controllers/ticketController');
const router = express.Router();

router.get('/tickets', requireAuth, getTickets);

function requireAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Non autorisé' });
}