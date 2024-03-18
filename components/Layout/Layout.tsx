import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PromotionsBanner from "./PromotionsBanner";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PromotionsBanner />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
