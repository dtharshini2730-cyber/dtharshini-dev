import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function FloatingIcons({ mouseOffset = { x: 0, y: 0 } }) {
  const [hoveredId, setHoveredId] = useState(null);

  // Configuration for 8 surrounding glass bubbles
  const floatingItems = [
    {
      id: 'cyber',
      emoji: '🛡️',
      label: 'Cybersecurity',
      desc: 'Defense & Architecture',
      positionStyle: 'top-[0%] left-[-4%] sm:left-[-6%]',
      floatConfig: { y: [-6, 6, -6], rotate: [-4, 4, -4], duration: 4.2, delay: 0 },
      parallaxFactor: 1.8,
    },
    {
      id: 'code',
      emoji: '💻',
      label: 'Development',
      desc: 'Modern Systems',
      positionStyle: 'top-[-2%] right-[-4%] sm:right-[-6%]',
      floatConfig: { y: [5, -7, 5], rotate: [3, -3, 3], duration: 4.8, delay: 0.6 },
      parallaxFactor: -1.6,
    },
    {
      id: 'python',
      emoji: '🐍',
      label: 'Python',
      desc: 'Scapy, AI & Automation',
      positionStyle: 'top-[32%] left-[-10%] sm:left-[-12%]',
      floatConfig: { y: [-8, 4, -8], rotate: [-5, 5, -5], duration: 5.2, delay: 1.2 },
      parallaxFactor: 2.2,
    },
    {
      id: 'security',
      emoji: '🔐',
      label: 'Network Security',
      desc: 'Packet & Protocol Defense',
      positionStyle: 'top-[34%] right-[-10%] sm:right-[-12%]',
      floatConfig: { y: [6, -6, 6], rotate: [4, -4, 4], duration: 4.5, delay: 1.8 },
      parallaxFactor: -2.0,
    },
    {
      id: 'ai',
      emoji: '🤖',
      label: 'AI & Neural Nets',
      desc: 'TensorFlow / Keras',
      positionStyle: 'bottom-[22%] left-[-6%] sm:left-[-8%]',
      floatConfig: { y: [-5, 7, -5], rotate: [-3, 3, -3], duration: 4.9, delay: 0.9 },
      parallaxFactor: 1.5,
    },
    {
      id: 'web',
      emoji: '🌐',
      label: 'Web Architecture',
      desc: 'Flask, REST & UI',
      positionStyle: 'bottom-[24%] right-[-6%] sm:right-[-8%]',
      floatConfig: { y: [7, -5, 7], rotate: [4, -4, 4], duration: 5.4, delay: 1.5 },
      parallaxFactor: -1.7,
    },
    {
      id: 'tech',
      emoji: '⚡',
      label: 'Secure Systems',
      desc: 'Resilient Design',
      positionStyle: 'bottom-[-6%] left-[10%] sm:left-[12%]',
      floatConfig: { y: [-6, 6, -6], rotate: [-4, 4, -4], duration: 4.3, delay: 2.1 },
      parallaxFactor: 1.2,
    },
    {
      id: 'projects',
      emoji: '🚀',
      label: 'Practical Innovation',
      desc: 'Hackathons & Prototypes',
      positionStyle: 'bottom-[-4%] right-[10%] sm:right-[12%]',
      floatConfig: { y: [6, -6, 6], rotate: [5, -5, 5], duration: 4.7, delay: 0.4 },
      parallaxFactor: -1.4,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {floatingItems.map((item) => {
        const isHovered = hoveredId === item.id;
        // Compute parallax displacement
        const px = mouseOffset.x * item.parallaxFactor;
        const py = mouseOffset.y * item.parallaxFactor;

        return (
          <div
            key={item.id}
            className={`absolute ${item.positionStyle} pointer-events-auto`}
            style={{
              transform: `translate(${px}px, ${py}px)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
          >
            <motion.div
              animate={{
                y: item.floatConfig.y,
                rotate: item.floatConfig.rotate,
              }}
              transition={{
                repeat: Infinity,
                duration: item.floatConfig.duration,
                ease: 'easeInOut',
                delay: item.floatConfig.delay,
              }}
              className="relative group"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glass Bubble Button */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? 'bg-slate-900/90 border-[#00ff9d] shadow-[0_0_25px_rgba(0,255,157,0.5)]'
                    : 'bg-slate-900/60 border-slate-700/60 hover:border-[#00e5ff]/60 shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
                } border backdrop-blur-md`}
              >
                <span className="text-xl sm:text-2xl select-none group-hover:scale-110 transition-transform">
                  {item.emoji}
                </span>

                {/* Ambient pulse dot */}
                <div
                  className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full transition-colors ${
                    isHovered ? 'bg-[#00ff9d] shadow-[0_0_8px_#00ff9d]' : 'bg-[#00e5ff]/60'
                  }`}
                />
              </motion.div>

              {/* Animated Floating Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute z-50 left-1/2 -translate-x-1/2 -top-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#070a10]/95 border border-[#00ff9d]/50 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl pointer-events-none"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-mono font-semibold text-[#00ff9d] tracking-wide">
                        {item.label}
                      </span>
                      <span className="text-[9px] text-slate-400 font-sans">
                        {item.desc}
                      </span>
                    </div>
                    {/* Tooltip beak */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#00ff9d]/50" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
