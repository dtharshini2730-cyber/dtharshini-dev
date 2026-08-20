import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'link', 'button', 'project', 'image', 'hidden'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const trailCanvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Add particle to trail
      if (trailCanvasRef.current && Math.random() > 0.3) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2.5 + 1,
          alpha: 0.6,
          color: Math.random() > 0.5 ? '#00ff9d' : '#00e5ff',
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
        });
      }

      // Detect hover target
      const target = e.target;
      const projectEl = target.closest('[data-cursor="project"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const buttonEl = target.closest('button, .btn, [role="button"]');
      const linkEl = target.closest('a, [data-cursor="link"]');

      if (projectEl) {
        setCursorType('project');
        setCursorText(projectEl.getAttribute('data-cursor-text') || 'VIEW');
      } else if (exploreEl) {
        setCursorType('image');
        setCursorText('EXPLORE');
      } else if (buttonEl) {
        setCursorType('button');
        setCursorText('');
      } else if (linkEl) {
        setCursorType('link');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Particle animation loop
    let animationFrameId;
    const canvas = trailCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.025;

          if (p.alpha <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        // Limit particles array
        if (particlesRef.current.length > 40) {
          particlesRef.current.splice(0, particlesRef.current.length - 40);
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Lightweight Cursor Particle Trail */}
      <canvas
        ref={trailCanvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />

      {/* Outer Easing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full"
        animate={{
          x: mousePosition.x - (cursorType === 'project' || cursorType === 'image' ? 36 : cursorType === 'button' ? 24 : 18),
          y: mousePosition.y - (cursorType === 'project' || cursorType === 'image' ? 36 : cursorType === 'button' ? 24 : 18),
          width: cursorType === 'project' || cursorType === 'image' ? 72 : cursorType === 'button' ? 48 : cursorType === 'link' ? 40 : 36,
          height: cursorType === 'project' || cursorType === 'image' ? 72 : cursorType === 'button' ? 48 : cursorType === 'link' ? 40 : 36,
          borderColor: cursorType === 'project' ? '#00ff9d' : cursorType === 'button' ? '#00e5ff' : 'rgba(0, 255, 157, 0.5)',
          backgroundColor: cursorType === 'project' || cursorType === 'image' ? 'rgba(7, 10, 16, 0.85)' : cursorType === 'button' ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
          scale: cursorType === 'button' ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 280,
          mass: 0.5,
        }}
        style={{
          borderWidth: cursorType === 'project' ? '1.5px' : '1px',
          boxShadow: cursorType === 'project' 
            ? '0 0 20px rgba(0, 255, 157, 0.4), inset 0 0 10px rgba(0, 255, 157, 0.2)' 
            : '0 0 10px rgba(0, 255, 157, 0.15)',
          backdropFilter: cursorType === 'project' || cursorType === 'image' ? 'blur(4px)' : 'none',
        }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#00ff9d] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#00ff9d]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: cursorType === 'project' || cursorType === 'image' ? 0 : 6,
          height: cursorType === 'project' || cursorType === 'image' ? 0 : 6,
          opacity: cursorType === 'project' || cursorType === 'image' ? 0 : 1,
          scale: cursorType === 'button' ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 600,
          mass: 0.1,
        }}
        style={{
          boxShadow: '0 0 12px 2px #00ff9d',
        }}
      />
    </>
  );
}
