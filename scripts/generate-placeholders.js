import fs from 'fs';
import path from 'path';

const projects = [
  { id: 'cybershield', title: 'CyberShield AI', subtitle: 'Threat Detection Engine', icon: '🛡️', color: '#00ff9d', bg: '#0b1622' },
  { id: 'stone-paper-scissors', title: 'Hand War CV', subtitle: 'Gesture Recognition', icon: '✊✋✌️', color: '#00e5ff', bg: '#0b1828' },
  { id: 'network-sniffer', title: 'Network Sniffer', subtitle: 'Scapy Packet Analysis', icon: '📡', color: '#05df82', bg: '#081a18' },
  { id: 'phishing-awareness', title: 'Phishing Awareness', subtitle: 'Social Engineering Sim', icon: '🎣', color: '#a855f7', bg: '#170c24' },
  { id: 'secure-code-review', title: 'Secure Code Review', subtitle: 'Vulnerability Analyzer', icon: '🔍', color: '#38bdf8', bg: '#0c1a29' },
  { id: 'student-success', title: 'Student Success AI', subtitle: 'Performance Analytics', icon: '📊', color: '#818cf8', bg: '#12122b' },
  { id: 'student-prediction', title: 'Pass/Fail Prediction', subtitle: 'Deep Neural Network', icon: '🧠', color: '#c084fc', bg: '#1c102c' },
  { id: 'thirukkural', title: 'Thirukkural App', subtitle: 'Bilingual Literature', icon: '📜', color: '#2dd4bf', bg: '#091c1a' },
];

function createProjectSvg(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.bg}" />
      <stop offset="100%" stop-color="#070a10" />
    </linearGradient>
    <linearGradient id="glow-${p.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.color}" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#00e5ff" stop-opacity="0.2" />
    </linearGradient>
    <pattern id="grid-${p.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="480" fill="url(#bg-${p.id})" />
  <rect width="800" height="480" fill="url(#grid-${p.id})" />
  
  <!-- Cyber Geometric Accents -->
  <circle cx="650" cy="120" r="180" fill="${p.color}" opacity="0.08" filter="blur(40px)" />
  <circle cx="150" cy="380" r="140" fill="#00e5ff" opacity="0.06" filter="blur(30px)" />
  
  <rect x="40" y="40" width="720" height="400" rx="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  
  <!-- Top decorative bar -->
  <circle cx="70" cy="70" r="5" fill="#ef4444" opacity="0.8" />
  <circle cx="90" cy="70" r="5" fill="#eab308" opacity="0.8" />
  <circle cx="110" cy="70" r="5" fill="#22c55e" opacity="0.8" />
  <text x="140" y="74" fill="#64748b" font-family="monospace" font-size="12">MODULE // ${p.id.toUpperCase()}</text>
  
  <!-- Center graphic badge -->
  <g transform="translate(400, 210)">
    <circle cx="0" cy="0" r="64" fill="rgba(0,0,0,0.5)" stroke="${p.color}" stroke-width="2" stroke-dasharray="8 4" />
    <circle cx="0" cy="0" r="50" fill="rgba(255,255,255,0.03)" />
    <text x="0" y="16" text-anchor="middle" font-size="44">${p.icon}</text>
  </g>
  
  <!-- Title and info -->
  <text x="400" y="325" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="700" font-size="28" letter-spacing="1">${p.title}</text>
  <text x="400" y="360" text-anchor="middle" fill="${p.color}" font-family="monospace" font-size="14" letter-spacing="2">${p.subtitle.toUpperCase()}</text>
  <text x="400" y="400" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="12">[ PREVIEW PLACEHOLDER • READY FOR SCREENSHOT ]</text>
</svg>`;
}

function createProfileSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="profile-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00ff9d" stop-opacity="0.25" />
      <stop offset="70%" stop-color="#00e5ff" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#070a10" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#070a10" />
    </linearGradient>
  </defs>
  
  <!-- Outer aura glow -->
  <circle cx="300" cy="300" r="280" fill="url(#profile-glow)" />
  
  <!-- Outer tech rings -->
  <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(0, 255, 157, 0.3)" stroke-width="1.5" stroke-dasharray="12 8" />
  <circle cx="300" cy="300" r="215" fill="none" stroke="rgba(0, 229, 255, 0.2)" stroke-width="1" />
  
  <!-- Base circular frame -->
  <circle cx="300" cy="300" r="190" fill="url(#avatar-grad)" stroke="#00ff9d" stroke-width="2" />
  
  <!-- Cyber Silhouette / Avatar Symbol -->
  <g transform="translate(300, 270)">
    <circle cx="0" cy="-35" r="55" fill="#1e293b" stroke="#00e5ff" stroke-width="2" />
    <path d="M -90 95 C -85 30, 85 30, 90 95 Z" fill="#1e293b" stroke="#00ff9d" stroke-width="2" />
    <!-- Cyber visor or glow accent -->
    <path d="M -30 -35 L 30 -35" stroke="#00ff9d" stroke-width="4" stroke-linecap="round" />
    <circle cx="0" cy="-35" r="8" fill="#00e5ff" />
  </g>
  
  <!-- Inner cyber text badges -->
  <rect x="180" y="440" width="240" height="34" rx="17" fill="rgba(7, 10, 16, 0.85)" stroke="#00ff9d" stroke-width="1" />
  <text x="300" y="462" text-anchor="middle" fill="#00ff9d" font-family="monospace" font-size="12" font-weight="600" letter-spacing="1">R DEVATHARSHINI</text>
  <text x="300" y="525" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="12">[ Replace with src/assets/profile.jpg ]</text>
</svg>`;
}

const publicProjectsDir = 'public/assets/projects';
const srcProjectsDir = 'src/assets/projects';

projects.forEach(p => {
  const svg = createProjectSvg(p);
  fs.writeFileSync(path.join(publicProjectsDir, `${p.id}.svg`), svg);
  fs.writeFileSync(path.join(srcProjectsDir, `${p.id}.png`), svg); // Fallback compatible
  fs.writeFileSync(path.join(publicProjectsDir, `${p.id}.png`), svg);
});

const profileSvg = createProfileSvg();
fs.writeFileSync('public/assets/profile.jpg', profileSvg);
fs.writeFileSync('public/assets/profile.svg', profileSvg);
fs.writeFileSync('src/assets/profile.jpg', profileSvg);

// Create dummy resume file placeholder
fs.writeFileSync('public/assets/R_Devatharshini_Resume.pdf', '%PDF-1.4 Placeholder Resume for R Devatharshini. Replace with your actual PDF file in src/assets/R_Devatharshini_Resume.pdf');
fs.writeFileSync('src/assets/R_Devatharshini_Resume.pdf', '%PDF-1.4 Placeholder Resume for R Devatharshini. Replace with your actual PDF file in src/assets/R_Devatharshini_Resume.pdf');

console.log('Successfully generated asset placeholders!');
