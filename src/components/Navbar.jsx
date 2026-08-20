import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ArrowUpRight, Lock, Unlock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenOwnerAuth, isOwnerMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#070a10]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Senior Portfolio Style Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-[#00ff9d]/40 flex items-center justify-center group-hover:border-[#00ff9d] transition-colors duration-300 shadow-[0_0_12px_rgba(0,255,157,0.2)]">
            <Shield className="w-4 h-4 text-[#00ff9d] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm sm:text-base tracking-wider text-slate-100 group-hover:text-[#00ff9d] transition-colors">
              R DEVATHARSHINI
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#00e5ff] uppercase -mt-0.5">
              CYBERSECURITY • DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9d]/20 to-[#00e5ff]/20 border border-[#00ff9d]/40"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action & Owner Key */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Owner Access Icon Button */}
          <button
            onClick={onOpenOwnerAuth}
            className={`p-2 rounded-lg border transition-colors ${
              isOwnerMode
                ? 'bg-[#00ff9d]/10 border-[#00ff9d] text-[#00ff9d]'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/40'
            }`}
            title={isOwnerMode ? "Owner Mode Unlocked" : "Owner Login"}
          >
            {isOwnerMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-slate-900 border border-[#00ff9d]/40 text-[#00ff9d] hover:bg-[#00ff9d] hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.1)] hover:shadow-[0_0_20px_rgba(0,255,157,0.4)]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenOwnerAuth}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00ff9d]"
            title="Owner Login"
          >
            {isOwnerMode ? <Unlock className="w-4 h-4 text-[#00ff9d]" /> : <Lock className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00ff9d] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#070a10]/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-800/70 text-[#00ff9d] border-l-2 border-[#00ff9d]'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500">#{link.href.substring(1)}</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-800/80 mt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#00ff9d] text-slate-950 font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,255,157,0.3)]"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
