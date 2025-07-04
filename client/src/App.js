import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Program from './pages/Program.js';
import Speakers from './pages/Speakers';
import Tickets from './pages/Tickets';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/main.css';
import Homepage from './pages/Homepage.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/programme" element={<Program />} />
        <Route path="/intervenants" element={<Speakers />} />
        <Route path="/tarifs" element={<Tickets />} />
        <Route path="/lieu" element={<Location />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;