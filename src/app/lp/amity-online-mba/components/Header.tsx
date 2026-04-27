"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-amity-blue py-4 mt-2 h-[75px] rounded-2xl mx-2 sm:mx-8 sm:mt-4 px-4 md:px-8 flex justify-between items-center z-50 sticky top-2 sm:top-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Image
            src="/amity/amity-online-logo.png"
            alt="Amity University Online"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
      <a
        href="tel:+918527511409"
        className="font-raleway text-amity-blue bg-amity-yellow px-4 sm:px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-amity-yellow hover:text-amity-blue transition-colors">
        <span className="hidden sm:inline">ENQUIRE NOW</span>
        <span className="sm:hidden">ENQUIRE NOW</span>
        <ArrowRight size={22} />
      </a>
    </header>
  );
}
