import { Users, Rocket, BookOpen, Target } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Users size={28} />,
      title: "Community Driven",
      description: "Connect with passionate students and build lasting relationships",
      color: "bg-blue-50",
      iconColor: "text-[#4285F4]",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <Rocket size={28} />,
      title: "Build & Ship",
      description: "Create real-world projects with cutting-edge Google technologies",
      color: "bg-red-50",
      iconColor: "text-[#EA4335]",
      gradient: "from-red-400 to-red-600",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Learn & Grow",
      description: "Access expert-led workshops and hands-on training sessions",
      color: "bg-yellow-50",
      iconColor: "text-[#FBBC04]",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <Target size={28} />,
      title: "Make Impact",
      description: "Solve real problems and contribute to meaningful solutions",
      color: "bg-green-50",
      iconColor: "text-[#34A853]",
      gradient: "from-green-400 to-green-600",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold"
            whileInView={{ 
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            About <span className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] to-[#4285F4] bg-clip-text text-transparent">
              GDCoC
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Google Developer Circles on Campus brings together students passionate about technology,
            innovation, and creating meaningful impact through collaboration.
          </p>
        </motion.div>

        {/* Highlights Grid with enhanced animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 },
              }}
              className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 ${item.iconColor}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-3 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text */}
          <div className="space-y-8">
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl text-gray-900 mb-4 font-bold">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower students with knowledge, tools, and community support needed to build
                innovative solutions using Google technologies. We foster a culture of continuous
                learning and collaboration.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl text-gray-900 mb-4 font-bold">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creating a vibrant ecosystem where students can explore, experiment, and excel
                in technology. We envision a future where every member becomes a skilled developer
                and change-maker.
              </p>
            </motion.div>
          </div>

          {/* Right - Card with glassmorphism */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-green-50"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="relative z-10 space-y-6">
              {[
                { emoji: "🎯", title: "Weekly Workshops", desc: "Interactive learning sessions every week", color: "blue" },
                { emoji: "🚀", title: "Hackathons", desc: "Build amazing projects in competitive events", color: "red" },
                { emoji: "🤝", title: "Networking", desc: "Connect with industry professionals", color: "green" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </motion.div>
                  <div>
                    <div className="text-xl text-gray-900 mb-2 font-semibold">{item.title}</div>
                    <div className="text-gray-600">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
