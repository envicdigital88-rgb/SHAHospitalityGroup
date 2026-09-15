import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#07111F",
          50: "#1a2738",
          100: "#152030",
          200: "#111c2a",
          300: "#0d1822",
          400: "#0a131e",
          500: "#07111F",
          600: "#060e1a",
          700: "#050b15",
          800: "#040910",
          900: "#02060c",
        },
        charcoal: {
          DEFAULT: "#101722",
          light: "#1a2330",
          dark: "#0a0f16",
        },
        champagne: {
          DEFAULT: "#D6B477",
          light: "#E5C99A",
          dark: "#B8985C",
          50: "#faf6ee",
          100: "#f0e6d0",
          200: "#e3d0a8",
          300: "#D6B477",
          400: "#c9a262",
          500: "#b8985c",
          600: "#9c8048",
        },
        softwhite: "#F5F5F2",
        slategray: {
          DEFAULT: "#8B95A1",
          light: "#A8B2BD",
          dark: "#6B7480",
        },
        electric: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-luxury":
          "linear-gradient(135deg, #07111F 0%, #101722 50%, #07111F 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
