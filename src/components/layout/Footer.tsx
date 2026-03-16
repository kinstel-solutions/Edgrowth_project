import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            href="/"
            className="font-bold text-2xl tracking-tight text-primary flex items-center gap-2">
            <span className="text-3xl font-extrabold text-primary">
              EDGROWTH
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            EdGrowth Consultants LLP is a premier educational consultancy providing online education counselling and financing services. We help you achieve your dream qualification.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors">
                About EdGrowth
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-foreground transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-foreground transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Lucknow Office */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Head Office</h3>
          <ul className="space-y-2 text-sm">
            <li>EdGrowth Consultants LLP</li>
            <li>62, Guru Gobind Singh Marg</li>
            <li>Lucknow, Uttar Pradesh 226001</li>
            <li className="pt-2 text-primary hover:underline">
              <a href="tel:8527511409">+91 8527511409</a>
            </li>
            <li className="text-primary hover:underline">
              <a href="mailto:shekhar@edgrowth.info">shekhar@edgrowth.info</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-sm">
        &copy; {new Date().getFullYear()} EdGrowth Consultants LLP. All
        rights reserved. |{" "}
        <Link
          href="/privacy-policy"
          className="hover:text-foreground">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
