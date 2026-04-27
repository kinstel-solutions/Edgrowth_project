"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { UserPlus, ArrowRight } from "lucide-react";

export default function FacultySection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  const facultyList = [
    {
      name: "Dr. Coral Jasmine Barboza",
      role: "Deputy Director",
      exp: "10+ years",
      bg: "PhD in General Management",
      image: "Coral_Barboza_amity.webp",
    },
    {
      name: "Dr. Divya Bansal",
      role: "Deputy Director",
      exp: "18+ years",
      bg: "PhD in Management",
      image: "Divya_Bansal_amity.webp",
    },
    {
      name: "Dr. Sachit Paliwal",
      role: "Associate Professor",
      exp: "12+ years",
      bg: "MBA in Finance Management",
      image: "sachit_paliwal_amity.webp",
    },
    {
      name: "Dr. Pragati Sahai",
      role: "Assistant Professor",
      exp: "17+ years",
      bg: "PhD in Biotechnology",
      image: "Pragati_amity.webp",
    },
    {
      name: "Dr. Rashmi Saxena",
      role: "Assistant Professor",
      exp: "14+ years",
      bg: "PhD in Management",
      image: "Rashmi_amity.webp",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime: number = 0;
    const scrollSpeed = 0.12; // Increased speed for better desktop experience

    const scroll = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed * deltaTime;

        const singleSetWidth = scrollContainer.scrollWidth / 4;
        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft -= singleSetWidth;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section
      id="faculty"
      className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-4">
            Learn From The Best
          </h2>
          <p className="text-gray-600">
            World-class education delivered by leading international faculty and
            industry experts.
          </p>
        </div>

        <div className="relative group">
          {/* Gradient Mask for smooth fade at edges */}
          <div className="absolute inset-y-0 left-0 w-4 md:w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-4 md:w-4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}>
            {[
              ...facultyList,
              ...facultyList,
              ...facultyList,
              ...facultyList,
            ].map((prof, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl p-6 text-center hover:border-amity-blue transition-colors group/card bg-slate-50 hover:bg-white w-[280px] shrink-0 hover:shadow-lg">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden relative border-2 border-transparent group-hover/card:border-amity-yellow transition-colors">
                  {prof.image ? (
                    <Image
                      src={`/amity/Faculty-imgs/${prof.image}`}
                      alt={prof.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserPlus
                      className="text-gray-400"
                      size={32}
                    />
                  )}
                </div>
                <h3 className="font-bold text-amity-blue mb-1">{prof.name}</h3>
                <p className="text-xs font-semibold text-amity-yellow mb-2 uppercase tracking-wide">
                  {prof.role}
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Experience: {prof.exp}</p>
                  <p>{prof.bg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-yellow text-amity-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-md">
            TALK TO AN ACADEMIC EXPERT <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
