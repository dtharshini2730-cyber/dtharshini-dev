import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, Shield, ArrowUpRight, CheckCircle2, Camera, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import FloatingIcons from '../components/FloatingIcons';
import MagneticButton from '../components/MagneticButton';

export default function Hero({ isOwnerMode = false, onOpenResume }) {
  const { personal } = portfolioData;
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [profileImg, setProfileImg] = useState(() => {
    return localStorage.getItem('rd_profile_photo') || personal.profileImage;
  });
  const fileInputRef = useRef(null);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    setMouseOffset({ x: x * 12, y: y * 12 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setProfileImg(result);
          localStorage.setItem('rd_profile_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Single-line Senior Portfolio Name & Typography */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Cyber Terminal Prefix */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00ff9d]/40 text-xs font-mono text-slate-200 mb-5 shadow-[0_0_20px_rgba(0,255,157,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
            <span className="text-[#00ff9d] font-bold tracking-widest uppercase">
              // {personal.role}
            </span>
          </motion.div>

          {/* Senior Portfolio Style: Clean Single-Line Name Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <span className="font-mono text-xs sm:text-sm text-[#00e5ff] tracking-widest uppercase font-semibold block mb-1">
              HELLO, I AM
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-none whitespace-normal sm:whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00ff9d] drop-shadow-[0_0_25px_rgba(0,255,157,0.25)]">
                {personal.name}
              </span>
            </h1>
          </motion.div>

          {/* Main Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-heading font-medium text-base sm:text-xl md:text-2xl text-slate-200 tracking-tight leading-snug"
          >
            {personal.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 max-w-xl leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* Quick Security Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {['Defensive Security', 'Python Automation', 'Packet Inspection', 'Full-Stack Apps'].map((pill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d]" />
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons with View Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#00e5ff] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,157,0.35)] hover:shadow-[0_0_35px_rgba(0,255,157,0.6)] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4" />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:border-[#00ff9d] hover:text-[#00ff9d] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Let's Connect
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={onOpenResume}
              className="px-5 py-3.5 rounded-xl bg-slate-900/80 border border-[#00e5ff]/40 hover:border-[#00e5ff] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00e5ff]" />
                View Resume
              </span>
            </MagneticButton>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Profile Photo Presentation + Floating Elements */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
          <div
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
              transition: 'transform 0.25s ease-out',
            }}
          >
            {/* Outer Cyber Pulse Auras */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00ff9d]/20 via-[#00e5ff]/15 to-[#a855f7]/20 blur-3xl opacity-60 animate-pulse-slow" />
            
            {/* Rotating Decorative Cyber Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-[-12px] sm:inset-[-18px] rounded-full border border-dashed border-[#00ff9d]/30 pointer-events-none"
            />

            {/* Rotating Decorative Cyber Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
              className="absolute inset-[-4px] sm:inset-[-6px] rounded-full border border-dotted border-[#00e5ff]/40 pointer-events-none"
            />

            {/* Profile Frame Container */}
            <div
              className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-[#00ff9d]/40 via-slate-800 to-[#a855f7]/40 shadow-[0_0_50px_rgba(0,255,157,0.2)] group"
              data-cursor="explore"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#070a10] border-2 border-slate-900 relative">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-700 select-none"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/profile.svg';
                  }}
                />

                {/* Owner-Only Photo Upload Overlay */}
                {isOwnerMode && (
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center cursor-pointer z-30">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="px-4 py-2 rounded-xl bg-[#00ff9d] text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,157,0.5)] hover:scale-105 transition-transform"
                    >
                      <Camera className="w-4 h-4" />
                      <span>Upload Profile Photo</span>
                    </button>
                    <span className="text-[10px] font-mono text-slate-300">
                      Owner Access Verified
                    </span>
                  </div>
                )}

                {/* Subtle Inner Glass Vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#070a10]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Glass Badges Surrounding Photo */}
            <FloatingIcons mouseOffset={mouseOffset} />
          </div>
        </div>

      </div>
    </section>
  );
}
