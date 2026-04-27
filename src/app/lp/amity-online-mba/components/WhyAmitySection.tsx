"use client";
import React from "react";
import { CheckCircle, ChevronDown, ArrowRight } from "lucide-react";

export default function WhyAmitySection({
  isExpanded,
  setIsExpanded,
  onEnquireClick,
}: {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
  onEnquireClick: () => void;
}) {
  return (
    <section
      id="why-amity"
      className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-2 reveal-on-scroll opacity-0 translate-y-4">
          India's 1st UGC-approved University to offer Online Degrees
        </h2>
        <p className="text-gray-500 mb-10 reveal-on-scroll opacity-0 translate-y-4">
          Globally Recognized | Digitally Advanced | Deeply Personalized
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
          {[
            {
              title: "WASC Accreditation (USA)",
              desc: "India's only university accredited by WASC — a distinguished recognition of global academic excellence.",
            },
            {
              title: "WES Recognition",
              desc: "Degrees recognized by WES Canada & USA, enabling smoother pathways for global career mobility.",
            },
            {
              title: "QS Ranked Online MBA",
              desc: "India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition.",
            },
            {
              title: "Amigo: Learning On-the-Go",
              desc: "The Amigo app makes learning seamless and mobile — attend live classes, track progress on your schedule.",
            },
            {
              title: "Prof. Ami: AI-Powered Tutor",
              desc: "Your always-on, AI mentor for instant doubt-solving, personalized learning tips, and smart academic support.",
            },
            {
              title: "AI-Powered Career Platform",
              desc: "From mock interviews to job search and easy-apply tools — ensures you're career-ready from day one.",
            },
          ]
            .slice(0, isExpanded ? 6 : 3)
            .map((item, i) => (
              <div
                key={i}
                className="flex gap-4 group reveal-on-scroll opacity-0 translate-y-4"
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}>
                <div className="shrink-0 mt-1">
                  <CheckCircle
                    className="text-amity-yellow"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amity-blue mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-1 rounded-full border-2 border-amity-blue text-amity-blue font-bold hover:bg-amity-blue hover:text-white transition-all duration-300">
            {isExpanded ? "VIEW LESS" : "VIEW MORE"}
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {/* <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-yellow text-amity-blue font-bold px-8 py-2.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-md">
            BOOK FREE CAREER COUNSELLING <ArrowRight size={18} />
          </button> */}
        </div>
      </div>
    </section>
  );
}
