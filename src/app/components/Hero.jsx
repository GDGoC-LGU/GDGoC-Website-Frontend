import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import {
  SiReact, SiFirebase, SiFlutter, SiGooglecloud,
  SiPython, SiNodedotjs, SiAndroid, SiTensorflow,
  SiGoogle, SiGooglesearchconsole, SiDart, SiKotlin
} from 'react-icons/si';

const FloatingIcon = ({ icon: Icon, color, x, y, delay, mobileHidden = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      y: [0, -25, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 6 + Math.random() * 2,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${mobileHidden ? 'hidden lg:block' : 'block'}`}
    style={{ left: x, top: y }}
  >
    <div className="relative group p-2">
      <div
        className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: color }}
      />
      <Icon className="relative z-10 text-2xl md:text-4xl lg:text-5xl" style={{ color }} />
    </div>
  </motion.div>
);

export default function Hero() {
  // Parallax scroll effect for the main container
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  const techStack = [
    // Primary Google Ecosystem
    { icon: SiGoogle, color: '#4285F4', x: '10%', y: '15%', delay: 0 },
    { icon: SiFlutter, color: '#02569B', x: '85%', y: '20%', delay: 1 },
    { icon: SiFirebase, color: '#FFCA28', x: '12%', y: '70%', delay: 2 },
    { icon: SiAndroid, color: '#3DDC84', x: '80%', y: '75%', delay: 1.5 },
    { icon: SiGooglecloud, color: '#4285F4', x: '75%', y: '45%', delay: 0.5 },

    // Frameworks & Languages (Hidden on mobile for clarity)
    { icon: SiReact, color: '#61DAFB', x: '25%', y: '10%', delay: 3, mobileHidden: true },
    { icon: SiTensorflow, color: '#FF6F00', x: '15%', y: '45%', delay: 2.5, mobileHidden: true },
    { icon: SiPython, color: '#3776AB', x: '20%', y: '85%', delay: 4, mobileHidden: true },
    { icon: SiKotlin, color: '#7F52FF', x: '88%', y: '10%', delay: 1.2, mobileHidden: true },
    { icon: SiDart, color: '#0175C2', x: '90%', y: '60%', delay: 0.8, mobileHidden: true },
    { icon: SiNodedotjs, color: '#339933', x: '70%', y: '88%', delay: 3.5, mobileHidden: true },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden text-white selection:bg-blue-500/30">

      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {techStack.map((tech, index) => (
          <FloatingIcon key={index} {...tech} />
        ))}
      </div>

      {/* Main Content Area */}
      <motion.div
        style={{ y: yParallax }}
        className="relative z-20 max-w-6xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-8 mt-15">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase border border-white/10 rounded-full bg-white/5 backdrop-blur-xl shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              Empowering Campus Innovators
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Google Developer Groups <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
              on Campus
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the world's most vibrant student developer community.
            Build with Google technologies and connect with industry experts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#4285F4] hover:bg-[#3367d6] text-white rounded-2xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(66,133,244,0.5)] active:scale-95">
              Join Community
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl text-white rounded-2xl font-bold transition-all active:scale-95">
              <FiCalendar className="text-xl" />
              Explore Events
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Subtle Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />

      {/* Responsive Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll to explore</p>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}