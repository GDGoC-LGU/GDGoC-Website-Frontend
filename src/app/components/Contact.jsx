import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FiLinkedin, FiMessageCircle, FiInstagram, FiUsers, FiMail, FiMessageSquare } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const contactButtons = [
    { name: 'LinkedIn', icon: FiLinkedin, color: '#0077B5', link: 'https://linkedin.com/company/gdcoc-lgu' },
    { name: 'WhatsApp', icon: FiMessageCircle, color: '#25D366', link: 'https://wa.me/1234567890' },
    { name: 'Instagram', icon: FiInstagram, color: '#E4405F', link: 'https://instagram.com/gdcoc.lgu' },
    { name: 'GDG Community', icon: FiUsers, color: '#4285F4', link: 'https://gdg.community.dev/' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.3s' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 12,
          }}>
            Get In{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4285F4, #EA4335, #34A853)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Touch
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
            Connect with us on your favorite platform
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #4285F4, #34A853)', margin: '16px auto 0', borderRadius: 2 }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20, maxWidth: 900, margin: '0 auto 48px',
        }}>
          {contactButtons.map((btn, i) => {
            const Icon = btn.icon;
            return (
              <motion.a
                key={i}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.04, boxShadow: `0 20px 48px ${btn.color}25` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '32px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 20, textDecoration: 'none',
                  transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                }}
                className="contact-card"
              >
                {/* Hover fill */}
                <motion.div
                  style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(135deg, ${btn.color}15, ${btn.color}05)`,
                    opacity: 0, transition: 'opacity 0.3s',
                  }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  style={{
                    width: 60, height: 60, borderRadius: 18, marginBottom: 14,
                    backgroundColor: `${btn.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: btn.color, fontSize: 26,
                  }}
                >
                  <Icon />
                </motion.div>
                <span style={{
                  fontSize: 15, fontWeight: 700, color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {btn.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Contact CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            maxWidth: 680, margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 24, padding: '40px 40px',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
          }} />
          <h3 style={{
            fontSize: 22, fontWeight: 800, color: 'var(--text-primary)',
            marginBottom: 10, fontFamily: 'var(--font-display)',
          }}>
            Have Questions?
          </h3>
          <p style={{
            fontSize: 15, color: 'var(--text-secondary)', marginBottom: 28,
            lineHeight: 1.7, fontFamily: 'var(--font-sans)',
          }}>
            Whether you're interested in joining, partnering with us, or just want to learn more
            about GDCoC LGU, we'd love to hear from you!
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:gdcoc@lgu.edu.ph"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(66,133,244,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                color: '#fff', borderRadius: 100, border: 'none',
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-sans)', textDecoration: 'none',
              }}
            >
              <FiMail size={15} />
              Email Us
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 28px',
                background: 'transparent',
                color: '#4285F4',
                borderRadius: 100, border: '2px solid #4285F4',
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              <FiMessageSquare size={15} />
              Join Our Discord
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}