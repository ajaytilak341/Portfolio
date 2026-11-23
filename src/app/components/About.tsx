"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Brain, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 text-gray-200 scroll-mt-16 relative overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/Particless.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 brightness-125 contrast-100"
      />

      {/* Smooth dark overlay to balance brightness and maintain contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 pointer-events-none" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            [ BACKGROUND & BIOGRAPHY ]
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
        </div>

        {/* Bio card */}
        <div className="p-8 md:p-10 rounded-2xl bg-black/70 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.18)] mb-10">
          <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-6 font-light">
            I am a B.E. Computer Science Engineering undergraduate specializing in{' '}
            <strong className="text-cyan-400 font-semibold">Artificial Intelligence & Machine Learning</strong> at{' '}
            <span className="text-white font-medium">Chennai Institute of Technology (2024‑2028)</span>. I combine a passion
            for deep learning models with scalable, full‑stack web engineering to build intuitive, intelligent user experiences.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
            Through internships at <span className="text-cyan-300 font-medium">Thetazero Private Limited</span> and{' '}
            <span className="text-cyan-300 font-medium">Edunet Foundation</span>, leadership as Events Team Lead at{' '}
            <span className="text-white font-medium">Athera Club</span>, and authoring open‑source solutions like the OCR‑Based
            Medical Reporter Summarizer and UZHAVAR Crop Disease Detection, I bridge advanced research depth with production‑grade architecture.
          </p>
        </div>

        {/* Quick Metrics / Focus Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-gray-950/80 backdrop-blur-md border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <GraduationCap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <h4 className="text-white font-bold text-lg">B.E. CSE (AI & ML)</h4>
            <p className="text-gray-400 text-xs font-mono mt-1">Chennai Institute of Tech</p>
          </div>
          <div className="p-5 rounded-xl bg-gray-950/80 backdrop-blur-md border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <Brain className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <h4 className="text-white font-bold text-lg">Core Focus</h4>
            <p className="text-gray-400 text-xs font-mono mt-1">Deep Learning & Vision AI</p>
          </div>
          <div className="p-5 rounded-xl bg-gray-950/80 backdrop-blur-md border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-colors">
            <Terminal className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <h4 className="text-white font-bold text-lg">Full-Stack Dev</h4>
            <p className="text-gray-400 text-xs font-mono mt-1">FastAPI, Next.js, React</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
