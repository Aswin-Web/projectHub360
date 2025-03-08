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
        background: "#F1F1F1",
        foreground: "var(--foreground)",
        textColor:"#424242",
        buttonBorderColor:"",
        headingColor:"#FF0063",
        subHeadingColor:"#66BFBF",
        logoMain1:"#09122C",
        logoMain2:"#872341",
        darkColor:"#FFFFFF",
        lightColor:"#F8F8F8",
        blackColor:"#2d2d2d",
        borderLight:"border-slate-300"
      },
    },
  },
  plugins: [],
} satisfies Config;
