import React from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-black w-full overflow-x-hidden">
  
      <main>{children}</main>
      <Footer />
    </div>
  );
}
