import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Entreprendre Afro</h1>
          <p>Talents et inspiration</p>
        </Link>
        <div className="navbar-links">
          <Link to="/programme">Programme</Link>
          <Link to="/intervenants">Intervenants</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/lieu">Lieu</Link>
        </div>
        <button className="navbar-cta">Réserver</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;