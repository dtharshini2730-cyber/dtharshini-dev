import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Mail, Lock, Unlock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenOwnerAuth, isOwnerMode }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#05070c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-slate-900 border border-[#00ff9d]/40 flex items-center justify-center text-[#00ff9d]">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="font-heading font-bold text-slate-100 text-base tracking-wide">
              {personal.name}
            </span>
          </div>
          <p className="font-mono text-xs text-slate-500 mt-1">
            {personal.role}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#a855f7] hover:border-[#a855f7]/40 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright, Owner Key & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 {personal.name}. All rights reserved.</span>
            <button
              onClick={onOpenOwnerAuth}
              className="text-slate-600 hover:text-[#00ff9d] transition-colors p-1"
              title="Owner Authentication"
            >
              {isOwnerMode ? <Unlock className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Lock className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00ff9d] hover:border-[#00ff9d]/30 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
