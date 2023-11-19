/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        custom: {
          peru: "#D87D4A",
          "chinese-black": "#101010",
          "flash-white": "#F1F1F1",
          lotion: "#FAFAFA",
          tangelo: "#fbaf85",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        "sub-title": [
          "0.8125rem",
          { lineHeight: "1.5625rem", letterSpacing: "0.0625rem" },
        ],
        overline: [
          "0.875rem",
          { lineHeight: "1.1875rem", letterSpacing: "0.625rem" },
        ],
        body: ["0.9375rem", { lineHeight: "1.5625rem" }],
        h1: ["3.5rem", { lineHeight: "3.625rem", letterSpacing: "0.125rem" }],
        h2: ["2.5rem", { lineHeight: "2.75rem", letterSpacing: "0.09375rem" }],
        h3: ["2rem", { lineHeight: "2.25rem", letterSpacing: "0.071875rem" }],
        h4: ["1.75rem", { lineHeight: "2.375rem", letterSpacing: "1.5625rem" }],
        h5: [
          "1.5rem",
          { lineHeight: "2.0625rem", letterSpacing: "0.10625rem" },
        ],
        h6: ["1.125rem", { lineHeight: "1.5rem", letterSpacing: "0.08125rem" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
