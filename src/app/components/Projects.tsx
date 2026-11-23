"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Terminal, Cpu, Database, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    title: 'OCR-Based Medical Reporter Summarizer',
    category: 'Computer Vision & NLP',
    description:
      'An intelligent end-to-end medical reporting pipeline that extracts clinical data from complex scans and generates concise, structured patient summaries with high clinical accuracy.',
    tags: ['Python', 'Tesseract OCR', 'FastAPI', 'NLP', 'Transformers'],
    github: 'https://github.com/ajaytilak341',
    link: '#',
    highlight: 'Featured AI Pipeline',
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'UZHAVAR Crop Disease Prediction',
    category: 'Deep Learning & AgriTech',
    description:
      'Deep convolutional neural network model trained on thousands of plant leaf images to detect early-stage crop infections and recommend targeted organic remedies for farmers.',
    tags: ['PyTorch', 'CNN', 'Computer Vision', 'Flask', 'Data Science'],
    github: 'https://github.com/ajaytilak341',
    link: '#',
    highlight: 'Smart Agriculture',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'VINNAIGRID UTM HUB',
    category: 'Geospatial & Distributed Systems',
    description:
      'A mission-critical Unmanned Traffic Management (UTM) cloud platform integrating real-time geospatial telemetry, airspace coordination, and ultra-low latency microservices.',
    tags: ['FastAPI', 'React', 'WebSockets', 'GIS', 'Docker'],
    github: 'https://github.com/ajaytilak341',
    link: '#',
    highlight: 'Distributed Cloud',
    icon: <Database className="w-5 h-5 text-cyan-400" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/particles.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-125 contrast-125" style={{opacity:1.25}}
      />

      {/* Balanced dark overlay for contrast and seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85 pointer-events-none" />

      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            [ INNOVATIVE CREATIONS ]
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Cutting-edge AI architectures, deep learning models, and scalable full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.22)] hover:-translate-y-1.5"
            >
              {/* Top Bar with Icon & Category */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-800/40 tracking-wider">
                    {p.highlight}
                  </span>
                </div>

                <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1.5">
                  {p.category}
                </p>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              {/* Bottom: Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-800/70 text-gray-300 border border-gray-700/60 font-mono tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all duration-200"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
