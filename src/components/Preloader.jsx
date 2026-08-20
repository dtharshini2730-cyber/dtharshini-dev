import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SECURITY PROTOCOLS...");

  useEffect(() => {
    const statuses = [
      "INITIALIZING SYSTEM...",
      "LOADING NEURAL WEIGHTS...",
      "VERIFYING INTEGRITY...",
      "SYSTEM READY // R DEVATHARSHINI"
    ];

    const interval = setInterval(() => {
      setPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 18) + 8;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText(statuses[3]);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        const statusIdx = Math.min(Math.floor((next / 100) * (statuses.length - 1)), statuses.length - 2);
        setStatusText(statuses[statusIdx]);
        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070a10] text-slate-100"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Glowing Logo Icon */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-slate-900/90 border border-[#00ff9d]/40 shadow-[0_0_30px_rgba(0,255,157,0.3)]"
        >
          <span className="font-heading font-extrabold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#00e5ff]">
            RD
          </span>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#00ff9d] animate-ping" />
        </motion.div>

        {/* Progress Display */}
        <div className="w-full">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-[#00ff9d]">
              <Terminal className="w-3.5 h-3.5" />
              {statusText}
            </span>
            <span className="font-semibold text-slate-200">{percent}%</span>
          </div>

          {/* Progress Track */}
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00ff9d] via-[#00e5ff] to-[#a855f7] rounded-full"
              style={{ width: `${percent}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>

        {/* Secondary Subtitle */}
        <p className="mt-4 font-mono text-[11px] tracking-widest text-slate-500 uppercase">
          SECURE SYSTEM INTERFACE • 2026
        </p>
      </div>
    </motion.div>
  );
}
