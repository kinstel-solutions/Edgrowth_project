"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amity-blue py-12 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-white/10 pb-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/"
              className="hover:text-amity-yellow transition-colors font-semibold">
              About
            </a>
            <a
              href="/"
              className="hover:text-amity-yellow transition-colors font-semibold">
              Explore Other Courses
            </a>
          </div>
          <div className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Amity Online - All Rights
            Reserved.
          </div>
        </div>

        <div className="text-xs text-center md:text-left opacity-60 leading-relaxed max-w-4xl">
          <p>
            Disclaimer: We act as a marketing service partner only. Amity
            University holds the right to request the change or removal of any
            non-relevant content. Images used are for illustrative purposes and
            do not directly represent the respective colleges or universities.
          </p>
        </div>
      </div>
    </footer>
  );
}
