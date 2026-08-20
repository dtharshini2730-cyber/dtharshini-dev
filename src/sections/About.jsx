import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeading
        number={about.sectionNumber}
        label="ABOUT"
        title={about.heading}
        subtitle="A snapshot into my academic background, technical curiosities, and engineering journey."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Authentic About Narrative & Quick Highlights */}
        <div className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {about.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-slate-300 bg-slate-900/40 p-4 sm:p-5 rounded-2xl border border-slate-800/80 shadow-md"
            >
              {p}
            </motion.p>
          ))}

          {/* Quick Key Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {about.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  {h.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#00ff9d] mt-1 font-heading">
                  {h.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Senior Portfolio Inspired Education Timeline */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800 mb-6">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[#00ff9d]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Academic Education
                </h3>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-wider">
                  ACADEMIC TIMELINE
                </span>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-8">
              {about.educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node */}
                  <div
                    className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                      borderColor: item.accent,
                      boxShadow: `0 0 10px ${item.accent}`,
                    }}
                  />

                  {/* Education Card */}
                  <TiltCard maxTilt={4} className="w-full">
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(0,255,157,0.1)]">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                        <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#00ff9d]" />
                          {item.duration}
                        </span>

                        <span
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-900 border"
                          style={{
                            color: item.accent,
                            borderColor: `${item.accent}40`,
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#00ff9d] transition-colors leading-snug">
                        {item.degree}
                      </h4>

                      <p className="text-xs text-slate-400 font-mono mt-1">
                        {item.institution}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500">Grade / Performance:</span>
                        <span
                          className="font-bold font-heading px-2 py-0.5 rounded bg-slate-900"
                          style={{ color: item.accent }}
                        >
                          {item.score}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
