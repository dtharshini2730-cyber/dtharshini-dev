import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  PlusCircle,
  Eye,
  X,
  Download,
  MapPin,
  Building2,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

export default function Certifications({ isOwnerMode = false }) {
  const { certifications, personal } = portfolioData;
  const [certList, setCertList] = useState(certifications.list);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    credentialUrl: '',
    previewImage: '',
    certId: '',
    category: 'Cybersecurity',
    verifiedBy: 'Official Issuer'
  });

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'dcg', label: 'DCG Cybersecurity' },
    { id: 'python', label: 'Python Programming' },
  ];

  const filteredCerts = certList.filter((cert) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dcg') {
      return (
        cert.id.includes('dcg') ||
        cert.title?.toLowerCase().includes('dcg')
      );
    }
    if (activeFilter === 'python') {
      return (
        cert.id.includes('cisco') ||
        cert.title?.toLowerCase().includes('python')
      );
    }
    return true;
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
        previewImage: newCert.previewImage || newCert.credentialUrl,
        certId: newCert.certId || 'VERIFIED-CREDENTIAL',
        category: newCert.category,
        verifiedBy: newCert.verifiedBy || newCert.issuer,
        type: newCert.credentialUrl?.endsWith('.pdf') ? 'pdf' : 'image',
      },
    ];
    setCertList(updated);
    setShowAddModal(false);
    setNewCert({
      title: '',
      issuer: '',
      date: '',
      description: '',
      credentialUrl: '',
      previewImage: '',
      certId: '',
      category: 'Cybersecurity',
      verifiedBy: 'Official Issuer'
    });
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number={certifications.sectionNumber}
        label="CREDENTIALS & WORKSHOPS"
        title={certifications.title}
        subtitle={certifications.subtitle}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((tab) => {
          const count =
            tab.id === 'all'
              ? certList.length
              : certList.filter((c) => {
                  if (tab.id === 'dcg') return c.id.includes('dcg') || c.title?.toLowerCase().includes('dcg');
                  if (tab.id === 'python') return c.id.includes('cisco') || c.title?.toLowerCase().includes('python');
                  return true;
                }).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#00ff9d] to-[#00e5ff] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Verified Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert, index) => (
          <motion.div
            key={cert.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_25px_rgba(0,255,157,0.12)]">
                <div>
                  {/* Top Row: Icon, Cert ID & Date */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 group-hover:border-[#00ff9d]/50 transition-all shadow-md"
                      style={{ color: cert.accent || '#00ff9d' }}
                    >
                      <ShieldCheck className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00ff9d]" />
                        <span>{cert.date}</span>
                      </span>
                      {cert.certId && (
                        <span className="text-[10px] font-mono text-slate-500">
                          ID: <span className="text-slate-400">{cert.certId}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate Badge */}
                  <div className="mb-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded border inline-block font-semibold"
                      style={{
                        backgroundColor: `${cert.accent || '#00ff9d'}15`,
                        borderColor: `${cert.accent || '#00ff9d'}40`,
                        color: cert.accent || '#00ff9d',
                      }}
                    >
                      {cert.badge || 'OFFICIAL CREDENTIAL'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-slate-100 group-hover:text-[#00ff9d] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Venue */}
                  <p className="mt-1.5 text-xs font-mono text-[#00e5ff] font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>

                  {cert.venue && (
                    <p className="mt-1 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                      <span>{cert.venue}</span>
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Card Footer: Verified Badge + Preview & Link Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#00ff9d]" />
                    <span className="truncate">{cert.verifiedBy || 'Verified'}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {cert.previewImage && (
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00ff9d] hover:text-[#00ff9d] text-xs font-mono text-slate-300 transition-colors shadow-sm"
                        title="Preview Certificate"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#00ff9d]" />
                        <span>Preview</span>
                      </button>
                    )}

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00e5ff] hover:text-[#00e5ff] text-xs font-mono text-slate-300 transition-colors"
                      title="Open Original Document"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TiltCard maxTilt={4} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/60 border-2 border-dashed border-slate-800 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#00e5ff] group-hover:scale-105 transition-all">
                    <PlusCircle className="w-6 h-6" />
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                    {certifications.placeholderCard.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-heading font-bold text-lg text-slate-200 group-hover:text-[#00e5ff] transition-colors leading-snug">
                  {certifications.placeholderCard.title}
                </h3>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {certifications.placeholderCard.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {isOwnerMode ? (
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#00e5ff] transition-colors"
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

      {/* High-Definition Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
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
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#00ff9d]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#00e5ff]">
                      {selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Open original document"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950/70">
                <img
                  src={selectedCert.previewImage || selectedCert.credentialUrl}
                  alt={selectedCert.title}
                  className="rounded-xl border border-slate-800 max-h-[65vh] w-auto object-contain shadow-2xl"
                />
              </div>

              {/* Modal Footer info */}
              <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                  <span>{selectedCert.verifiedBy || 'Verified Credential'}</span>
                  {selectedCert.certId && (
                    <span className="text-slate-500">| ID: {selectedCert.certId}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.credentialUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00e5ff] hover:underline flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download / Full Resolution</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                      Certificate ID
                    </label>
                    <input
                      type="text"
                      value={newCert.certId}
                      onChange={(e) => setNewCert({ ...newCert, certId: e.target.value })}
                      placeholder="e.g. DCGCBE1807011"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Credential Link / File Path
                  </label>
                  <input
                    type="text"
                    value={newCert.credentialUrl}
                    onChange={(e) => setNewCert({ ...newCert, credentialUrl: e.target.value })}
                    placeholder="/assets/certificates/... or https://..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:border-[#00ff9d] focus:outline-none"
                  />
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
