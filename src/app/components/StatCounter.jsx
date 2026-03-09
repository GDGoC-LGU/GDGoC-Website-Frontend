import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FiUsers, FiCalendar, FiShield } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const StatCounter = ({ targetValue, label, icon: Icon, color, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const springValue = useSpring(0, { stiffness: 35, damping: 18 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (isInView) springValue.set(targetValue);
  }, [isInView, springValue, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '36px 24px', borderRadius: 20,
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 24px var(--shadow-color)',
        transition: 'box-shadow 0.3s, transform 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${color}, transparent)`,
      }} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        style={{
          marginBottom: 16, padding: 14, borderRadius: 16,
          backgroundColor: `${color}18`,
          color: color, fontSize: 28,
        }}
      >
        <Icon />
      </motion.div>

      {/* Number */}
      <div style={{
        fontSize: 'clamp(36px, 4vw, 52px)',
        fontWeight: 900,
        fontFamily: 'var(--font-display)',
        color: color,
        lineHeight: 1,
        marginBottom: 8,
        display: 'flex', alignItems: 'baseline', gap: 2,
      }}>
        <motion.span>{displayValue}</motion.span>
        <span style={{ fontSize: '0.6em' }}>+</span>
      </div>

      {/* Label */}
      <p style={{
        fontSize: 11, fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        textAlign: 'center',
        marginTop: 4,
      }}>
        {label}
      </p>
    </motion.div>
  );
};

export default function CountdownSection() {
  const { isDark } = useTheme();
  const stats = [
    { id: 1, label: 'Community Members', value: 1250, icon: FiUsers, color: '#4285F4' },
    { id: 2, label: 'Successful Events', value: 45, icon: FiCalendar, color: '#EA4335' },
    { id: 3, label: 'Core Team Members', value: 15, icon: FiShield, color: '#34A853' },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
            marginBottom: 16,
          }}>
            Our Growing{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FBBC05, #EA4335, #4285F4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Impact
            </span>
          </h2>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #4285F4, #FBBC05)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.id}
              targetValue={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}