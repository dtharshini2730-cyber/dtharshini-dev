import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Code2, Globe, Cpu, Terminal, Sparkles, CheckCircle2, Award, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Code2: Code2,
  Globe: Globe,
  Cpu: Cpu,
  Terminal: Terminal,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('technical'); // 'technical' | 'soft'

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={skills.sectionNumber}
        label="SKILLS"
        title={skills.title}
        subtitle="A comprehensive overview of core technical competencies and essential soft skills."
      />

      {/* Main Mode Toggle: Technical Skills vs Soft Skills */}
      <div className="flex items-center gap-3 mb-10 pb-2">
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'technical'
              ? 'bg-[#00ff9d] text-slate-950 shadow-[0_0_20px_rgba(0,255,157,0.35)]'
              : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>TECHNICAL SKILLS</span>
        </button>

        <button
          onClick={() => setActiveTab('soft')}
          className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'soft'
              ? 'bg-gradient-to-r from-[#00e5ff] to-[#a855f7] text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.35)]'
              : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>SOFT SKILLS</span>
        </button>
      </div>

      {/* Dynamic Content Display */}
      <AnimatePresence mode="wait">
        {activeTab === 'technical' ? (
          <motion.div
            key="technical"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.technicalCategories.map((category) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <TiltCard key={category.id} maxTilt={5} className="h-full">
                  <div className="h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[#00ff9d] group-hover:border-[#00ff9d]/50 group-hover:scale-105 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-white transition-colors">
                          {category.name}
                        </h3>
                      </div>

                      {/* Pure Skills Badges (No long explanations) */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-[#00ff9d] hover:bg-slate-950 text-xs font-mono text-slate-200 transition-all group/badge"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] group-hover/badge:scale-125 transition-transform" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>VERIFIED ARSENAL</span>
                      <span className="text-[#00ff9d]">● READY</span>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="soft"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl"
          >
            <div className="max-w-3xl mb-8">
              <h3 className="font-heading font-bold text-xl text-slate-100 mb-2 flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-[#00e5ff]" />
                Professional & Interpersonal Skills
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Core behavioral competencies, leadership values, and problem-solving methodologies.
              </p>
            </div>

            {/* Soft Skills Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-[#00e5ff]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00e5ff] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                  </div>
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
