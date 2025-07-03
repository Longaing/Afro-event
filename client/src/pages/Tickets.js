import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Tickets.css';

const Tickets = () => {
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('early');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      { email, ticketType },
      'YOUR_USER_ID'
    )
    .then(() => {
      setSubmitMessage('Votre réservation a été enregistrée!');
      setEmail('');
      setIsSubmitting(false);
    })
    .catch(() => {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className="tickets-page">
      <section className="tickets-hero">
        <h1>Tarifs</h1>
        <h2>Réservez maintenant</h2>
      </section>

      <section className="ticket-options">
        <div className={`ticket-card ${ticketType === 'early' ? 'selected' : ''}`} onClick={() => setTicketType('early')}>
          <h3>Early</h3>
          <p className="price">€15</p>
          <ul>
            <li>✓ Entrée simple</li>
            <li>✓ Accès avant 23h</li>
            <li>✓ Un soft offert</li>
          </ul>
        </div>

        <div className={`ticket-card ${ticketType === 'standard' ? 'selected' : ''}`} onClick={() => setTicketType('standard')}>
          <h3>Standard</h3>
          <p className="price">€20</p>
          <ul>
            <li>✓ Accès toute la nuit</li>
            <li>✓ 1 boisson offerte</li>
            <li>✓ Cadeau surprise</li>
          </ul>
        </div>

        <div className={`ticket-card ${ticketType === 'vip' ? 'selected' : ''}`} onClick={() => setTicketType('vip')}>
          <h3>VIP</h3>
          <p className="price">€35</p>
          <ul>
            <li>✓ Accès VIP</li>
            <li>✓ Espace privé</li>
            <li>✓ Photo souvenir</li>
          </ul>
        </div>
      </section>

      <section className="reservation-form">
        <h3>Ne ratez pas. Réservation ouverte.</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Réserver'}
          </button>
        </form>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </section>
    </div>
  );
};

export default Tickets;