import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React from "react";

interface NavLinkProps extends LinkProps, VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
}

const linkVariants = cva(
  "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center",
  {
    variants: {
      variant: {
        default: "text-main after:bg-main",
        white: "text-white after:bg-white",
        dark: "text-dark after:bg-dark",
      },
      active: {
        true: "after:scale-x-100 after:bg-main",
      },
    },
    defaultVariants: {
      variant: "default",
      active: false,
    },
  }
);

export const NavLink = ({
  variant = "default",
  active,
  className,
  children,
  ...props
}: NavLinkProps) => {
  return (
    <Link
      className={cn(linkVariants({ variant, active }), className)}
      {...props}
    >
      {children}
    </Link>
  );
};
