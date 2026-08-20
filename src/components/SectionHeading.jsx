import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  number = "01",
  label = "SECTION",
  title = "Section Title",
  subtitle = "",
  centered = false,
  badge = null
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {/* Top Number / Label Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-[#00ff9d] mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="text-[#00e5ff] font-bold">{number}</span>
        <span className="text-slate-600">/</span>
        <span className="tracking-widest uppercase text-slate-300">{label}</span>
        {badge && (
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30">
            {badge}
          </span>
        )}
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-slate-100 tracking-tight leading-snug"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle Cyber Accent Divider */}
      <div className={`mt-4 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className="w-8 h-[2px] bg-[#00ff9d]" />
        <div className="w-2 h-[2px] bg-[#00e5ff]" />
        <div className="w-1 h-[2px] bg-slate-700" />
      </div>
    </div>
  );
}
