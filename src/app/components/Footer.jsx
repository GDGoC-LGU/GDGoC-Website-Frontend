import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiLinkedin, FiInstagram, FiTwitter, FiGithub, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com', color: '#0077B5' },
    { icon: FiInstagram, href: 'https://instagram.com', color: '#E4405F' },
    { icon: FiTwitter, href: 'https://twitter.com', color: '#1DA1F2' },
    { icon: FiGithub, href: 'https://github.com', color: '#333' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#202124] text-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #4285F4, #EA4335, #FBBC05, #34A853)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2" data-aos="fade-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-[#EA4335]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
                </div>
                <span className="text-2xl font-bold">GDCoC LGU</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed max-w-md">
                Empowering the next generation of developers at Laguna University through innovation, collaboration, and continuous learning.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-[#4285F4]" />
                  <span className="text-sm">Laguna University, Sta. Cruz, Laguna, Philippines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4 text-[#EA4335]" />
                  <span className="text-sm">gdcoc@lgu.edu.ph</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiPhone className="w-4 h-4 text-[#34A853]" />
                  <span className="text-sm">+63 123 456 7890</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-bold mb-4 text-[#4285F4]">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#FBBC05] rounded-full"></span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-bold mb-4 text-[#34A853]">Connect With Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        boxShadow: `0 0 0 0 ${social.color}`
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${social.color}`,
                          `0 0 0 8px ${social.color}00`,
                          `0 0 0 0 ${social.color}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Subscribe to our Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-[#4285F4] transition-colors text-sm"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-r-lg font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-aos="fade-up">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2026 GDCoC LGU. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>

          {/* Made with Love */}
          <motion.div
            className="text-center mt-8 text-gray-500 text-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Made with{' '}
            <motion.span
              className="inline-block text-[#EA4335]"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              ❤️
            </motion.span>{' '}
            by GDCoC LGU Team
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
