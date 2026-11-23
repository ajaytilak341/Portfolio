"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Layers, Sparkles } from 'lucide-react';

const skills = [
  { name: 'Python', icon: <Code className="w-6 h-6 text-cyan-400" />, level: 'Advanced' },
  { name: 'C++', icon: <Code className="w-6 h-6 text-blue-400" />, level: 'DSA & Systems' },
  { name: 'JavaScript', icon: <Code className="w-6 h-6 text-yellow-400" />, level: 'ES6+ Full-Stack' },
  { name: 'TypeScript', icon: <Code className="w-6 h-6 text-cyan-400" />, level: 'Type-Safe Dev' },
  { name: 'React', icon: <Layers className="w-6 h-6 text-cyan-400" />, level: 'Modern Hooks' },
  { name: 'Next.js', icon: <Layers className="w-6 h-6 text-white" />, level: 'App Router' },
  { name: 'FastAPI', icon: <Database className="w-6 h-6 text-teal-400" />, level: 'High-Speed APIs' },
  { name: 'TensorFlow', icon: <Cpu className="w-6 h-6 text-orange-400" />, level: 'ML Models' },
  { name: 'PyTorch', icon: <Cpu className="w-6 h-6 text-red-400" />, level: 'Deep Learning' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/SKILLS.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-125 contrast-100" style={{opacity:1.2}}
      />

      {/* Dark overlay for contrast and seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

      {/* Glow accent */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            [ TECHNICAL EXPERTISE ]
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Core technical proficiencies spanning artificial intelligence, deep learning frameworks, and modern full-stack web architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-between p-5 rounded-xl bg-gray-950/80 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.22)] hover:-translate-y-1 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2.5 rounded-lg bg-black/70 border border-gray-800 group-hover:border-cyan-500/40 transition-colors">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">
                    {skill.level}
                  </p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
