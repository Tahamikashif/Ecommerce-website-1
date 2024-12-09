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
        background: "var(--background)",
        foreground: "var(--foreground)",
        shad:"#7E33E0",
        btn:"#0057FF",
        para:"#F1F1F1",
        sec:"#f7f7f7",
        li:"#FB2E86",
        border:"#E7E6EF",
        bg:"#FB2E86",
        promo:"#F2F0FF",
        off:"#00C1FE",
        chair:"#F6F7FB",
        pic:"#05E6B7",
        pic1:"#2F1AC4",
        latest:"#151875",
        blur:"#1A0B5B4D"
        
      },
    },
  },
  plugins: [],
} satisfies Config;
