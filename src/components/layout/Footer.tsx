import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            href="/"
            className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
            <span className="text-3xl font-extrabold text-blue-500">
              ENVIROLKO
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            EnviroLko offers Environmental IoT and Environmental AI solutions
            for a sustainable future. We strive to make air quality monitoring
            accurate, affordable, and accessible.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="https://www.linkedin.com/company/oizom/"
              target="_blank"
              className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/oizom_iot"
              target="_blank"
              className="hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/Oizom/"
              target="_blank"
              className="hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC... "
              target="_blank"
              className="hover:text-red-500 transition-colors">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors">
                About EnviroLko
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* India Office */}
        <div>
          <h3 className="font-semibold text-white mb-4">India (Head Office)</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>123 Innovation Drive, Tech Park,</li>
            <li>Metropolis, State,</li>
            <li>India – 123456</li>
            <li className="pt-2 text-blue-400 hover:text-blue-300">
              <a href="tel:+155501234567">+1-555-0123-4567</a>
            </li>
            <li className="text-blue-400 hover:text-blue-300">
              <a href="mailto:info@envirolko-placeholder.com">info@envirolko-placeholder.com</a>
            </li>
          </ul>
        </div>

        {/* UK Office */}
        <div>
          <h3 className="font-semibold text-white mb-4">United Kingdom</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>EnviroLko Pvt Ltd</li>
            <li>456 Global Avenue</li>
            <li>Business District, London</li>
            <li>United Kingdom - SW1A 1AA</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} EnviroLko Instruments Pvt. Ltd. All
        rights reserved. |{" "}
        <Link
          href="/privacy-policy"
          className="hover:text-slate-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
