import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Shield, Sparkles } from 'lucide-react';

export default function Marquee() {
  const keywords = portfolioData.marqueeKeywords;

  return (
    <section className="relative py-6 bg-slate-950/80 border-y border-slate-800/80 overflow-hidden backdrop-blur-md">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070a10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070a10] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none">
        <div className="animate-marquee flex items-center gap-8">
          {[...keywords, ...keywords, ...keywords].map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-slate-300 hover:text-[#00ff9d] transition-colors uppercase whitespace-nowrap">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]/60 shadow-[0_0_6px_#00ff9d]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
