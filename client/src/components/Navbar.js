import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHome, 
  FiCalendar, 
  FiUsers, 
  FiDollarSign, 
  FiMapPin,
  FiMenu,
  FiX
} from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <h1>ENTREPRENDRE AFRO</h1>
              <p>Talents et inspiration</p>
            </Link>
          </div>

          <div className={`navbar-links ${mobileOpen ? 'active' : ''}`}>
            <NavLink to="/" icon={<FiHome />} text="Accueil" closeMenu={() => setMobileOpen(false)} />
            <NavLink to="/programme" icon={<FiCalendar />} text="Programme" closeMenu={() => setMobileOpen(false)} />
            <NavLink to="/intervenants" icon={<FiUsers />} text="Intervenants" closeMenu={() => setMobileOpen(false)} />
            <NavLink to="/tarifs" icon={<FiDollarSign />} text="Tarifs" closeMenu={() => setMobileOpen(false)} />
            <NavLink to="/lieu" icon={<FiMapPin />} text="Lieu" closeMenu={() => setMobileOpen(false)} />
            
            <button className="navbar-cta-mobile">
              Réserver
            </button>
          </div>

          <button className="navbar-cta">
            Réserver
          </button>

          <button 
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Overlay mobile */}
      {mobileOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

const NavLink = ({ to, icon, text, closeMenu }) => (
  <Link to={to} className="nav-link" onClick={closeMenu}>
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;