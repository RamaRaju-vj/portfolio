module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1f2937',
        'light-secondary': '#6b7280',
        'light-accent': '#ec4899',
        'light-card': '#f9fafb',
        'light-border': '#e5e7eb',
        
        // Dark mode colors (keeping your existing dark theme)
        'dark-bg': '#0a192f',
        'dark-text': '#f3f4f6',
        'dark-secondary': '#9ca3af',
        'dark-accent': '#ec4899',
        'dark-card': '#1f2937',
        'dark-border': '#374151',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
