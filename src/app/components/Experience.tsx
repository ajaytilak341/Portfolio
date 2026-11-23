"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Intern',
    company: 'Thetazero Private Limited',
    period: '2025',
    type: 'Full-Stack & AI',
    description: 'Engineered high-performance full-stack web applications and designed functional artificial intelligence prototypes, contributing directly to core product feature rollouts.',
  },
  {
    role: 'Intern',
    company: 'Edunet Foundation',
    period: '2025',
    type: 'AI / Open-Source',
    description: 'Collaborated on open-source educational technology tools, developing machine learning scripts, data pipelines, and interactive engineering demonstrations.',
  },
  {
    role: 'Events Team Lead',
    company: 'Athera Club',
    period: '2024 ‑ 2025',
    type: 'Leadership & Events',
    description: 'Spearheaded technical events, developer workshops, and college-wide hackathons, mentoring student developers and driving innovation initiatives.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-black/95 text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Background radial glow */}
      <video
  src="/videos/EXPERIENCE.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100 brightness-65 contrast-80"
/>
<div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            [ CAREER JOURNEY ]
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Professional background, industry internships, and engineering leadership.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gray-900/90 via-gray-950/90 to-black/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role} <span className="text-gray-400 font-normal">@</span> <span className="text-cyan-400">{exp.company}</span>
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">
                      {exp.type}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 text-xs font-mono self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-0 md:pl-16">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
        
  );
}
