import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, PlusCircle, Sparkles, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

export default function Experience({ isOwnerMode = false }) {
  const { experience, personal } = portfolioData;
  const { placeholderCard } = experience;
  const [timelineList, setTimelineList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExp, setNewExp] = useState({
    role: '',
    organization: '',
    duration: '',
    location: '',
    description: '',
  });

  const handleAddExp = (e) => {
    e.preventDefault();
    if (!newExp.role || !newExp.organization) return;
    setTimelineList([
      ...timelineList,
      {
        role: newExp.role,
        organization: newExp.organization,
        duration: newExp.duration || '2026',
        location: newExp.location || 'India',
        description: newExp.description || 'Cybersecurity & software engineering role.',
      },
    ]);
    setShowAddModal(false);
    setNewExp({ role: '', organization: '', duration: '', location: '', description: '' });
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={experience.sectionNumber}
        label="EXPERIENCE"
        title={experience.title}
        subtitle={experience.subtitle}
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Dynamic Added Timeline Items */}
        {timelineList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">{item.role}</h3>
                <p className="text-sm font-mono text-[#00ff9d]">{item.organization}</p>
              </div>
              <span className="text-xs font-mono text-slate-400">{item.duration} • {item.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}

        {/* Add Experience / Opportunity Slot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard maxTilt={4} className="w-full">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border-2 border-dashed border-slate-700/80 hover:border-[#00ff9d]/50 transition-all duration-300 shadow-2xl flex flex-col md:flex-row items-center gap-8 group">
              
              {/* Left Accent Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-slate-800 text-[#00ff9d] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#00ff9d] shadow-[0_0_25px_rgba(0,255,157,0.15)] transition-all duration-300">
                <PlusCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#00ff9d]" />
              </div>

              {/* Card Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00e5ff]/30 text-[11px] font-mono text-[#00e5ff] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
                  <span>{placeholderCard.badge}</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-100 group-hover:text-[#00ff9d] transition-colors">
                  {placeholderCard.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                  {placeholderCard.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
                  {isOwnerMode ? (
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs uppercase font-mono tracking-wider hover:bg-[#00e5ff] transition-all duration-300 shadow-md"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Add Experience Entry (Owner)</span>
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 border border-[#00ff9d]/40 text-[#00ff9d] hover:bg-[#00ff9d] hover:text-slate-950 font-bold text-xs uppercase font-mono tracking-wider transition-all duration-300 shadow-md"
                    >
                      <span>{placeholderCard.actionText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#00e5ff] transition-colors"
                  >
                    <span>View LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Owner-Only Add Experience Modal */}
      <AnimatePresence>
        {showAddModal && isOwnerMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl"
            >
              <h3 className="font-heading font-bold text-xl text-slate-100 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#00ff9d]" />
                Add Experience Milestone (Owner Mode)
              </h3>

              <form onSubmit={handleAddExp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Role / Position *
                  </label>
                  <input
                    type="text"
                    required
                    value={newExp.role}
                    onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                    placeholder="e.g. Cybersecurity Intern / Software Developer"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={newExp.organization}
                    onChange={(e) => setNewExp({ ...newExp, organization: e.target.value })}
                    placeholder="e.g. Cyber Security Labs / Tech Corporation"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={newExp.duration}
                      onChange={(e) => setNewExp({ ...newExp, duration: e.target.value })}
                      placeholder="e.g. June 2026 — Aug 2026"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={newExp.location}
                      onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
                      placeholder="e.g. Bengaluru, India / Remote"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Description & Key Deliverables
                  </label>
                  <textarea
                    rows={3}
                    value={newExp.description}
                    onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                    placeholder="Responsibilities, tools used, impact..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs font-mono"
                  >
                    Save Experience
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
