import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#845ec2",
          light: "#a17dcf",
          dark: "#5e3e8f",
        },
        secondary: {
          DEFAULT: "#d65db1",
          light: "#e27dc1",
          dark: "#9b3e7d",
        },
        accent: {
          DEFAULT: "#ff6f91",
          light: "#ff8fa7",
          dark: "#cc576e",
        },
        warning: {
          DEFAULT: "#ff9671",
          light: "#ffb08e",
          dark: "#cc7858",
        },
        success: {
          DEFAULT: "#008e9b",
          light: "#33a6b0",
          dark: "#006b75",
        },
        info: {
          DEFAULT: "#008ccb",
          light: "#33a3d6",
          dark: "#006a99",
        },
        gray: {
          DEFAULT: "#4b4453",
          light: "#6b6473",
          dark: "#332f3a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
