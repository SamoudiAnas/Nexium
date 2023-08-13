import { Dispatch, SetStateAction } from "react";

interface MenuIconProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MenuIcon({ isOpen, setIsOpen }: MenuIconProps) {
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50 md:hidden">
      <div className="flex items-center justify-center">
        <button
          className={` flex flex-col justify-between w-6 h-6 cursor-pointer ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open mobile menu</span>
          <div
            className={` w-full h-[2px] bg-main rounded-full transition transform ${
              isOpen ? "translate-y-[.675rem] rotate-45" : ""
            }`}
          ></div>
          <div
            className={`w-[80%] h-[2px] bg-main rounded-full opacity-100 transition-opacity duration-200 ease-in-out ${
              isOpen ? "!opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-[2px] bg-main rounded-full transition transform ${
              isOpen ? " -translate-y-[.675rem] -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}
