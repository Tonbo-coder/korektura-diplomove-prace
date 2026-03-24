import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0d1f2d',
        'gray-dark': '#2d3336',
        brand: '#1a7a68',
        'brand-hover': '#0d1f2d',
        'bg-light': '#eef2f0',
        'text-dark': '#495057',
      },
      fontFamily: {
        sans: ['var(--font-pt-sans)', 'sans-serif'],
        headings: ['var(--font-source-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
