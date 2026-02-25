import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiAward, FiTrendingUp } from 'react-icons/fi';
import { memberOfTheMonth, hallOfFameMembers } from '../data/hallOfFameData';

export default function HallOfFame() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="hall-of-fame" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
            Hall of{' '}
            <span className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] to-[#4285F4] bg-clip-text text-transparent">
              Fame
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our most outstanding members and their incredible contributions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FBBC05] to-[#EA4335] mx-auto mt-4"></div>
        </div>

        {/* Member of the Month - Featured Card */}
        <motion.div
          data-aos="zoom-in"
          className="relative mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Glowing Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #FBBC05, #EA4335, #4285F4, #34A853)',
                padding: '3px'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <div className="w-full h-full bg-white rounded-3xl" />
            </motion.div>

            <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12">
              {/* Badge */}
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  className="bg-gradient-to-r from-[#FBBC05] to-[#EA4335] text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(251,188,5,0.3)',
                      '0 0 40px rgba(251,188,5,0.5)',
                      '0 0 20px rgba(251,188,5,0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FiAward className="w-5 h-5" />
                  <span>Member of the Month - {memberOfTheMonth.month}</span>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Photo */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-[#FBBC05] shadow-xl">
                    <img
                      src={memberOfTheMonth.photo}
                      alt={memberOfTheMonth.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Trophy */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#FBBC05] to-[#EA4335] rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FiTrendingUp className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#202124] mb-2">
                    {memberOfTheMonth.name}
                  </h3>
                  <p className="text-xl text-[#EA4335] font-semibold mb-4">
                    {memberOfTheMonth.achievement}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {memberOfTheMonth.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hall of Fame Grid */}
        <div className="mb-8" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-[#202124] mb-12">
            Our Legends
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hallOfFameMembers.map((member, index) => (
            <motion.div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Shine Sweep Animation */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />

              {/* Photo */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <motion.img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Year Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white px-4 py-2 rounded-full font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(66,133,244,0.3)',
                      '0 0 25px rgba(66,133,244,0.5)',
                      '0 0 15px rgba(66,133,244,0.3)'
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                >
                  {member.year}
                </motion.div>

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4285F4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#4285F4] transition-colors">
                  {member.name}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {member.achievement}
                </p>
              </div>

              {/* Trophy Icon Badge */}
              <motion.div
                className="absolute bottom-6 right-6 w-12 h-12 bg-[#FBBC05] rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                whileHover={{ rotate: 360 }}
              >
                <FiAward className="w-6 h-6 text-white" />
              </motion.div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FBBC05]/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
