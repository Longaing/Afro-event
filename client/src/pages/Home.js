import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Entreprendre Afro</h1>
        <p className="subtitle">Talents et inspiration</p>
      </header>

      <nav className="main-nav">
        <a href="/programme">Programme</a>
        <a href="/intervenants">Intervenants</a>
        <a href="/tarifs">Tarifs</a>
        <a href="/lieu">Lieu</a>
      </nav>

      <section className="program-section">
        <h2>Découvrir le programme</h2>
        <h3 className="program-title">Sincère</h3>
        <p className="program-description">Un programme authentique dédié à l'entrepreneuriat afro</p>
      </section>

      <footer>
        <p>© 2024 Afro Event</p>
      </footer>
    </div>
  );
};

export default Home;