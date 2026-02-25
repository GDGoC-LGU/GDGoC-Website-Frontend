import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiTarget, FiEye, FiHeart, FiTrendingUp } from 'react-icons/fi';

export default function HighlightCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const cards = [
    {
      icon: FiTarget,
      title: 'Mission',
      description: 'Empower students with cutting-edge developer skills and knowledge through hands-on workshops, events, and mentorship programs.',
      color: '#4285F4',
      gradient: 'from-[#4285F4] to-[#34A853]'
    },
    {
      icon: FiEye,
      title: 'Vision',
      description: 'Build the most innovative and collaborative developer community in the region, producing tech leaders of tomorrow.',
      color: '#EA4335',
      gradient: 'from-[#EA4335] to-[#FBBC05]'
    },
    {
      icon: FiHeart,
      title: 'Values',
      description: 'Innovation, Collaboration, Inclusivity, Excellence, and Continuous Learning guide everything we do as a community.',
      color: '#FBBC05',
      gradient: 'from-[#FBBC05] to-[#34A853]'
    },
    {
      icon: FiTrendingUp,
      title: 'Impact',
      description: 'Over 500 students empowered, 100+ projects launched, and countless careers transformed through our programs.',
      color: '#34A853',
      gradient: 'from-[#34A853] to-[#4285F4]'
    }
  ];

  const handleScrollToTeam = () => {
    const teamSection = document.querySelector('#team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
            Why Join{' '}
            <span className="bg-gradient-to-r from-[#4285F4] to-[#EA4335] bg-clip-text text-transparent">
              GDCoC LGU
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our community special
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Glow Border Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}40, transparent)`,
                    zIndex: -1
                  }}
                />

                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Icon */}
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${card.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: card.color }} />
                    
                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: card.color }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <motion.button
            onClick={handleScrollToTeam}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full font-semibold text-lg overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Meet Our Amazing Team</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0.5 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Bounce Animation */}
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
