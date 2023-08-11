import LinkedIn from "~/assets/svg/linkedin.svg";
import Discord from "~/assets/svg/discord.svg";
import Github from "~/assets/svg/github.svg";

import { Logo } from "@/components/atoms/Logo";
import Link from "next/link";

const CommonFooter = () => {
  return (
    <footer className="bg-dark">
      <div className="max-w-screen-xl mx-auto pt-16">
        <div className="flex justify-between items-center  py-8 mb-8 border-y border-y-gray-800">
          <Link href="/">
            <Logo
              className="rounded w-16 h-16 bg-main"
              pathClassName="fill-white"
            />
          </Link>
          <div className="flex gap-8 text-white">
            <Link href="/pricing">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/">About</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-white">
            &copy; 2023 <Link href="/">Nexium</Link>. All rights reserved.
          </p>
          <div className="flex gap-8 text-white">
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our linkedin page</span>
              <LinkedIn />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our discord server</span>
              <Discord />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our linkedin page</span>
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CommonFooter };
