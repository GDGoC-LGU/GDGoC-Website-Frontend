import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { teamData } from '../data/teamData';

export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate individuals dedicated to building a thriving developer community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4285F4] to-[#34A853] mx-auto mt-4"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-gray-200">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay with Social Icons */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#4285F4]/90 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiLinkedin />
                    </motion.a>
                    <motion.a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4285F4] hover:bg-[#EA4335] hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[4285F4] hover:bg-[#FBBC05] hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiTwitter />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Color Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#202124] mb-1 group-hover:text-[#4285F4] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#EA4335] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Card Lift Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285F4]/20 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
