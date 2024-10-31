import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--color-background)',
  			foreground: 'var(--color-foreground)',
  			primary: 'var(--color-primary)'
  		},
  		fontFamily: {
  			'open-sans': ['var(--font-open-sans)', 'sans-serif'],
  			lora: ['var(--font-lora)', 'serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class"],
  plugins: [nextui(), require("tailwindcss-animate")]
};
export default config;
