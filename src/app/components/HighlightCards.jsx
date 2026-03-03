import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FiTarget, FiEye, FiHeart, FiTrendingUp } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function HighlightCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { isDark } = useTheme();

  const cards = [
    {
      icon: FiTarget, title: 'Mission', color: '#4285F4',
      description: 'Empower students with cutting-edge developer skills through hands-on workshops, events, and mentorship programs.',
    },
    {
      icon: FiEye, title: 'Vision', color: '#EA4335',
      description: 'Build the most innovative and collaborative developer community in the region, producing tech leaders of tomorrow.',
    },
    {
      icon: FiHeart, title: 'Values', color: '#FBBC05',
      description: 'Innovation, Collaboration, Inclusivity, Excellence, and Continuous Learning guide everything we do.',
    },
    {
      icon: FiTrendingUp, title: 'Impact', color: '#34A853',
      description: 'Over 500 students empowered, 100+ projects launched, and countless careers transformed through our programs.',
    },
  ];

  return (
    <section
      ref={ref}
      style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 12,
          }}>
            Why Join{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4285F4, #EA4335)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              GDGoC LGU
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
            Discover what makes our community special
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 48 }}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 20px 48px ${card.color}20` }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 20, padding: '28px 24px',
                  transition: 'all 0.3s', cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 80, height: 80,
                  background: `radial-gradient(circle at bottom right, ${card.color}12, transparent)`,
                }} />
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  style={{
                    width: 52, height: 52, borderRadius: 14, marginBottom: 18,
                    backgroundColor: `${card.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: card.color, fontSize: 24,
                  }}
                >
                  <Icon />
                </motion.div>
                <h3 style={{
                  fontSize: 20, fontWeight: 800, color: card.color,
                  marginBottom: 10, fontFamily: 'var(--font-display)',
                }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(66,133,244,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #4285F4, #34A853)',
              color: '#ffffff', borderRadius: 100, border: 'none',
              fontSize: 15, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            Meet Our Amazing Team
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}