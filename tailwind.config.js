/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#070a10",
          card: "#0d131f",
          surface: "#111a2c",
          border: "rgba(0, 255, 157, 0.15)",
          borderHover: "rgba(0, 255, 157, 0.4)",
          green: "#00ff9d",
          greenGlow: "rgba(0, 255, 157, 0.35)",
          cyan: "#00e5ff",
          cyanGlow: "rgba(0, 229, 255, 0.35)",
          purple: "#a855f7",
          purpleGlow: "rgba(168, 85, 247, 0.35)",
          muted: "#94a3b8",
          subtext: "#64748b",
          light: "#f8fafc",
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        'cyber-green': '0 0 25px -5px rgba(0, 255, 157, 0.25)',
        'cyber-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.25)',
        'cyber-purple': '0 0 25px -5px rgba(168, 85, 247, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
