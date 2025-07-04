const Ticket = require('../models/Ticket');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a ticket reservation
exports.createTicket = async (req, res) => {
  try {
    const { email, type } = req.body;
    
    const ticket = new Ticket({
      email,
      type
    });

    await ticket.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre réservation',
      text: `Merci pour votre réservation ${type} pour Entreprendre Afro.`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: ticket
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// Get all tickets (admin only)
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

exports.createPaymentIntent = async (req, res) => {
  const { amount } = req.body;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convertir en centimes
    currency: 'eur',
  });

  res.send({ clientSecret: paymentIntent.client_secret });
};