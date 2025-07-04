import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin, 
  FiTwitter,
  FiMail,
  FiPhone
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="afro-footer">
      <div className="footer-container">
        {/* Colonne Gauche */}
        <div className="footer-column">
          <div className="footer-brand">
            <h3>ENTREPRENDRE AFRO</h3>
            <p>Talents et inspiration pour entrepreneurs afro-descendants</p>
          </div>
          
          <div className="footer-social">
            <h4>Réseaux sociaux</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne Droite */}
        <div className="footer-column">
          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li><Link to="/programme">Programme</Link></li>
              <li><Link to="/intervenants">Intervenants</Link></li>
              <li><Link to="/tarifs">Billetterie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <FiMail />
              <span>contact@entreprendre-afro.com</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>+33 6 12 34 56 78</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Palais de l'unité, Etoudi, Yaoundé</p>
        <Link to="/confidentialite">Politique de Confidentialité</Link>
      </div>
    </footer>
  );
};

export default Footer;