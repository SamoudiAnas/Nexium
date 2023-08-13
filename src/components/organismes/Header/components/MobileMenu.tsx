import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import { links } from "@/constants/navLinks";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-40 translate-x-0 bg-cosmos transition-all duration-200",
        { "translate-x-0": isOpen },
        { "translate-x-full": !isOpen }
      )}
    >
      <div className="gap-8 text-white  flex flex-col justify-center items-center h-full">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            href={link.path}
            variant="white"
            className="text-xl"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
