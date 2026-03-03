import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import {
  SiReact, SiFirebase, SiFlutter, SiGooglecloud,
  SiPython, SiNodedotjs, SiAndroid, SiTensorflow,
  SiGoogle, SiDart, SiKotlin
} from 'react-icons/si';

const FloatingIcon = ({ icon: Icon, color, x, y, delay, duration = 5, mobileHidden = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    style={{
      position: 'absolute',
      left: x, top: y,
      display: 'block',
      zIndex: 1,
    }}
    className={mobileHidden ? 'hero-icon-desktop' : ''}
  >
    {/* Floating wrapper — separate from the entrance animation */}
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
      transition={{
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
        x: { duration: duration * 1.4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
      }}
    >
      <div style={{ position: 'relative', padding: 10 }}>
        {/* Glow behind icon */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: color,
          borderRadius: '50%',
          filter: 'blur(14px)',
          opacity: 0.35,
        }} />
        <Icon style={{ color, fontSize: 38, position: 'relative', zIndex: 1, display: 'block' }} />
      </div>
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  const techStack = [
    { icon: SiGoogle,      color: '#4285F4', x: '8%',  y: '18%', delay: 0,   duration: 5.0 },
    { icon: SiFlutter,     color: '#54C5F8', x: '84%', y: '22%', delay: 0.8, duration: 6.2 },
    { icon: SiFirebase,    color: '#FFCA28', x: '10%', y: '68%', delay: 1.6, duration: 4.8 },
    { icon: SiAndroid,     color: '#3DDC84', x: '80%', y: '72%', delay: 1.2, duration: 5.6 },
    { icon: SiGooglecloud, color: '#4285F4', x: '74%', y: '44%', delay: 0.4, duration: 7.0 },
    { icon: SiReact,       color: '#61DAFB', x: '24%', y: '12%', delay: 2.4, duration: 5.4, mobileHidden: true },
    { icon: SiTensorflow,  color: '#FF6F00', x: '14%', y: '44%', delay: 2.0, duration: 6.8, mobileHidden: true },
    { icon: SiPython,      color: '#3776AB', x: '18%', y: '82%', delay: 3.2, duration: 4.5, mobileHidden: true },
    { icon: SiKotlin,      color: '#7F52FF', x: '87%', y: '12%', delay: 1.0, duration: 5.9, mobileHidden: true },
    { icon: SiDart,        color: '#0175C2', x: '89%', y: '58%', delay: 0.6, duration: 6.5, mobileHidden: true },
    { icon: SiNodedotjs,   color: '#339933', x: '68%', y: '86%', delay: 2.8, duration: 5.2, mobileHidden: true },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative', minHeight: '100vh', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#080810', overflow: 'hidden', color: '#ffffff',
      }}
    >
      {/* Multi-layer background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Mesh gradient blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-15%', left: '-15%',
            width: '55%', height: '55%',
            background: 'radial-gradient(circle, #4285F4 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '-15%', right: '-15%',
            width: '50%', height: '50%',
            background: 'radial-gradient(circle, #EA4335 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          style={{
            position: 'absolute', top: '30%', right: '20%',
            width: '35%', height: '35%',
            background: 'radial-gradient(circle, #FBBC05 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating icons */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {techStack.map((tech, i) => <FloatingIcon key={i} {...tech} />)}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax, position: 'relative', zIndex: 20 }}
        className="hero-content"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', maxWidth: 900, padding: '0 24px' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 32, marginTop: 80 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 20px',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 100,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.8)',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                backgroundColor: '#34A853',
                boxShadow: '0 0 8px #34A853',
                animation: 'pulse 2s infinite',
              }} />
              Empowering Campus Innovators
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(36px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontFamily: 'var(--font-display)',
              marginBottom: 28,
            }}
          >
            Google Developer Groups
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #4285F4 0%, #EA4335 40%, #FBBC05 70%, #34A853 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              on Campus
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 600, margin: '0 auto 48px',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Join the world's most vibrant student developer community.
            Build with Google technologies and connect with industry experts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(66,133,244,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '16px 32px',
                background: '#4285F4',
                color: '#ffffff',
                borderRadius: 14,
                border: 'none',
                fontSize: 16, fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'box-shadow 0.3s',
              }}
            >
              Join Community
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '16px 32px',
                background: 'rgba(255,255,255,0.07)',
                color: '#ffffff',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: 16, fontWeight: 600,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                fontFamily: 'var(--font-sans)',
                transition: 'background 0.3s',
              }}
            >
              <FiCalendar />
              Explore Events
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 120,
        background: 'linear-gradient(to top, #080810, transparent)',
        zIndex: 10,
      }} />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 20,
        }}
      >
        <p style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .hero-icon-desktop { display: none !important; }
        }
      `}</style>
    </section>
  );
}