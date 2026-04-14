"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp");

  return (
    <>
      {!isLandingPage && <Navbar />}
      <main className={isLandingPage ? "flex-1" : "flex-1 pt-16"}>
        {children}
      </main>
      {!isLandingPage && <Footer />}
    </>
  );
}
