import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import HighlightCards from './components/HighlightCards';
import Team from './components/Team';
import HallOfFame from './components/HallOfFame';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatCounter from './components/StatCounter';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatCounter/>
      <About />
      <HighlightCards />
      <Team />
      <HallOfFame />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
