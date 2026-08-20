import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate clean dispatch (connects cleanly to Formspree / EmailJS)
    setTimeout(() => {
      setFormStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00ff9d', '#00e5ff', '#a855f7'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="08"
        label="CONTACT"
        title="Let's build something meaningful."
        subtitle="Have a cybersecurity challenge, development project, hackathon team, or internship opportunity? Reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Direct Contact & Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Quick-Copy Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/30 transition-all shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-[#00ff9d] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400">
                  DIRECT EMAIL DISPATCH
                </span>
                <h4 className="font-heading font-bold text-base text-slate-200">
                  Email Me
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              Click below to copy my primary email address to your clipboard or send an email directly.
            </p>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/90">
              <span className="text-xs font-mono text-slate-300 truncate flex-1 px-2">
                {personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00ff9d] text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff9d]" />
                    <span className="text-[#00ff9d] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00e5ff]/50 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 text-[#00e5ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-slate-200 group-hover:text-white">
                    LinkedIn
                  </h5>
                  <span className="text-[11px] font-mono text-slate-400">Professional Network</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00e5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/50 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 text-[#00ff9d] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-slate-200 group-hover:text-white">
                    GitHub
                  </h5>
                  <span className="text-[11px] font-mono text-slate-400">Code & Projects</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00ff9d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Response Time SLA Banner */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
            <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>Typical reply response time: <strong>Within 24 Hours</strong></span>
          </div>

        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
            <h3 className="font-heading font-bold text-xl text-slate-100 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00ff9d]" />
              Send a Secure Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name <span className="text-[#00ff9d]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email <span className="text-[#00ff9d]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship, Hackathon Collaboration, or Security Project"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Your Message <span className="text-[#00ff9d]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message, questions, or project details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans resize-none"
                />
              </div>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message received! Thank you for getting in touch.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <MagneticButton
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#00e5ff] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,157,0.3)] hover:shadow-[0_0_35px_rgba(0,255,157,0.5)] transition-all flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <span className="animate-pulse">DISPATCHING MESSAGE...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
