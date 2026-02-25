import { useEffect } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import { FiCalendar, FiClock, FiMapPin, FiZap } from 'react-icons/fi';
import { eventsData } from '../data/eventsData';

export default function Events() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
            Upcoming{' '}
            <span className="bg-gradient-to-r from-[#EA4335] via-[#FBBC05] to-[#34A853] bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for exciting workshops, hackathons, and tech talks
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EA4335] to-[#34A853] mx-auto mt-4"></div>
        </div>

        {/* Events List */}
        {eventsData.length > 0 ? (
          <div className="space-y-8">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                  {/* Image */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Date Badge */}
                    <motion.div
                      className="absolute top-4 left-4 bg-white rounded-2xl shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
                      }}
                    >
                      <div className="bg-gradient-to-r from-[#EA4335] to-[#FBBC05] text-white px-4 py-2 font-bold">
                        <FiCalendar className="w-5 h-5 mx-auto" />
                      </div>
                      <div className="px-4 py-2 text-center">
                        <div className="text-sm text-gray-600">
                          {event.date.split(',')[0]}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-[#202124] mb-4 group-hover:text-[#4285F4] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {event.title}
                    </motion.h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#4285F4]/10 rounded-full flex items-center justify-center">
                          <FiMapPin className="w-5 h-5 text-[#4285F4]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Venue</div>
                          <div className="font-semibold text-gray-800">{event.venue}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#EA4335]/10 rounded-full flex items-center justify-center">
                          <FiCalendar className="w-5 h-5 text-[#EA4335]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Date</div>
                          <div className="font-semibold text-gray-800">{event.date}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#FBBC05]/10 rounded-full flex items-center justify-center">
                          <FiClock className="w-5 h-5 text-[#FBBC05]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Time</div>
                          <div className="font-semibold text-gray-800">{event.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#34A853]/10 rounded-full flex items-center justify-center">
                          <FiZap className="w-5 h-5 text-[#34A853]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Duration</div>
                          <div className="font-semibold text-gray-800">{event.duration}</div>
                        </div>
                      </div>
                    </div>

                    {/* Register Button */}
                    <motion.button
                      className="self-start px-6 py-3 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Register Now</span>
                      
                      {/* Button Glow */}
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0, opacity: 0.5 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Border Glow Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285F4]/20 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Top Color Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
              </motion.div>
            ))}
          </div>
        ) : (
          /* No Events Message */
          <motion.div
            data-aos="zoom-in"
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <FiCalendar className="w-24 h-24 text-[#4285F4] mx-auto" />
            </motion.div>
            <h3 className="text-3xl font-bold text-[#202124] mb-4">
              Stay tuned! Exciting events are coming soon 🚀
            </h3>
            <p className="text-xl text-gray-600">
              We're planning amazing workshops and hackathons for you
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
