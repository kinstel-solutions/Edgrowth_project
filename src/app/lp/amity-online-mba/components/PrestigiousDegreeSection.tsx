"use client";
import React from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

export default function PrestigiousDegreeSection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  return (
    <section
      id="degree"
      className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-10 reveal-on-scroll opacity-0 translate-y-4">
          Get your Prestigious Degree today
        </h2>
        <div className="flex justify-center reveal-on-scroll opacity-0 translate-y-4">
          <Image
            src="/amity/amity-mba-degree.webp"
            alt="Amity Online MBA Degree"
            width={800}
            height={550}
            className="rounded-xl shadow-lg border border-gray-200"
          />
        </div>
        <div className="mt-10 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-blue text-white font-bold px-8 py-3 rounded-full hover:bg-blue-900 transition-colors inline-flex items-center gap-2 shadow-lg">
            SECURE YOUR ADMISSION TODAY <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
