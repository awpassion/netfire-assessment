import React from "react";
import GradientLine from "../UI/GradientLine";

const PromotionsBanner = () => {
  return (
    <>
      <section className="p-4 bg-stone-200">
        <p className="uppercase font-medium text-center text-xs xs:text-sm">
          New customers get 15% off! use code{" "}
          <span className="text-blue-900">WELCOME15</span>
        </p>
      </section>
      <GradientLine />
    </>
  );
};

export default PromotionsBanner;
