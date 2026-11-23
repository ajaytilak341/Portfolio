"use client";
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface AchievementItem {
  title: string;
  description?: string;
  badge: string;
  icon: JSX.Element;
  link?: string;
}

const achievements: AchievementItem[] = [
  {
    title: 'HackIT 3.0 Finalist 2026',
    description:
      'Selected as a National Finalist at HackIT 3.0, hosted by Anna University in 2026. This achievement reflects my ability to identify real-world challenges, transform innovative ideas into practical technology-driven solutions, and work through complex engineering problems. The experience strengthened my technical problem-solving, innovation, and ability to approach challenges with a solution-oriented mindset.',
    badge: 'National Finalist',
    link: undefined,
    icon: <Trophy className="w-6 h-6 text-yellow-400" />, // example icon
  },
  {
    title: 'Chandigarh Hackathon Finalist 2026',
    description:
      'Reached the finalist stage of the Chandigarh Police Hackathon 2026 with Sentinel Nexus, an innovative Evidence OS concept designed around modern law‑enforcement workflows. This experience involved applying technical knowledge to real‑world public‑safety challenges, developing a technology‑driven solution, and demonstrating innovation, analytical thinking, and problem‑solving skills in a competitive hackathon environment.',
    badge: 'National Finalist',
    link: undefined,
    icon: <Trophy className="w-6 h-6 text-yellow-400" />, // example icon
  },
  {
    title: '500+ LeetCode Problems Solved',
    description:
      'Successfully solved more than 500 problems on LeetCode, consistently improving my understanding of Data Structures and Algorithms. Practiced a wide range of problem‑solving patterns involving arrays, strings, binary search, recursion, trees, graphs, dynamic programming, greedy algorithms, and sorting techniques. This journey has strengthened my logical reasoning, algorithmic thinking, coding efficiency, and ability to develop optimized solutions under constraints.',
    badge: 'Competitive Programming',
    link: undefined,
    icon: <Code2 className="w-6 h-6 text-cyan-400" />, // example icon
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 bg-black text-gray-100 scroll-mt-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <video
        src="/videos/ACHIEVE.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50 brightness-100 contrast-100"
      />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

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
            [ RECOGNITION & METRICS ]
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Milestones and problem‑solving benchmarks achieved throughout my engineering career.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] max-w-sm flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-black/60 border border-gray-800 group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-4 border-t border-gray-800/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
