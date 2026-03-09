import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { teamData } from '../data/teamData';

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="team"
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
            Meet Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4285F4, #EA4335, #FBBC05)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Amazing Team
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 16px', fontFamily: 'var(--font-sans)' }}>
            Passionate individuals dedicated to building a thriving developer community
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #4285F4, #34A853)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
          {teamData.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 4px 20px var(--shadow-color)',
                transition: 'all 0.3s',
                position: 'relative',
              }}
              className="team-card"
            >
              {/* Top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05)',
                zIndex: 2,
              }} />

              {/* Image */}
              <div style={{ position: 'relative', height: 220, overflow: 'hidden', backgroundColor: 'var(--bg-tertiary)' }}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Hover social overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(66,133,244,0.92) 0%, transparent 50%)',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                    paddingBottom: 20, gap: 12,
                  }}
                >
                  {[
                    { icon: FiLinkedin, href: member.socials?.linkedin, hoverColor: '#0077B5' },
                    { icon: FiGithub, href: member.socials?.github, hoverColor: '#333' },
                    { icon: FiTwitter, href: member.socials?.twitter, hoverColor: '#1DA1F2' },
                  ].map(({ icon: Icon, href, hoverColor }, j) => (
                    <motion.a
                      key={j}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.95)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#4285F4', textDecoration: 'none',
                        fontSize: 15,
                      }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px 24px' }}>
                <h3 style={{
                  fontSize: 17, fontWeight: 700, color: 'var(--text-primary)',
                  marginBottom: 4, fontFamily: 'var(--font-sans)',
                }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#EA4335', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-sans)' }}>
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}