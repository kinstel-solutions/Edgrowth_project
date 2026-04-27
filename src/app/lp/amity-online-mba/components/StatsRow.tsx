"use client";
import React from "react";

import { ArrowRight } from "lucide-react";

export default function StatsRow({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  return (
    <section id="stats" className="px-4 py-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow reveal-on-scroll opacity-0 translate-y-4">
          <div className="text-3xl md:text-4xl font-bold amity-blue mb-2">
            30+
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Years of
            <br />
            Excellence
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow reveal-on-scroll opacity-0 translate-y-4">
          <div className="text-3xl md:text-4xl font-bold amity-blue mb-2">
            60+
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Programs &<br />
            Specialisations
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow reveal-on-scroll opacity-0 translate-y-4">
          <div className="text-3xl md:text-4xl font-bold amity-blue mb-2">
            2 Lac+
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Learners
            <br />
            Worldwide
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow reveal-on-scroll opacity-0 translate-y-4">
          <div className="text-3xl md:text-4xl font-bold amity-blue mb-2">
            3.5L+
          </div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Strong Alumni
            <br />
            Network
          </div>
        </div>
      </div>

      <div className="mt-8 text-center reveal-on-scroll opacity-0 translate-y-4">
        <button
          onClick={onEnquireClick}
          className="font-raleway text-amity-blue font-bold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all">
          JOIN OUR GLOBAL NETWORK <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
