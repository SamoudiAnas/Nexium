import { CommonFooter as Footer } from "@/components/organismes/Footer";
import { Header } from "@/components/organismes/Header";
import React from "react";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
