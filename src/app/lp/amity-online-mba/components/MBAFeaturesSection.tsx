"use client";
import React from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

export default function MBAFeaturesSection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-10 reveal-on-scroll opacity-0 translate-y-4">
          Why this is the Best Online MBA program for You?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
              title: "Inclusive & Flexible Learning Design",
              desc: "Learn in a way that works best for you. With content designed using Universal Design for Learning (UDL) principles, every concept is explained through multiple formats — videos, visuals, and interactive exercises.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
              title: "Gamified Assignments",
              desc: "Step into the shoes of a business leader through immersive roleplay simulations. Make strategic decisions, tackle real-life business challenges, and develop leadership skills.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
              title: "Live Industry Projects",
              desc: "Work on actual business problems alongside industry experts. Gain hands-on experience, earn exclusive project certifications, and showcase your skills to recruiters.",
            },
            {
              image: "/amity/AMI-ai-prof..webp",
              title: "Prof. AMI - Now In A New Avatar",
              desc: "Your AI-powered learning companion, available 24/7, guiding you through assignments, keeping you motivated, and ensuring you're never stuck — no matter where or when.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
              title: "Certification In Basics Of AI",
              desc: "Add future-ready AI skills to your MBA. With a certification in AI fundamentals, you'll graduate with a competitive edge in a market where technology and business go hand-in-hand.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className={`bg-[#F4F7FB] rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-500 ${
                i % 2 === 0
                  ? "reveal-on-scroll-left opacity-0 -translate-x-8"
                  : "reveal-on-scroll-right opacity-0 translate-x-8"
              }`}
              style={{ animationDelay: `${(i % 2) * 0.2}s` }}>
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-amity-blue/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-[#19233A] font-bold text-xl mb-3 group-hover:text-amity-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-blue text-white font-bold px-10 py-4 rounded-full hover:bg-blue-900 transition-colors inline-flex items-center gap-2 shadow-xl">
            ENQUIRE NOW FOR ADMISSIONS <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
