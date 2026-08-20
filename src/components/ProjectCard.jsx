import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProjectCard({ project, index }) {
  return (
    <TiltCard
      maxTilt={6}
      dataCursor="project"
      dataCursorText="VIEW"
      className="h-full"
    >
      <div className="h-full rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/40 transition-all duration-300 flex flex-col overflow-hidden group shadow-xl">
        
        {/* Project Visual Preview Area */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800 block cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const baseName = project.image.replace('.png', '.svg');
              e.currentTarget.src = baseName;
            }}
          />

          {/* Cyber Overlay Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

          {/* Project Number Badge */}
          <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 backdrop-blur-md">
            <span className="font-mono text-xs font-bold text-[#00ff9d]">
              #{project.id}
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-[#00e5ff]/30 text-[11px] font-mono text-[#00e5ff] backdrop-blur-md">
            {project.category}
          </div>
        </a>

        {/* Card Content Body */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            {/* Title with Hover Arrow */}
            <div className="flex items-center justify-between gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-xl text-slate-100 group-hover:text-[#00ff9d] transition-colors leading-tight block hover:underline"
              >
                {project.title}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-[#00ff9d] group-hover:bg-[#00ff9d]/10 transition-colors"
                aria-label="Open project on GitHub"
              >
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00ff9d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Tagline */}
            <p className="mt-1 text-xs font-mono text-[#00e5ff] font-medium">
              {project.tagline}
            </p>

            {/* Detailed Description */}
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-4">
            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-[#00ff9d] hover:text-[#00ff9d] text-xs font-mono text-slate-300 transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#00ff9d] text-slate-950 font-bold text-xs font-mono hover:bg-[#00e5ff] transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </TiltCard>
  );
}
