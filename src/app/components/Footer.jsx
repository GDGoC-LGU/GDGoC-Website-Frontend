import { motion } from 'motion/react';
import { FiHeart, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Events', href: '#events' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: isDark ? '#080810' : '#f1f3f4',
      borderTop: '1px solid var(--border-color)',
      padding: '48px 0 32px',
      transition: 'background-color 0.3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, marginBottom: 32 }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#EA4335', '#FBBC05', '#34A853', '#4285F4'].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c }} />
              ))}
            </div>
            <span style={{
              fontWeight: 700, fontSize: 17,
              color: isDark ? '#e8eaed' : '#202124',
              fontFamily: 'var(--font-display)',
            }}>
              GDCoC LGU
            </span>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                whileHover={{ color: '#4285F4' }}
                style={{
                  padding: '6px 12px', borderRadius: 8,
                  fontSize: 14, fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none', fontFamily: 'var(--font-sans)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* GDG Badge */}
          <motion.a
            href="https://gdg.community.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 100,
              background: 'rgba(66,133,244,0.12)',
              border: '1px solid rgba(66,133,244,0.25)',
              color: '#4285F4', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', fontFamily: 'var(--font-sans)',
            }}
          >
            Google Developer Groups
            <FiExternalLink size={12} />
          </motion.a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border-color)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
            © {year} GDCoC LGU. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)' }}>
            Made with <FiHeart style={{ color: '#EA4335', fill: '#EA4335' }} size={13} /> by the GDGoC LGU Team
          </p>
        </div>
      </div>
    </footer>
  );
}