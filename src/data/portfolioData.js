export const portfolioData = {
  personal: {
    name: "R DEVATHARSHINI",
    displayTitle: "R DEVATHARSHINI",
    shortName: "Devatharshini",
    role: "CYBERSECURITY SPECIALIST • DEVELOPER",
    tagline: "Building secure, intelligent and creative digital experiences.",
    bio: "Second-year B.E. Computer Science and Engineering (Cybersecurity) student at KGiSL Institute of Technology passionate about cybersecurity, programming, and emerging technologies.",
    phone: "9345419406",
    email: "dtharshini2730@gmail.com",
    github: "https://github.com/dtharshini2730-cyber",
    linkedin: "https://www.linkedin.com/in/devatharshini-r-70a221427",
    location: "Coimbatore, India",
    resumeUrl: "/assets/R_Devatharshini_Resume.pdf",
    profileImage: "/assets/profile.jpg",
    status: "Open for Opportunities & Collaborations",
  },

  heroFloatingIcons: [
    { id: "cyber", emoji: "🛡️", label: "Cybersecurity", position: "top-[-10%] left-[-8%]", delay: 0 },
    { id: "code", emoji: "💻", label: "Development", position: "top-[-5%] right-[-8%]", delay: 0.6 },
    { id: "python", emoji: "🐍", label: "Python", position: "top-[30%] left-[-16%]", delay: 1.2 },
    { id: "security", emoji: "🔐", label: "Network Security", position: "top-[32%] right-[-16%]", delay: 1.8 },
    { id: "ai", emoji: "🤖", label: "AI / Machine Learning", position: "bottom-[20%] left-[-12%]", delay: 0.9 },
    { id: "web", emoji: "🌐", label: "Web Architecture", position: "bottom-[22%] right-[-12%]", delay: 1.5 },
    { id: "tech", emoji: "⚡", label: "Secure Systems", position: "bottom-[-8%] left-[10%]", delay: 2.1 },
    { id: "projects", emoji: "🚀", label: "Practical Projects", position: "bottom-[-6%] right-[10%]", delay: 0.3 }
  ],

  marqueeKeywords: [
    "CYBERSECURITY",
    "PYTHON",
    "NETWORK SECURITY",
    "LINUX",
    "SECURE CODING",
    "PACKET ANALYSIS",
    "IMAGE ENCRYPTION",
    "WEB DEVELOPMENT",
    "CAESAR CIPHER"
  ],

  about: {
    sectionNumber: "01",
    heading: "Curious about how things work. Driven to make them secure.",
    paragraphs: [
      "I am a second-year B.E. Computer Science and Engineering (Cybersecurity) student at KGiSL Institute of Technology. I am passionate about cybersecurity, programming, and emerging technologies. I enjoy learning new concepts, solving real-world problems, and continuously improving my technical skills.",
      "I have knowledge of Python and am expanding my skills in cybersecurity, software development, and problem-solving through hands-on projects, hackathons, workshops, and internships. I am always eager to learn, collaborate with others, and contribute to meaningful and innovative solutions while growing both personally and professionally.",
      "Driven by continuous learning, I actively participate in hackathons like NASA Space Apps, Adobe University, and BrewingSec, engineering practical, resilient solutions designed with security at the forefront."
    ],
    highlights: [
      { label: "Institution", value: "KGiSL Institute of Technology" },
      { label: "Specialization", value: "B.E. CSE (Cybersecurity)" },
      { label: "Academic CGPA", value: "8.8 CGPA (First Year)" },
      { label: "Location", value: "Coimbatore, India" }
    ],
    educationTimeline: [
      {
        degree: "B.E. Computer Science and Engineering (Cybersecurity)",
        institution: "KGiSL Institute of Technology",
        duration: "2025 — 2029",
        status: "Pursuing",
        score: "8.8 CGPA (First Year)",
        accent: "#00ff9d"
      },
      {
        degree: "Higher Secondary Certificate (HSC — 12th)",
        institution: "Dr V Gengusamy Naidu Matric Higher Secondary School",
        duration: "2023 — 2025",
        status: "Completed",
        score: "94.1%",
        accent: "#00e5ff"
      },
      {
        degree: "Secondary School Leaving Certificate (SSLC — 10th)",
        institution: "Dr V Gengusamy Naidu Matric Higher Secondary School",
        duration: "2021 — 2023",
        status: "Completed",
        score: "88.8%",
        accent: "#a855f7"
      }
    ]
  },

  skills: {
    sectionNumber: "02",
    title: "Technical Arsenal",
    subtitle: "A balanced toolkit of technical competencies and essential soft skills for cybersecurity engineering.",
    technicalCategories: [
      {
        id: "programming",
        name: "Programming",
        icon: "Code2",
        skills: ["Python", "C (Basics)"]
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity & Cryptography",
        icon: "ShieldAlert",
        skills: ["Network Security", "Secure Coding", "Packet Inspection (Scapy)", "Phishing Awareness", "Image Encryption", "Caesar Cipher"]
      },
      {
        id: "web",
        name: "Web Development",
        icon: "Globe",
        skills: ["HTML", "CSS", "JavaScript", "Flask"]
      },
      {
        id: "tools",
        name: "Tools & Environments",
        icon: "Terminal",
        skills: ["Git", "GitHub", "Linux", "VS Code"]
      }
    ],
    softSkills: [
      "Adaptability",
      "Leadership",
      "Time Management",
      "Problem-solving",
      "Risk Management",
      "Critical Thinking"
    ]
  },

  projects: {
    sectionNumber: "03",
    title: "Projects I've Built",
    subtitle: "Real-world engineering spanning packet analysis, password strength evaluation, static code auditing, and encryption utilities.",
    list: [
      {
        id: "01",
        title: "Basic Network Sniffer",
        tagline: "Low-level packet capture and protocol diagnostic tool.",
        description: "Developed a Python-based network sniffer using Scapy to capture and inspect live network packets for traffic analysis and protocol diagnostics.",
        category: "Network Security",
        image: "/assets/projects/network-sniffer.png",
        technologies: ["Python", "Scapy", "Network Security", "Socket Programming"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: true,
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
        accentColor: "#00ff9d"
      },
      {
        id: "02",
        title: "Password Strength Checker",
        tagline: "Entropy and security compliance evaluation engine.",
        description: "Built a Python security utility to evaluate password complexity, test against common vulnerabilities, and provide actionable security-oriented feedback.",
        category: "Security Tool",
        image: "/assets/projects/secure-code-review.png",
        technologies: ["Python", "Security Analysis", "Entropy Algorithms"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: true,
        gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
        accentColor: "#00e5ff"
      },
      {
        id: "03",
        title: "Secure Code Review Tool",
        tagline: "Automated static source code vulnerability analyzer.",
        description: "Created a security-focused code review project in Python to identify common coding weaknesses, injection vectors, and promote secure coding practices.",
        category: "DevSecOps",
        image: "/assets/projects/secure-code-review.png",
        technologies: ["Python", "AST Parsing", "OWASP Security", "Code Diagnostics"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: true,
        gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
        accentColor: "#00ff9d"
      },
      {
        id: "04",
        title: "Phishing Awareness Platform",
        tagline: "Interactive cyber hygiene simulation and awareness application.",
        description: "Developed a web-based awareness project focused on recognizing, analyzing, and understanding modern phishing threats and social engineering vectors.",
        category: "Security Awareness",
        image: "/assets/projects/phishing-awareness.png",
        technologies: ["HTML", "CSS", "JavaScript", "Security Analysis"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: false,
        gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
        accentColor: "#a855f7"
      },
      {
        id: "05",
        title: "Image Encryption Utility",
        tagline: "Pixel-level cryptographic security implementation.",
        description: "Implemented an image-encryption utility in Python to explore confidentiality, pixel permutation, and fundamental cryptographic concepts.",
        category: "Cryptography",
        image: "/assets/projects/cybershield.png",
        technologies: ["Python", "Cryptography", "Image Processing"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: false,
        gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
        accentColor: "#00e5ff"
      },
      {
        id: "06",
        title: "Caesar Cipher Cryptosystem",
        tagline: "Classical shift encryption and decryption tool.",
        description: "Implemented a classical Caesar cipher in Python to demonstrate introductory encryption, mathematical shift operations, and cryptography concepts.",
        category: "Cryptography",
        image: "/assets/projects/thirukkural.png",
        technologies: ["Python", "Algorithms", "Cryptography"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: false,
        gradient: "from-blue-500/20 via-purple-500/10 to-transparent",
        accentColor: "#818cf8"
      },
      {
        id: "07",
        title: "Thirukkural Flask Web Application",
        tagline: "Bilingual classical literature knowledge repository.",
        description: "A responsive Flask web application that presents all 1330 Thirukkural couplets with dual-language Tamil and English explanations and dynamic search.",
        category: "Web Application",
        image: "/assets/projects/thirukkural.png",
        technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/dtharshini2730-cyber",
        live: null,
        featured: false,
        gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
        accentColor: "#00ff9d"
      }
    ]
  },

  experience: {
    sectionNumber: "04",
    title: "Experience & Journey",
    subtitle: "Professional milestones, internships, and upcoming technical opportunities.",
    placeholderCard: {
      title: "Add Experience",
      badge: "FUTURE OPPORTUNITY / INTERNSHIP",
      description: "Currently pursuing BE in CSE with Cybersecurity at KGiSL Institute of Technology (8.8 CGPA). Open for cybersecurity internships, software development roles, and research projects.",
      actionText: "Ready for Collaborations & Roles"
    }
  },

  achievements: {
    sectionNumber: "05",
    title: "Achievements & Hackathons",
    subtitle: "Recognitions and competitive participation across prestigious technology challenges.",
    list: [
      {
        id: "nasa",
        title: "NASA Space Apps Challenge",
        category: "Global Hackathon",
        badge: "Participant / Innovator",
        description: "Collaborated in the world's largest annual space & science hackathon, developing collaborative technology solutions using open-source space data.",
        tag: "Global Innovation"
      },
      {
        id: "adobe",
        title: "Adobe University Hackathon",
        category: "Industry Challenge",
        badge: "Competitive Participant",
        description: "Engineered innovative software prototype tackling complex software workflows and creative digital problem statements.",
        tag: "Software Engineering"
      },
      {
        id: "brewingsec",
        title: "BrewingSec Hackathon",
        category: "Cybersecurity Competition",
        badge: "Security Challenger",
        description: "Tackled intense defensive and offensive cybersecurity problem scenarios, demonstrating threat analysis and rapid defensive scripting.",
        tag: "Cyber Defense"
      }
    ]
  },

  certifications: {
    sectionNumber: "06",
    title: "Certifications",
    subtitle: "Verified credentials validating skills in cybersecurity, development, and systems.",
    list: [
      {
        id: "cisco-python-1",
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy & Python Institute",
        recipient: "Devatharshini Rajeshkannan",
        date: "15 Nov 2025",
        signatory: "Lynn Bloomer (Director, Cisco Networking Academy)",
        description: "Successfully completed Python Essentials 1 course through the Cisco Networking Academy program, covering core Python fundamentals, data structures, and algorithmic scripting.",
        credentialUrl: "/assets/Cisco_Python.pdf"
      }
    ],
    placeholderCard: {
      title: "Add Certification",
      badge: "VERIFIED CREDENTIALS / ONGOING",
      description: "Upcoming industry certificates in Network Security, Ethical Hacking, Cloud Security, and Advanced Python will be archived and verified here.",
      actionText: "Connect on LinkedIn"
    }
  },

  github: {
    username: "dtharshini2730-cyber",
    profileUrl: "https://github.com/dtharshini2730-cyber",
    highlights: [
      { label: "GitHub Profile", value: "@dtharshini2730-cyber" },
      { label: "Primary Focus", value: "Cybersecurity & Python" },
      { label: "Repositories", value: "Active Public Repos" }
    ],
    pinnedRepos: [
      {
        name: "Network-Sniffer",
        desc: "Python and Scapy powered network analyzer for packet capture and inspection.",
        stars: "★ Active",
        language: "Python",
        langColor: "#3572A5"
      },
      {
        name: "Password-Strength-Checker",
        desc: "Utility to evaluate password strength and provide security-oriented feedback.",
        stars: "★ Active",
        language: "Python",
        langColor: "#3572A5"
      },
      {
        name: "Secure-Code-Reviewer",
        desc: "Automated static analysis tool for vulnerability identification in source code.",
        stars: "★ Active",
        language: "Python",
        langColor: "#3572A5"
      },
      {
        name: "Phishing-Awareness",
        desc: "Web-based awareness project focused on recognizing phishing threats.",
        stars: "★ Active",
        language: "HTML / CSS",
        langColor: "#e34c26"
      }
    ]
  }
};
