import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, GitBranch, ArrowUpRight, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';

export default function GitHubSection() {
  const { github } = portfolioData;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="07"
        label="OPEN SOURCE"
        title="Engineering on GitHub"
        subtitle="Public source repositories, security tools, and exploratory code snippets."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: Profile & Stats Overview */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="h-full p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/30 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00ff9d] mb-6 shadow-[0_0_20px_rgba(0,255,157,0.15)]">
                <Github className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider block mb-1">
                PUBLIC REPOSITORY REPO
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-100">
                R Devatharshini
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Explore modular cybersecurity scripts, neural network architectures, and full-stack web experiments.
              </p>

              <div className="mt-6 space-y-3">
                {github.highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono">
                    <span className="text-slate-400">{h.label}</span>
                    <span className="text-[#00ff9d] font-semibold">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 border border-[#00ff9d]/40 text-[#00ff9d] hover:bg-[#00ff9d] hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Grid: Pinned Repositories */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {github.pinnedRepos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={5} className="h-full">
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#00e5ff]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#00ff9d]" />
                        <h4 className="font-mono font-bold text-sm text-slate-200 group-hover:text-[#00ff9d] transition-colors">
                          {repo.name}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                        {repo.stars}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.langColor }}
                      />
                      <span className="text-slate-300">{repo.language}</span>
                    </div>

                    <a
                      href={`${github.profileUrl}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 group-hover:text-[#00e5ff] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
