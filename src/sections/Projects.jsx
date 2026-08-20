import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'cyber', label: 'Cybersecurity' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'web', label: 'Web & Tools' },
];

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = projects.list.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'cyber') {
      return (
        project.category.toLowerCase().includes('cyber') ||
        project.category.toLowerCase().includes('security') ||
        project.category.toLowerCase().includes('devsec')
      );
    }
    if (selectedFilter === 'ai') {
      return (
        project.category.toLowerCase().includes('ai') ||
        project.category.toLowerCase().includes('neural') ||
        project.category.toLowerCase().includes('learning') ||
        project.category.toLowerCase().includes('vision')
      );
    }
    if (selectedFilter === 'web') {
      return (
        project.category.toLowerCase().includes('web') ||
        project.category.toLowerCase().includes('application')
      );
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          number={projects.sectionNumber}
          label="SELECTED WORK"
          title={projects.title}
          subtitle={projects.subtitle}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-[#00ff9d] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
