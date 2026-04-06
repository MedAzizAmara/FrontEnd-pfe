/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "soft-dark-blue": "#1e293b",
        "on-tertiary": "#ffffff",
        "on-secondary": "#1d2021",
        "secondary": "#4a5568",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed-variant": "#005236",
        "on-surface-variant": "#4a5568",
        "primary-container": "#0056d2",
        "on-error": "#ffffff",
        "on-background": "#1a1c1e",
        "secondary-container": "#e2e8f0",
        "surface-container-low": "#ffffff",
        "on-secondary-fixed": "#0f1c2d",
        "primary-fixed-dim": "#b2c5ff",
        "primary-fixed": "#dae2ff",
        "surface-container-highest": "#f1f5f9",
        "inverse-on-surface": "#f8f9fa",
        "on-primary-container": "#ffffff",
        "on-primary": "#ffffff",
        "surface-container-high": "#f8fafc",
        "secondary-fixed": "#d6e3fb",
        "outline-variant": "#e2e8f0",
        "on-surface": "#1a1c1e",
        "tertiary-container": "#006c49",
        "on-tertiary-container": "#002113",
        "background": "#F8F9FA",
        "primary": "#0056d2",
        "error": "#ba1a1a",
        "inverse-primary": "#b2c5ff",
        "secondary-fixed-dim": "#bac7de",
        "inverse-surface": "#2e3132",
        "on-secondary-container": "#1e293b",
        "outline": "#74777f",
        "surface-tint": "#0056d2",
        "surface": "#F8F9FA",
        "surface-dim": "#dedede",
        "surface-variant": "#e1e2ec",
        "error-container": "#ffdad6",
        "on-error-container": "#410002",
        "tertiary-fixed-dim": "#4edea3",
        "on-tertiary-fixed": "#002113",
        "tertiary-fixed": "#6ffbbe",
        "on-primary-fixed-variant": "#0040a1",
        "tertiary": "#006b4a",
        "surface-bright": "#f8f9fa",
        "on-primary-fixed": "#001847",
        "on-secondary-fixed-variant": "#3b485a",
        "surface-container": "#ffffff"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      }
    }
  },
  plugins: []
}
