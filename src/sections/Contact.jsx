import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [lastMethod, setLastMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const constructEmailBody = () => {
    return `Hello Devatharshini,

You have received a new message from your portfolio:

Name: ${formData.name || 'Anonymous Visitor'}
Contact: ${formData.emailOrPhone || 'Not provided'}
Subject: ${formData.subject || 'Portfolio Inquiry'}

Message:
${formData.message || ''}

---
Sent via portfolio contact system`;
  };

  // 1. Send via Gmail Web (Direct browser compose - works on all machines without desktop mail app)
  const sendViaGmail = (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(constructEmailBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    triggerSuccess('Gmail Web (dtharshini2730@gmail.com)');
  };

  // 2. Send via WhatsApp (+91 9345419406)
  const sendViaWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.message) return;

    const text = encodeURIComponent(
      `*New Portfolio Message*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞/✉️ *Contact:* ${formData.emailOrPhone}\n` +
      `📌 *Subject:* ${formData.subject || 'General Inquiry'}\n\n` +
      `💬 *Message:*\n${formData.message}`
    );
    const waUrl = `https://wa.me/91${personal.phone}?text=${text}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    triggerSuccess('WhatsApp (+91 9345419406)');
  };

  // 3. Send via Default Mail App (Outlook / Apple Mail)
  const sendViaDefaultMail = (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(constructEmailBody());
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    triggerSuccess('Default Email App');
  };

  const triggerSuccess = (methodName) => {
    setLastMethod(methodName);
    setSentSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00ff9d', '#00e5ff', '#a855f7'],
    });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="08"
        label="GET IN TOUCH"
        title="Let's build something meaningful."
        subtitle="Have a cybersecurity challenge, development project, hackathon team, or internship opportunity? Reach out directly to my email or phone."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Direct Contact & Channels */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Email Direct Channel Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/40 transition-all shadow-xl group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-[#00ff9d] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00ff9d] block">
                  PRIMARY EMAIL
                </span>
                <h4 className="font-heading font-bold text-base text-slate-200">
                  {personal.email}
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Send an email directly via Gmail Web or your preferred desktop email client.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 hover:bg-[#00ff9d] text-[#00ff9d] hover:text-slate-950 text-xs font-mono font-bold text-center flex items-center justify-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Gmail</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
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

          {/* Phone & WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#22c55e]/40 transition-all shadow-xl group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-[#22c55e] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#22c55e] block">
                  PHONE & WHATSAPP
                </span>
                <h4 className="font-heading font-bold text-base text-slate-200">
                  +91 {personal.phone}
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Chat instantly on WhatsApp or call for immediate cybersecurity opportunities.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/91${personal.phone}?text=Hi%20Devatharshini!%20Connecting%20from%20your%20portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 text-xs font-mono text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${personal.phone}`}
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Call phone number"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-[#00ff9d]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
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
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00e5ff]/50 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 text-[#00e5ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-slate-200 group-hover:text-white">
                    LinkedIn
                  </h5>
                  <span className="text-[10px] font-mono text-slate-400">Professional</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00e5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00ff9d]/50 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 text-[#00ff9d] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-slate-200 group-hover:text-white">
                    GitHub
                  </h5>
                  <span className="text-[10px] font-mono text-slate-400">Repositories</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#00ff9d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Response Time SLA Banner */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
            <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>Response Guarantee: <strong>Reply within 24 Hours</strong></span>
          </div>

        </div>

        {/* Right Column: Interactive Contact Dispatch Center */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between gap-2 mb-6">
              <h3 className="font-heading font-bold text-xl text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00ff9d]" />
                Send a Direct Message
              </h3>
              <span className="text-[10px] font-mono text-[#00ff9d] px-2.5 py-1 rounded bg-[#00ff9d]/10 border border-[#00ff9d]/30 font-semibold">
                INSTANT DISPATCH READY
              </span>
            </div>

            <form className="space-y-4">
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
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email or Phone <span className="text-[#00ff9d]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    placeholder="e.g. yourname@gmail.com or +91..."
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
                  placeholder="e.g. Cybersecurity Project, Internship, or Hackathon"
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
                  placeholder="Type your message, collaboration details, or questions here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00ff9d] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 transition-colors font-sans resize-none"
                />
              </div>

              <AnimatePresence>
                {sentSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-mono space-y-1"
                  >
                    <div className="flex items-center gap-2 font-bold text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message Prepared via {lastMethod}!</span>
                    </div>
                    <p className="text-[11px] text-emerald-400/90 pl-6">
                      Your message has been formatted and opened directly. Just click <strong>Send</strong> in Gmail or WhatsApp to deliver it straight to Devatharshini!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Instant Dispatch Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Select how you want to send this message:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Button 1: Send via Gmail (Recommended) */}
                  <button
                    type="button"
                    onClick={sendViaGmail}
                    disabled={!formData.name || !formData.message}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#00ff9d] to-[#00e5ff] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-slate-950" />
                    <span>Send via Gmail Web</span>
                  </button>

                  {/* Button 2: Send via WhatsApp */}
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    disabled={!formData.name || !formData.message}
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                {/* Alternative Mail Client Button */}
                <button
                  type="button"
                  onClick={sendViaDefaultMail}
                  disabled={!formData.name || !formData.message}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Or use Default Desktop Mail Client (Outlook / Mail App)</span>
                </button>
              </div>

              <div className="text-center pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-500">
                  Direct Target: <strong className="text-slate-400">{personal.email}</strong> • Mobile: <strong className="text-slate-400">+91 {personal.phone}</strong>
                </span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
