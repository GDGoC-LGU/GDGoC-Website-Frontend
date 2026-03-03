import { useRef } from 'react';
import { Users, Rocket, BookOpen, Target } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: <Users size={24} />,
      title: 'Community Driven',
      description: 'Connect with passionate students and build lasting relationships',
      color: '#4285F4',
      bg: isDark ? 'rgba(66,133,244,0.1)' : 'rgba(66,133,244,0.07)',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Build & Ship',
      description: 'Create real-world projects with cutting-edge Google technologies',
      color: '#EA4335',
      bg: isDark ? 'rgba(234,67,53,0.1)' : 'rgba(234,67,53,0.07)',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Learn & Grow',
      description: 'Access expert-led workshops and hands-on training sessions',
      color: '#FBBC05',
      bg: isDark ? 'rgba(251,188,5,0.1)' : 'rgba(251,188,5,0.07)',
    },
    {
      icon: <Target size={24} />,
      title: 'Make Impact',
      description: 'Solve real problems and contribute to meaningful solutions',
      color: '#34A853',
      bg: isDark ? 'rgba(52,168,83,0.1)' : 'rgba(52,168,83,0.07)',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
            fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
            marginBottom: 16,
          }}>
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FBBC05, #EA4335, #4285F4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>GDGoC</span>
          </h2>
          <p style={{
            fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560,
            margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-sans)',
          }}>
            Google Developer Groups on Campus brings together students passionate about
            technology, innovation, and creating meaningful impact through collaboration.
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #FBBC05, #EA4335, #4285F4)', margin: '20px auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20, marginBottom: 80,
        }}>
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${item.color}20` }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 20,
                padding: '28px 24px',
                transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 60, height: 60,
                background: `radial-gradient(circle at top right, ${item.color}15, transparent)`,
              }} />
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                style={{
                  width: 48, height: 48, borderRadius: 14,
                  backgroundColor: item.bg,
                  color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                {item.icon}
              </motion.div>
              <h3 style={{
                fontSize: 17, fontWeight: 700, color: 'var(--text-primary)',
                marginBottom: 8, fontFamily: 'var(--font-sans)',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {[
              {
                title: 'Our Mission',
                text: 'To empower students with knowledge, tools, and community support needed to build innovative solutions using Google technologies. We foster a culture of continuous learning and collaboration.',
                color: '#4285F4',
              },
              {
                title: 'Our Vision',
                text: 'Creating a vibrant ecosystem where students can explore, experiment, and excel in technology. We envision a future where every member becomes a skilled developer and change-maker.',
                color: '#34A853',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 4, height: 28, borderRadius: 2, backgroundColor: item.color }} />
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontFamily: 'var(--font-sans)', paddingLeft: 16 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Activity cards */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 24, padding: 32,
              boxShadow: '0 8px 32px var(--shadow-color)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { emoji: '🎯', title: 'Weekly Workshops', desc: 'Interactive learning sessions every week', color: '#4285F4' },
                { emoji: '🚀', title: 'Hackathons', desc: 'Build amazing projects in competitive events', color: '#EA4335' },
                { emoji: '🤝', title: 'Networking', desc: 'Connect with industry professionals', color: '#34A853' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '16px 20px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 14, border: '1px solid var(--border-color)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    backgroundColor: `${item.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {item.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}