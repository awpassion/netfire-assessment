import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { BiMenu, BiSolidUser } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import IconButton from "../UI/IconButton";
import Navlink from "../UI/Navlink";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center py-3 sm:py-6">
        <div className="block md:hidden">
          <IconButton Icon={BiMenu} onClick={() => setIsMenuOpen(true)} />
        </div>

        <ul className="hidden md:flex gap-4">
          <li className="flex items-center">
            <Navlink href="/">HOME</Navlink>
          </li>
          <li className="flex items-center">
            <Navlink href="/about">ABOUT</Navlink>
          </li>
          <li className="flex items-center">
            <Navlink href="/products">PRODUCTS</Navlink>
          </li>
        </ul>

        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={55}
            height={55}
            className="min-w-fit w-12 h-12 sm:w-auto sm:h-auto"
          />
        </Link>

        <ul className="flex justify-end gap-2 md:gap-4">
          <li className="hidden md:flex items-center">
            <IconButton Icon={MdShoppingCartCheckout} />
          </li>
          <li className="flex items-center order-1 md:order-none">
            <IconButton Icon={BiSolidUser} />
          </li>
          <li className="flex items-center">
            <IconButton Icon={IoSearchSharp} />
          </li>
        </ul>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
