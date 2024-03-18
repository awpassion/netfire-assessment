import Logo from "@/public/images/logo.svg";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { MdShoppingCartCheckout } from "react-icons/md";
import Portal from "../Portal";
import Navlink from "../UI/Navlink";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Portal>
      <aside
        className={classNames(
          "fixed bg-white w-screen h-screen inset-0 transition-transform duration-300 z-10",
          isOpen ? "translate-x-0" : "-translate-x-[100vw]"
        )}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={45} height={45} />
          </Link>
          <button onClick={onClose}>
            <BsArrowLeft
              size={28}
              className={classNames(
                "transition-transform duration-500",
                isOpen ? "" : "rotate-180"
              )}
            />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <li onClick={onClose} className="flex flex-col">
            <Navlink href="/">HOME</Navlink>
          </li>
          <li onClick={onClose} className="flex flex-col">
            <Navlink href="/about">ABOUT</Navlink>
          </li>
          <li onClick={onClose} className="flex flex-col">
            <Navlink href="/products">PRODUCTS</Navlink>
          </li>
          <li onClick={onClose} className="flex flex-col">
            <Navlink href="/products">
              <div className="flex items-center gap-2">
                <MdShoppingCartCheckout size={20} />
                <span>Cart</span>
              </div>
            </Navlink>
          </li>
        </ul>
      </aside>
    </Portal>
  );
};

export default MobileMenu;
