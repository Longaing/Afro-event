import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Entreprendre Afro</h1>
          <h2>Talents et inspiration</h2>
          <button className="cta-button">Découvrir le programme</button>
        </motion.div>
      </section>

      <section className="program-preview">
        <h2>Sinestre</h2>
        <p>Programme</p>
        {/* Add program preview content */}
      </section>
    </div>
  );
};

export default Home;