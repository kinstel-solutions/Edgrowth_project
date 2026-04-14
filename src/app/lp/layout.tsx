import Link from "next/link";
import { Phone } from "lucide-react";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal Header — Logo + Phone CTA only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-0.5 leading-none"
          >
            <span className="text-primary font-[dmSerif] font-extrabold text-2xl tracking-tight">
              Ed
            </span>
            <span className="text-secondary-foreground/90 font-[dmSerif] font-extrabold text-2xl tracking-tight">
              Growth
            </span>
          </Link>
          <a
            href="tel:+918527511409"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-bold shadow shimmer transition-all hover:bg-primary/90 animate-shake"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+91 8527511409</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* Page Content — offset by header height */}
      <div className="pt-14">{children}</div>

      {/* Minimal Footer */}
      <footer className="bg-foreground text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} EdGrowth Consultants LLP. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-primary-foreground/50">
            <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
              About Us
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
