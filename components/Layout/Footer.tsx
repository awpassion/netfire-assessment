import GradientLine from "../UI/GradientLine";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <GradientLine />
      <footer className="bg-stone-200">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center gap-4">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>

          <strong className="text-lg font-medium">Brand Name</strong>

          <p className="flex-1 text-[11px] text-stone-500">
            © 2024{" "}
            <span className="text-stone-900 font-medium">Brand Name</span> All
            rights reserved. Unauthorized use or copying of this brand is
            strictly prohibited. No part of this website may be reproduced,
            distributed, or transmitted in any form or by any means, including
            photocopying, recording, or other electronic or mechanical methods,
            without the prior written permission of{" "}
            <span className="text-stone-900 font-medium">Brand Name</span>,
            except in the case of brief quotations embodied in critical reviews
            and certain other non-commercial uses permitted by copyright law.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
