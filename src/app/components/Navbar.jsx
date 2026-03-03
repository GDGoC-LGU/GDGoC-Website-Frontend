import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = ['home', 'about', 'team', 'hall-of-fame', 'events', 'sponsors', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
    { name: 'Events', href: '#events' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navBg = scrolled
    ? isDark
      ? 'rgba(15,15,16,0.96)'
      : 'rgba(255,255,255,0.96)'
    : 'transparent';

  const navBorder = scrolled
    ? isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)'
    : '1px solid transparent';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: navBg,
        borderBottom: navBorder,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div style={{ display: 'flex', gap: 4 }}>
              {['#EA4335', '#FBBC05', '#34A853', '#4285F4'].map((c, i) => (
                <motion.div
                  key={i}
                  style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 18,
              color: scrolled ? 'var(--text-primary)' : '#ffffff',
              transition: 'color 0.3s',
            }}>
              GDCoC LGU
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    position: 'relative',
                    padding: '6px 14px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans)',
                    color: scrolled
                      ? isActive ? '#4285F4' : 'var(--text-secondary)'
                      : isActive ? '#FBBC05' : 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: -2, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20, height: 2, borderRadius: 1,
                        background: scrolled ? '#4285F4' : '#FBBC05',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                marginLeft: 8,
                width: 36, height: 36,
                borderRadius: '50%',
                border: scrolled
                  ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                  : '1px solid rgba(255,255,255,0.2)',
                background: scrolled
                  ? isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'
                  : 'rgba(255,255,255,0.1)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: scrolled ? 'var(--text-primary)' : '#ffffff',
                transition: 'all 0.3s',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="show-mobile">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: scrolled ? 'var(--text-primary)' : '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4,
              }}
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: isDark ? 'rgba(15,15,16,0.98)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: `1px solid var(--border-color)`,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 24px 20px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: 10,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}