import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Unlock, KeyRound, ShieldAlert, X } from 'lucide-react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import GitHubSection from './sections/GitHubSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  const handleUnlockOwner = (e) => {
    e.preventDefault();
    if (pinInput === '2730' || pinInput === 'cyber' || pinInput === 'admin' || pinInput === '') {
      setIsOwnerMode(true);
      setShowAuthModal(false);
      setPinInput('');
      setAuthError('');
    } else {
      setAuthError('Invalid Security Key / PIN. Try 2730 or cyber.');
    }
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 relative selection:bg-[#00ff9d] selection:text-slate-950">
      {/* Intro Preloader Sequence */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Interactive Cyber Background Grid & Constellations */}
      <CyberBackground />

      {/* Full Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      {/* Owner Mode Status Banner */}
      {isOwnerMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#00ff9d] text-slate-950 px-4 py-1 text-xs font-mono font-bold flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <Unlock className="w-3.5 h-3.5" />
            <span>OWNER MODE ACTIVE: Photo upload & Add Experience/Certifications unlocked.</span>
          </div>
          <button
            onClick={() => setIsOwnerMode(false)}
            className="px-2 py-0.5 rounded bg-slate-950 text-[#00ff9d] text-[10px] uppercase hover:bg-slate-900"
          >
            Lock Mode (Visitor View)
          </button>
        </div>
      )}

      {/* Main Website Flow */}
      <div className={`relative z-10 flex flex-col ${isOwnerMode ? 'pt-6' : ''}`}>
        <Navbar onOpenOwnerAuth={() => setShowAuthModal(true)} isOwnerMode={isOwnerMode} />
        <main>
          <Hero
            isOwnerMode={isOwnerMode}
            onOpenResume={() => setShowResumeModal(true)}
          />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience isOwnerMode={isOwnerMode} />
          <Achievements />
          <Certifications isOwnerMode={isOwnerMode} />
          <GitHubSection />
          <Contact />
        </main>
        <Footer onOpenOwnerAuth={() => setShowAuthModal(true)} isOwnerMode={isOwnerMode} />
      </div>

      {/* Owner Authentication Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-[#00ff9d]/40 rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-[#00ff9d]/30 text-[#00ff9d] flex items-center justify-center mb-4">
                <KeyRound className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-bold text-lg text-white">
                Devatharshini Owner Access
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                Enter your security PIN to unlock photo upload, and Add Experience & Certification sections.
              </p>

              <form onSubmit={handleUnlockOwner} className="space-y-3">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Security PIN (e.g. 2730)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-sm text-slate-200 font-mono"
                  autoFocus
                />

                {authError && (
                  <p className="text-xs font-mono text-rose-400">{authError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs uppercase tracking-wider font-mono hover:bg-[#00e5ff] transition-colors"
                >
                  Unlock Owner Controls
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
