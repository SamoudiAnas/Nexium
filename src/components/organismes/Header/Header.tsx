import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="px-2 md:px-6 lg:px-8 relative z-50">
      <div className="flex justify-between items-center rounded-full px-5 xl:px-16 py-3 bg-cosmos mt-4 max-w-screen-2xl mx-auto ">
        <Link href="/">
          <div className=" flex items-center">
            <Logo pathClassName="fill-white" />
            <span className="font-bold text-white">Nexium</span>
          </div>
        </Link>
        <div className="flex gap-8 text-white">
          <NavLink
            active={pathname === "/how-it-works"}
            variant="white"
            href="/how-it-works"
          >
            How it works
          </NavLink>
          <NavLink
            active={pathname === "/features"}
            variant="white"
            href="/features"
          >
            Features
          </NavLink>
          <NavLink
            active={pathname === "/pricing"}
            variant="white"
            href="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink active={pathname === "/about"} variant="white" href="/">
            About
          </NavLink>
          <NavLink
            active={pathname === "/testimonials"}
            variant="white"
            href="/testimonials"
          >
            Testimonials
          </NavLink>
        </div>

        <div className="flex gap-6">
          <NavLink variant="white" href="/login">
            Login
          </NavLink>
          <Link href="/contact">
            <span className="text-white bg-main p-3 px-6 rounded-full hover:bg-main-hover">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
