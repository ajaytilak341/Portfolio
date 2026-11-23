"use client";
import { motion } from 'framer-motion';

// Buttons use plain <a> tags with smooth scroll logic


// Fixed label and subtitle as per design reference
const label = "[ AI / FULL-STACK DEVELOPER ]";
const subtitle = "Building intelligent experiences with code.";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white py-16 px-8 gap-8">
      {/* LEFT SIDE */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 text-sm mb-2 tracking-widest">{label}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">AJAY TILAK V.</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">{subtitle}</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#projects');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 64;
                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-600 transition-colors flex items-center cursor-pointer"
          >
            EXPLORE PROJECTS <span className="ml-2">→</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 64;
                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            CONTACT
          </a>
        </div>
      </motion.div>
      {/* RIGHT SIDE VIDEO */}
      <motion.div
        className="flex-1 w-full max-w-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain shadow-[0_0_30px_10px_rgba(0,255,255,0.3)]"
        />
      </motion.div>
    </section>
  );
}
