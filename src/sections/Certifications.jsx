import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, PlusCircle, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

export default function Certifications({ isOwnerMode = false }) {
  const { certifications, personal } = portfolioData;
  const [certList, setCertList] = useState(certifications.list);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    credentialUrl: '',
  });

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!newCert.title || !newCert.issuer) return;

    const updated = [
      ...certList,
      {
        id: `cert-${Date.now()}`,
        title: newCert.title,
        issuer: newCert.issuer,
        date: newCert.date || '2026',
        description: newCert.description || 'Verified technology certification.',
        credentialUrl: newCert.credentialUrl || personal.linkedin,
      },
    ];
    setCertList(updated);
    setShowAddModal(false);
    setNewCert({ title: '', issuer: '', date: '', description: '', credentialUrl: '' });
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={certifications.sectionNumber}
        label="CERTIFICATIONS"
        title={certifications.title}
        subtitle={certifications.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Verified Certificates (Cisco Python Essentials 1) */}
        {certList.map((cert, index) => (
          <motion.div
            key={cert.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#00ff9d] group-hover:scale-105 group-hover:border-[#00ff9d]/50 transition-all shadow-[0_0_15px_rgba(0,255,157,0.15)]">
                      <ShieldCheck className="w-7 h-7" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-[#00ff9d]" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00ff9d] px-2 py-0.5 rounded bg-[#00ff9d]/10 border border-[#00ff9d]/30 inline-block mb-1.5">
                      OFFICIAL CREDENTIAL
                    </span>
                    <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-[#00ff9d] transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-[#00e5ff] font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.recipient && (
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">Awarded To:</span>
                      <span className="font-semibold text-slate-200">{cert.recipient}</span>
                    </div>
                  )}

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d]" />
                    <span>Verified by Cisco</span>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-[#00ff9d] hover:text-[#00ff9d] text-xs font-mono text-slate-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}

        {/* Add Certification / Future Milestone Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TiltCard maxTilt={4} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/60 border-2 border-dashed border-slate-800 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#00e5ff] group-hover:scale-105 transition-all">
                    <PlusCircle className="w-7 h-7" />
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                    {certifications.placeholderCard.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-heading font-bold text-xl text-slate-200 group-hover:text-[#00e5ff] transition-colors leading-snug">
                  {certifications.placeholderCard.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {certifications.placeholderCard.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {isOwnerMode ? (
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#00e5ff] transition-colors"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Add New Certification (Owner)</span>
                  </button>
                ) : (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-[#00e5ff] text-slate-300 hover:text-[#00e5ff] text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Owner-Only Add Certificate Modal */}
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
                <ShieldCheck className="w-5 h-5 text-[#00ff9d]" />
                Add New Certification (Owner Mode)
              </h3>

              <form onSubmit={handleAddCert} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Certificate Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCert.title}
                    onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                    placeholder="e.g. Certified Ethical Hacker / CompTIA Security+"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Issuing Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCert.issuer}
                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                    placeholder="e.g. Cisco, Coursera, EC-Council"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Date
                    </label>
                    <input
                      type="text"
                      value={newCert.date}
                      onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                      placeholder="e.g. Nov 2025"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Credential Link
                    </label>
                    <input
                      type="text"
                      value={newCert.credentialUrl}
                      onChange={(e) => setNewCert({ ...newCert, credentialUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={newCert.description}
                    onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
                    placeholder="Key concepts, skills covered..."
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
                    Save Certificate
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
