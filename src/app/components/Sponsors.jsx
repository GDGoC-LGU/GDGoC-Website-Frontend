import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const sponsorsData = {
  platinum: [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', url: 'https://google.com' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png', url: 'https://cloud.google.com' },
  ],
  gold: [
    { name: 'Firebase', logo: 'https://www.gstatic.com/devrel-devsite/prod/v0c13b0f82ee6f80aa1fb04d13f90e0b6f3e7c91e7e80/firebase/images/brand-guidelines/logo-standard.png', url: 'https://firebase.google.com' },
    { name: 'Flutter', logo: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg', url: 'https://flutter.dev' },
    { name: 'Android', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg', url: 'https://android.com' },
  ],
  community: [
    { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png', url: 'https://github.com' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', url: 'https://vercel.com' },
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', url: 'https://figma.com' },
    { name: 'Postman', logo: 'https://voyager.postman.com/logo/postman-logo-orange-stacked.svg', url: 'https://postman.com' },
  ],
};

const SponsorTier = ({ tier, sponsors, delay, isInView }) => {
  const tierConfig = {
    platinum: { label: '✦ Platinum Partners', color: '#B8C4D0', accent: 'linear-gradient(135deg, #C0C8D8, #8B9AB0)', size: 140, cardPad: '28px 36px' },
    gold: { label: '★ Gold Sponsors', color: '#FBBC05', accent: 'linear-gradient(135deg, #FBBC05, #F4A300)', size: 110, cardPad: '22px 28px' },
    community: { label: '◆ Community Partners', color: '#34A853', accent: 'linear-gradient(135deg, #34A853, #2D8F47)', size: 80, cardPad: '18px 24px' },
  };
  const cfg = tierConfig[tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ marginBottom: 48 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <div style={{ height: 1, flex: 1, background: 'var(--border-color)' }} />
        <span style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
          color: cfg.color, fontFamily: 'var(--font-sans)',
          padding: '4px 16px', borderRadius: 100,
          border: `1px solid ${cfg.color}30`,
          background: `${cfg.color}0d`,
          whiteSpace: 'nowrap',
        }}>
          {cfg.label}
        </span>
        <div style={{ height: 1, flex: 1, background: 'var(--border-color)' }} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
        {sponsors.map((sponsor, i) => (
          <motion.a
            key={i}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + i * 0.07 }}
            whileHover={{ y: -6, scale: 1.04, boxShadow: `0 16px 48px ${cfg.color}20` }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: cfg.cardPad,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 16,
              textDecoration: 'none',
              transition: 'all 0.3s',
              position: 'relative', overflow: 'hidden',
              minWidth: cfg.size + 40,
            }}
          >
            {/* Hover glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(circle at center, ${cfg.color}08, transparent)`,
              opacity: 0, transition: 'opacity 0.3s',
            }} className="sponsor-glow" />
            <img
              src={sponsor.logo} alt={sponsor.name}
              style={{
                height: tier === 'platinum' ? 36 : tier === 'gold' ? 28 : 22,
                maxWidth: cfg.size,
                objectFit: 'contain',
                filter: 'var(--sponsor-filter)',
                transition: 'filter 0.3s',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback text */}
            <span style={{
              display: 'none', fontSize: 15, fontWeight: 700,
              color: cfg.color, fontFamily: 'var(--font-sans)',
            }}>
              {sponsor.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { isDark } = useTheme();

  return (
    <section
      id="sponsors"
      ref={ref}
      style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.3s' }}
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
            Sponsors &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #4285F4, #34A853)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Partners
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 16px', fontFamily: 'var(--font-sans)' }}>
            We're proud to work with these amazing organizations that support our mission
          </p>
          <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg, #4285F4, #34A853)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>

        <SponsorTier tier="platinum" sponsors={sponsorsData.platinum} delay={0.1} isInView={isInView} />
        <SponsorTier tier="gold" sponsors={sponsorsData.gold} delay={0.25} isInView={isInView} />
        <SponsorTier tier="community" sponsors={sponsorsData.community} delay={0.4} isInView={isInView} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 56, padding: 40, borderRadius: 24,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontSize: 22, fontWeight: 800, color: 'var(--text-primary)',
            marginBottom: 10, fontFamily: 'var(--font-display)',
          }}>
            Become a Partner
          </h3>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 24, maxWidth: 480, margin: '0 auto 24px', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}>
            Join our growing ecosystem and connect with hundreds of passionate student developers.
          </p>
          <motion.a
            href="mailto:gdcoc@lgu.edu.ph"
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(66,133,244,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #4285F4, #34A853)',
              color: '#fff', borderRadius: 100, border: 'none',
              fontSize: 15, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-sans)', textDecoration: 'none',
            }}
          >
            Partner With Us →
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        :root { --sponsor-filter: none; }
        .dark { --sponsor-filter: brightness(0.85) contrast(1.1); }
        .sponsor-glow { opacity: 0; }
        a:hover .sponsor-glow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}