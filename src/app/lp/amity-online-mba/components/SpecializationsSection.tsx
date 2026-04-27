"use client";
import React from "react";
import { Users, Megaphone, TrendingUp, Database, Smartphone, Settings, Globe, BarChart, ArrowRight } from "lucide-react";

export default function SpecializationsSection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  return (
    <section id="specializations" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-6 reveal-on-scroll opacity-0 translate-y-4">
          Specializations
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 reveal-on-scroll opacity-0 translate-y-4">
          Choose from a wide range of industry-aligned specializations to
          tailor your MBA to your career goals and aspirations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Human Resource Management",
              icon: (
                <Users
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Master the art of talent acquisition and employee relations. Build a thriving organizational culture.",
            },
            {
              title: "Marketing Management",
              icon: (
                <Megaphone
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Learn advanced marketing strategies and consumer behavior. Drive brand growth in competitive markets.",
            },
            {
              title: "Finance Management",
              icon: (
                <TrendingUp
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Develop expertise in corporate finance and investment. Navigate complex financial landscapes with confidence.",
            },
            {
              title: "Data Science",
              icon: (
                <Database
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Harness the power of data to solve business challenges. Learn machine learning and predictive modeling.",
            },
            {
              title: "Digital Marketing",
              icon: (
                <Smartphone
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Master SEO, social media, and digital campaigns. Engage modern audiences effectively online.",
            },
            {
              title: "Operations Management",
              icon: (
                <Settings
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Streamline business processes and supply chain logistics. Maximize efficiency and operational success.",
            },
            {
              title: "International Business",
              icon: (
                <Globe
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Understand global trade and cross-cultural management. Expand your business footprint worldwide.",
            },
            {
              title: "Business Analytics",
              icon: (
                <BarChart
                  className="text-amity-yellow opacity-70"
                  size={28}
                />
              ),
              desc: "Transform data into actionable business insights. Drive strategic decision-making with analytics tools.",
            },
          ].map((spec, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-200 hover:border-amity-yellow p-6 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col items-center justify-center text-center gap-3 ${
                i % 2 === 0
                  ? "reveal-on-scroll-left opacity-0 -translate-x-8"
                  : "reveal-on-scroll-right opacity-0 translate-x-8"
              }`}
              style={{ animationDelay: `${(i % 4) * 0.1}s` }}>
              {spec.icon}
              <h4 className="font-semibold amity-blue text-lg leading-tight">
                {spec.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-blue text-white font-bold px-8 py-3 rounded-full hover:bg-blue-900 transition-colors inline-flex items-center gap-2 shadow-lg">
            PICK YOUR SPECIALIZATION <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
