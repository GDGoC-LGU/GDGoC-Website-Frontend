import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FiAward, FiTrendingUp } from 'react-icons/fi';
import { memberOfTheMonth, hallOfFameMembers } from '../data/hallOfFameData';

export default function HallOfFame() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="hall-of-fame"
      ref={ref}
      style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s' }}
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
            Hall of{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FBBC05, #EA4335, #4285F4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Fame
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto 16px', fontFamily: 'var(--font-sans)' }}>
            Celebrating our most outstanding members and their incredible contributions
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #FBBC05, #EA4335)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>

        {/* Member of Month - Featured */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 800, margin: '0 auto 72px', position: 'relative' }}
        >
          {/* Gradient border wrapper */}
          <div style={{
            background: 'linear-gradient(135deg, #FBBC05, #EA4335, #4285F4, #34A853)',
            borderRadius: 26, padding: 2,
          }}>
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 24, padding: '40px 40px',
            }}>
              {/* Badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                <motion.span
                  animate={{ boxShadow: ['0 0 20px rgba(251,188,5,0.2)', '0 0 40px rgba(251,188,5,0.4)', '0 0 20px rgba(251,188,5,0.2)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 20px', borderRadius: 100,
                    background: 'linear-gradient(135deg, #FBBC05, #EA4335)',
                    color: '#ffffff', fontSize: 13, fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <FiAward size={15} />
                  Member of the Month — {memberOfTheMonth.month}
                </motion.span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
                {/* Photo */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  style={{ position: 'relative', flexShrink: 0 }}
                >
                  <div style={{
                    width: 152, height: 152, borderRadius: '50%', overflow: 'hidden',
                    border: '4px solid #FBBC05',
                    boxShadow: '0 0 32px rgba(251,188,5,0.3)',
                  }}>
                    <img src={memberOfTheMonth.photo} alt={memberOfTheMonth.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      position: 'absolute', top: -6, right: -6,
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FBBC05, #EA4335)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(251,188,5,0.4)',
                    }}
                  >
                    <FiTrendingUp size={20} color="#fff" />
                  </motion.div>
                </motion.div>

                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 style={{
                    fontSize: 28, fontWeight: 800, color: 'var(--text-primary)',
                    marginBottom: 6, fontFamily: 'var(--font-display)',
                  }}>
                    {memberOfTheMonth.name}
                  </h3>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#EA4335', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
                    {memberOfTheMonth.achievement}
                  </p>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, fontFamily: 'var(--font-sans)' }}>
                    {memberOfTheMonth.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legends title */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 28, fontWeight: 800, textAlign: 'center',
            color: 'var(--text-primary)', marginBottom: 40,
            fontFamily: 'var(--font-display)',
          }}
        >
          Our Legends
        </motion.h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {hallOfFameMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(251,188,5,0.15)' }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 20, overflow: 'hidden',
                transition: 'all 0.3s', position: 'relative',
              }}
            >
              <div style={{ position: 'relative', height: 220, overflow: 'hidden', backgroundColor: 'var(--bg-tertiary)' }}>
                <motion.img
                  src={member.photo} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  padding: '6px 14px', borderRadius: 100,
                  background: 'linear-gradient(135deg, #4285F4, #34A853)',
                  color: '#fff', fontSize: 13, fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                }}>
                  {member.year}
                </div>
              </div>
              <div style={{ padding: '20px 20px 24px', position: 'relative' }}>
                <h4 style={{
                  fontSize: 17, fontWeight: 700, color: 'var(--text-primary)',
                  marginBottom: 6, fontFamily: 'var(--font-sans)',
                }}>
                  {member.name}
                </h4>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                  {member.achievement}
                </p>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  whileHover={{ rotate: 360 }}
                  style={{
                    position: 'absolute', bottom: 20, right: 20,
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#FBBC05',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(251,188,5,0.4)',
                  }}
                >
                  <FiAward size={18} color="#fff" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}