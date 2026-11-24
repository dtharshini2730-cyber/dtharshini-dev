import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Award,
  Sparkles,
  Rocket,
  Shield,
  Globe,
  ExternalLink,
  Eye,
  X,
  Download,
  Calendar,
  CheckCircle2,
  Building2
} from 'lucide-react';
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
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={achievements.sectionNumber}
        label="ACHIEVEMENTS & HACKATHONS"
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
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_25px_rgba(0,229,255,0.12)]">
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 text-[#00e5ff] flex items-center justify-center group-hover:border-[#00e5ff]/50 group-hover:scale-105 transition-all shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg text-slate-100 group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs font-mono text-[#00ff9d] font-semibold">
                        {item.category}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.badge}
                      </span>
                    </div>

                    {/* Issuer & Date info */}
                    <div className="mt-2 text-xs font-mono text-slate-400 flex flex-col gap-1">
                      {item.issuer && (
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Building2 className="w-3.5 h-3.5 text-[#00e5ff] shrink-0" />
                          <span className="truncate">{item.issuer}</span>
                        </div>
                      )}
                      {item.date && (
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                          <Calendar className="w-3 h-3 text-[#00ff9d] shrink-0" />
                          <span>{item.date}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer with Preview & Link Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#00e5ff] text-[11px] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d]" />
                      <span>Verified Hackathon</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {item.credentialUrl && (
                        <button
                          onClick={() => setSelectedAchievement(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00e5ff] hover:text-[#00e5ff] text-slate-300 text-xs font-mono transition-colors"
                          title="Preview Certificate"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#00e5ff]" />
                          <span>Preview</span>
                        </button>
                      )}

                      {item.credentialUrl && (
                        <a
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00ff9d] text-slate-400 hover:text-[#00ff9d] transition-colors"
                          title="Open original in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Certificate Preview Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#00e5ff]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                      {selectedAchievement.title}
                    </h4>
                    <p className="text-xs font-mono text-[#00ff9d]">
                      {selectedAchievement.badge} {selectedAchievement.date ? `• ${selectedAchievement.date}` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedAchievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Open original document"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950/70">
                <img
                  src={selectedAchievement.credentialUrl}
                  alt={selectedAchievement.title}
                  className="rounded-xl border border-slate-800 max-h-[65vh] w-auto object-contain shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                  <span>Verified Hackathon Participation</span>
                </div>

                <a
                  href={selectedAchievement.credentialUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00e5ff] hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Full Resolution</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
