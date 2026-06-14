/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        surface: "#0B1226",
        surface2: "#101A36",
        violet: "#8B5CF6",
        cyan: "#00E5FF",
        green: "#14F195",
        ink: "#F5F7FF",
        muted: "#8A93B8",
        line: "#1E2A4A",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "node-grid":
          "radial-gradient(circle at 1px 1px, rgba(139,92,246,0.18) 1px, transparent 0)",
        "glow-violet":
          "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,0.25), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 2s",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "node-pulse": "node-pulse 3s ease-in-out infinite",
        "line-draw": "line-draw 2.4s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "node-pulse": {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "line-draw": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
