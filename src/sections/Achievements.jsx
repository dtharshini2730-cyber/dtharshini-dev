import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Rocket, Shield, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

const hackathonIcons = {
  nasa: Globe,
  adobe: Rocket,
  msme: Award,
  brewingsec: Shield,
  ips: Trophy,
};

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={achievements.sectionNumber}
        label="ACHIEVEMENTS"
        title={achievements.title}
        subtitle={achievements.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.list.map((item, index) => {
          const Icon = hackathonIcons[item.id] || Trophy;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={6} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-[#00e5ff] flex items-center justify-center group-hover:border-[#00e5ff]/50 group-hover:scale-110 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg text-slate-100 group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Category & Badge */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-mono text-[#00ff9d]">
                        {item.category}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400">
                        {item.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>HACKATHON / CHALLENGE</span>
                    <span className="text-[#00e5ff]">VERIFIED PARTICIPATION</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
