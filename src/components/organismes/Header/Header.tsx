import { Logo } from "@/components/atoms/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-2 md:px-6 lg:px-8">
      <div className="flex justify-between items-center rounded-full px-5 xl:px-16 py-3 bg-cosmos mt-4 max-w-screen-2xl mx-auto ">
        <Link href="/">
          <div className=" flex items-center">
            <Logo pathClassName="fill-white" />
            <span className="font-bold text-white">Nexium</span>
          </div>
        </Link>
        <div className="flex gap-8 text-white">
          <Link href="/pricing">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/">About</Link>
          <Link href="/">Testimonials</Link>
        </div>

        <div className="flex gap-6">
          <Link href="/login">
            <span className="text-white">
              <Link href="/login">
                <span className="hover:underline hover:underline-offset-2">
                  Login
                </span>
              </Link>
            </span>
          </Link>
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
