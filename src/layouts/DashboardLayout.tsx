import React from "react";
import { DashboardFooter as Footer } from "@/components/organismes/Footer";
import { Transition } from "@/components/atoms/Transition";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Transition>{children}</Transition>
      <Footer />
    </>
  );
}
