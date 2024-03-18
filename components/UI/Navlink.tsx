import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";

const Navlink = ({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
}) => {
  const router = useRouter();

  const isActive = useMemo(() => {
    return router.asPath === href;
  }, [router.asPath, href]);
  return (
    <Link
      href={href}
      className={classNames(
        "font-exo py-2 px-6 text-sm rounded-md border border-stone-400 hover:bg-stone-100 transition-colors duration-300",
        isActive ? "bg-stone-100" : "bg-stone-200/70"
      )}
    >
      {children}
    </Link>
  );
};

export default Navlink;
