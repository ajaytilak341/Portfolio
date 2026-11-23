"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Background Video with enhanced vibrancy */}
      <video
        src="/videos/section-particles.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50 brightness-90 contrast-90"
      />

      {/* Much lighter overlay to allow the particles to shine through brightly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60 pointer-events-none" />

      {/* Enhanced electric cyan/blue glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          [ GET IN TOUCH ]
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Something Extraordinary</span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base mb-12">
          Whether you have an innovative AI project, a full-stack opportunity, or simply want to connect, feel free to reach out.
        </p>

        {/* Contact Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-12">
          <a
            href="mailto:ajaytilak0207@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1 text-left group"
          >
            <div className="p-3.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Email</p>
              <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                ajaytilak0207@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+916385493698"
            className="flex items-center gap-4 p-5 rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1 text-left group"
          >
            <div className="p-3.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Phone</p>
              <p className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                +91 63854 93698
              </p>
            </div>
          </a>
        </div>

        {/* Footer info */}
        <div className="pt-8 border-t border-gray-800/80 text-sm text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ajay Tilak V. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-gray-400">
            <a
              href="https://github.com/ajaytilak341"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
