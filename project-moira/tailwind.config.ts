/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        surface: "#141B2D",
        border: "#2A3550",
        text: {
          DEFAULT: "#F5F1E8",
          muted: "#A6AFC3",
        },
        accent: "#C8A96A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', "Georgia", "serif"],
        body: ['"Inter"', '"Geist"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(4rem, 10vw, 7rem)",
          { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "300" },
        ],
        "display-lg": [
          "clamp(2rem, 5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.6" }],
        label: [
          "0.875rem",
          { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "500" },
        ],
        reflection: [
          "clamp(1.25rem, 3vw, 1.75rem)",
          { lineHeight: "1.5", fontWeight: "300", fontStyle: "italic" },
        ],
        tagline: ["1rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "96px",
        "3xl": "128px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 24px rgba(200, 169, 106, 0.08)",
        lift: "0 4px 12px rgba(0, 0, 0, 0.3)",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
