import React, { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Particle nodes for cyber constellation
    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.1,
      });
    }

    const render = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Mouse-following soft radial cyber glow
      const radialGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      radialGradient.addColorStop(0, 'rgba(0, 255, 157, 0.06)');
      radialGradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.025)');
      radialGradient.addColorStop(1, 'rgba(7, 10, 16, 0)');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Fixed subtle ambient spots
      const ambientGrad1 = ctx.createRadialGradient(width * 0.85, height * 0.2, 0, width * 0.85, height * 0.2, 400);
      ambientGrad1.addColorStop(0, 'rgba(168, 85, 247, 0.04)');
      ambientGrad1.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGrad1;
      ctx.fillRect(0, 0, width, height);

      const ambientGrad2 = ctx.createRadialGradient(width * 0.15, height * 0.8, 0, width * 0.15, height * 0.8, 400);
      ambientGrad2.addColorStop(0, 'rgba(0, 229, 255, 0.035)');
      ambientGrad2.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGrad2;
      ctx.fillRect(0, 0, width, height);

      // 3. Constellation nodes & links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff9d';
        ctx.globalAlpha = p.baseAlpha;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#00ff9d';
            ctx.globalAlpha = (1 - dist / 130) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        const dmx = p.x - mouse.x;
        const dmy = p.y - mouse.y;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#00e5ff';
          ctx.globalAlpha = (1 - distMouse / mouse.radius) * 0.25;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-35" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
