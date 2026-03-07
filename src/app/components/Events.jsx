import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FiCalendar, FiClock, FiMapPin, FiZap } from 'react-icons/fi';
import { eventsData } from '../data/eventsData';

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="events"
      ref={ref}
      style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 12,
          }}>
            Upcoming{' '}
            <span style={{
              background: 'linear-gradient(135deg, #EA4335, #FBBC05, #34A853)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Events
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
            Join us for exciting workshops, hackathons, and tech talks
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #EA4335, #34A853)', margin: '16px auto 0', borderRadius: 2 }} />
        </motion.div>

        {eventsData.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {eventsData.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ scale: 1.01, boxShadow: '0 20px 64px var(--shadow-lg)' }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 24, overflow: 'hidden',
                  display: 'flex', flexWrap: 'wrap',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  transition: 'all 0.3s',
                  position: 'relative',
                }}
              >
                {/* Top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
                  zIndex: 2,
                }} />

                {/* Image */}
                <div style={{ flex: '0 0 min(40%, 300px)', position: 'relative', overflow: 'hidden', minHeight: 240, backgroundColor: 'var(--bg-tertiary)' }}>
                  <motion.img
                    src={event.image} alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute', top: 16, left: 16,
                      background: 'var(--bg-card)',
                      borderRadius: 14, overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC05)', padding: '8px 14px', textAlign: 'center' }}>
                      <FiCalendar color="#fff" size={16} style={{ margin: '0 auto' }} />
                    </div>
                    <div style={{ padding: '8px 14px', textAlign: 'center', fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
                      {event.date?.split(',')[0]}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div style={{ flex: '1 1 280px', padding: '32px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 800,
                    color: 'var(--text-primary)', marginBottom: 12,
                    fontFamily: 'var(--font-display)',
                  }}>
                    {event.title}
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24, fontFamily: 'var(--font-sans)' }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                    {[
                      { icon: FiMapPin, label: 'Venue', val: event.venue, color: '#4285F4' },
                      { icon: FiCalendar, label: 'Date', val: event.date, color: '#EA4335' },
                      { icon: FiClock, label: 'Time', val: event.time, color: '#FBBC05' },
                      { icon: FiZap, label: 'Duration', val: event.duration, color: '#34A853' },
                    ].map(({ icon: Icon, label, val, color }, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 10,
                          backgroundColor: `${color}15`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, color,
                        }}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>{label}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>{val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(66,133,244,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      alignSelf: 'flex-start',
                      padding: '12px 28px',
                      background: 'linear-gradient(135deg, #4285F4, #34A853)',
                      color: '#fff', border: 'none', borderRadius: 100,
                      fontSize: 14, fontWeight: 700, cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            style={{ textAlign: 'center', padding: '80px 24px' }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ fontSize: 72, marginBottom: 24 }}
            >
              📅
            </motion.div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12, fontFamily: 'var(--font-display)' }}>
              Stay tuned! Exciting events coming soon 🚀
            </h3>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
              We're planning amazing workshops and hackathons for you
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}