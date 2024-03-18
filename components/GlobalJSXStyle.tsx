import { Inter } from "next/font/google";
import { Exo } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const exo = Exo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});

const GlobalJSXStyle = () => {
  return (
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
        --font-exo: ${exo.style.fontFamily};
      }
    `}</style>
  );
};

export default GlobalJSXStyle;
