import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink, Download, GraduationCap, Briefcase, Award, Shield, CheckCircle2, Phone, Mail, MapPin, Github, Linkedin, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-[#0d131f] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-[#070a10] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-[#00ff9d]/40 flex items-center justify-center text-[#00ff9d]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-lg text-white">
                  Devatharshini R — Curriculum Vitae
                </h3>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-wider block">
                  OFFICIAL RESUME PREVIEW
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-[#00e5ff]/50 text-[#00e5ff] hover:bg-[#00e5ff] hover:text-slate-950 text-xs font-mono font-bold transition-all shadow-md"
              >
                <span>Open PDF in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body - Official Resume Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8 bg-[#0b101b] text-slate-200 font-sans">
            
            {/* Resume Header */}
            <div className="text-center pb-6 border-b border-slate-800">
              <h1 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-wide">
                DEVATHARSHINI R
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#00ff9d] mt-1 font-semibold">
                CSE CYBERSECURITY SPECIALIST • DEVELOPER
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#00e5ff]" />
                  9345419406
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#00e5ff]" />
                  dtharshini2730@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                  Coimbatore, India
                </span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#00ff9d]"
                >
                  <Github className="w-3.5 h-3.5 text-[#00ff9d]" />
                  github.com/dtharshini2730-cyber
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#00e5ff]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00e5ff]" />
                  linkedin.com/in/devatharshini-r-70a221427
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#00ff9d] uppercase mb-2">
                CAREER OBJECTIVE
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                Motivated and technically skilled aspiring Cybersecurity professional pursuing BE CSE with Cybersecurity. Interested in networking, Linux, Python and secure computing, with hands-on practice through security and web development projects. Eager to contribute to cybersecurity and software projects while building practical industry experience.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#00ff9d] uppercase mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#00ff9d]" />
                EDUCATION
              </h4>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="font-heading font-bold text-sm text-white">
                      BE in CSE with Cybersecurity (Pursuing)
                    </h5>
                    <p className="text-xs text-slate-400 font-mono">
                      KGiSL Institute of Technology
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-[#00e5ff] font-semibold">
                      2029 • 8.8 CGPA (First Year)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="font-heading font-bold text-sm text-white">
                      HSC — 12th Standard
                    </h5>
                    <p className="text-xs text-slate-400 font-mono">
                      Dr V Gengusamy Naidu Matric Higher Secondary School
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-[#00ff9d] font-semibold">
                      2025 • 94.1%
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="font-heading font-bold text-sm text-white">
                      SSLC — 10th Standard
                    </h5>
                    <p className="text-xs text-slate-400 font-mono">
                      Dr V Gengusamy Naidu Matric Higher Secondary School
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-[#00ff9d] font-semibold">
                      2023 • 88.8%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Projects from Resume */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#00ff9d] uppercase mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00ff9d]" />
                PROJECTS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    name: "Basic Network Sniffer",
                    tech: "Python / Scapy",
                    desc: "Developed a Python-based network sniffer to capture and inspect network packets for basic traffic analysis."
                  },
                  {
                    name: "Password Strength Checker",
                    tech: "Python",
                    desc: "Built a utility to evaluate password strength and provide security-oriented feedback."
                  },
                  {
                    name: "Secure Code Review",
                    tech: "Python",
                    desc: "Created a security-focused code review project to identify common coding weaknesses and promote secure coding practices."
                  },
                  {
                    name: "Phishing Awareness",
                    tech: "HTML / CSS",
                    desc: "Developed a web-based awareness project focused on recognizing and understanding phishing threats."
                  },
                  {
                    name: "Image Encryption",
                    tech: "Python",
                    desc: "Implemented an image-encryption project to explore confidentiality and fundamental cryptographic concepts."
                  },
                  {
                    name: "Caesar Cipher",
                    tech: "Python",
                    desc: "Implemented a classical Caesar cipher to understand introductory encryption and cryptography concepts."
                  },
                ].map((proj, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h5 className="font-heading font-semibold text-xs sm:text-sm text-slate-100">
                        {proj.name}
                      </h5>
                      <span className="text-[10px] font-mono text-[#00e5ff] px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                        {proj.tech}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Technical Skills */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#00ff9d] uppercase mb-2">
                  TECHNICAL SKILLS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'C (Basics)', 'HTML', 'CSS', 'Git', 'Linux'].map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#00e5ff] uppercase mb-2">
                  SOFT SKILLS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Adaptability', 'Leadership', 'Time Management', 'Problem-solving', 'Risk Management', 'Critical Thinking'].map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Award className="w-5 h-5 text-[#00ff9d] shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">CERTIFICATION</span>
                  <a
                    href="/assets/Cisco_Python.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-semibold text-xs sm:text-sm text-slate-200 hover:text-[#00ff9d] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Python Essentials 1 — Cisco (Nov 2025)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00ff9d]" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Languages className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">LANGUAGES KNOWN</span>
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-200">
                    Tamil, English, Telugu (Native)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#070a10] border-t border-slate-800 flex items-center justify-between shrink-0">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#00ff9d] hover:underline flex items-center gap-1.5"
            >
              <span>Download / Open Resume PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-mono"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
