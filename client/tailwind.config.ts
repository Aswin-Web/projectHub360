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
        background: "#F5F5F5",
        foreground: "var(--foreground)",
        textColor:"#424242",
        buttonBorderColor:"",
        headingColor:"#FF0063",
        subHeadingColor:"#66BFBF",
        logoMain1:"#09122C",
        logoMain2:"#872341",
        darkColor:"#48CFCB",
        lightColor:"#F2EFE7"
      },
    },
  },
  plugins: [],
} satisfies Config;
