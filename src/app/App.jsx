import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatCounter from './components/StatCounter';
import { About } from './components/About';
import HighlightCards from './components/HighlightCards';
import Team from './components/Team';
import HallOfFame from './components/HallOfFame';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "../styles/globals.css";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Navbar />
        <Hero />
        <StatCounter />
        <About />
        <HighlightCards />
        <Team />
        <HallOfFame />
        <Events />
        <Sponsors />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}