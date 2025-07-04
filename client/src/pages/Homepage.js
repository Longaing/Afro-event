import React from 'react';
import '../styles/Homepage.css';
import { FiCalendar, FiUsers, FiDollarSign, FiMapPin, FiChevronRight } from 'react-icons/fi';

const Homepage = () => {
  return (
    <div className="afro-homepage">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ENTREPRENDRE AFRO</h1>
          <h2>Talents et inspiration</h2>
          <div className="hero-nav">
            <a href="/programme"><FiCalendar /> Programme</a>
            <a href="/intervenants"><FiUsers /> Intervenants</a>
            <a href="/tarifs"><FiDollarSign /> Tarifs</a>
            <a href="/lieu"><FiMapPin /> Lieu</a>
          </div>
        </div>
      </section>

      {/* Section Programme */}
      <section className="program-section">
        <div className="section-header">
          <h3>Découvrez notre programme</h3>
          <h2>SINESTRE</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">31 MAI 2025</div>
            <div className="timeline-content">
              <h4>1ER SALON BUSINESS</h4>
              <p>De la diaspora camerounaise d'Europe</p>
            </div>
          </div>
          
          <div className="timeline-item highlight">
            <div className="timeline-date">MONTRONGE</div>
            <div className="timeline-content">
              <h4>ROI DES BAMOUN</h4>
              <p>Nomfouom Mbombo Njoya & son équipe</p>
            </div>
          </div>
        </div>

        <button className="cta-button">
          Voir le programme complet <FiChevronRight />
        </button>
      </section>

      {/* Section Intervenants */}
      <section className="speakers-section">
        <h3>Nos personnalités historiques</h3>
        <div className="speakers-grid">
          <div className="speaker-card">
            <h4>Nomfouom Mbombo Njoya</h4>
            <p>Roi des Bamoun</p>
          </div>
          <div className="speaker-card">
            <h4>Mouhamed Nabil</h4>
            <p>Entrepreneur visionnaire</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;