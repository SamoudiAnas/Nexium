import MenuIcon from "./components/MenuIcon";

import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import { links } from "@/constants/navLinks";
import { useState } from "react";
import clsx from "clsx";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2 md:px-6 lg:px-8 relative z-50">
      <div
        className={clsx(
          "relative z-20 rounded-full",
          "flex justify-between items-center bg-cosmos",
          "mt-4 max-w-screen-2xl mx-auto px-5 xl:px-16 py-3",
          "transition-all duration-300"
        )}
      >
        <Link href="/" className="relative z-50">
          <div className=" flex items-center z-20">
            <Logo pathClassName="fill-white" />
            <span className="font-bold text-white">Nexium</span>
          </div>
        </Link>
        <div className="gap-8 text-white hidden md:flex">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              href={link.path}
              active={pathname === link.path}
              variant="white"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="gap-6 hidden md:flex">
          <NavLink variant="white" href="/login">
            Login
          </NavLink>
          <Link href="/contact">
            <span className="text-white bg-main p-3 px-6 rounded-full hover:bg-main-hover">
              Contact Us
            </span>
          </Link>
        </div>

        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export { Header };
