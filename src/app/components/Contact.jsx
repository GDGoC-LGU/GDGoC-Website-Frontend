import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiLinkedin, FiMessageCircle, FiInstagram, FiUsers } from 'react-icons/fi';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const contactButtons = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      color: '#0077B5',
      gradient: 'from-[#0077B5] to-[#00A0DC]',
      link: 'https://linkedin.com/company/gdcoc-lgu'
    },
    {
      name: 'WhatsApp',
      icon: FiMessageCircle,
      color: '#25D366',
      gradient: 'from-[#25D366] to-[#128C7E]',
      link: 'https://wa.me/1234567890'
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      color: '#E4405F',
      gradient: 'from-[#E4405F] via-[#F77737] to-[#FCAF45]',
      link: 'https://instagram.com/gdcoc.lgu'
    },
    {
      name: 'GDC Community',
      icon: FiUsers,
      color: '#4285F4',
      gradient: 'from-[#4285F4] to-[#34A853]',
      link: 'https://gdg.community.dev/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with us on your favorite platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4285F4] to-[#34A853] mx-auto mt-4"></div>
        </div>

        {/* Contact Buttons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <motion.a
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer`}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${button.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300`}
                      style={{ backgroundColor: `${button.color}20` }}
                    >
                      <Icon
                        className="w-8 h-8 group-hover:text-white transition-colors"
                        style={{ color: button.color }}
                      />
                    </div>
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-center text-[#202124] group-hover:text-white transition-colors">
                    {button.name}
                  </h3>
                </div>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Glow Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${button.color}40, transparent)`,
                    zIndex: -1
                  }}
                />

                {/* Icon Spin Animation on Hover */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: button.color }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#202124] mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you're interested in joining, partnering with us, or just want to learn more about GDCoC LGU, we'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:gdcoc@lgu.edu.ph"
                className="px-6 py-3 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
              </motion.a>
              <motion.button
                className="px-6 py-3 bg-white border-2 border-[#4285F4] text-[#4285F4] rounded-full font-semibold hover:bg-[#4285F4] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Discord
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
