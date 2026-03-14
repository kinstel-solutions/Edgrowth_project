"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UniversityCard } from "./UniversityCard";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

interface University {
  name: string;
  description: string;
  image: string;
}

interface UniversityCarouselProps {
  universities: University[];
}

export function UniversityCarousel({ universities }: UniversityCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Triple the items for infinite effect
  const extendedUniversities = [...universities, ...universities, ...universities];
  const originalLength = universities.length;
  const [isReady, setIsReady] = useState(false);

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (scrollContainerRef.current && originalLength > 0) {
      const itemWidth = 320 + 24; // Card width + gap
      scrollContainerRef.current.scrollLeft = itemWidth * originalLength;
      setIsReady(true);
    }
  }, [originalLength]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const itemWidth = 320 + 24;
    const totalOriginalWidth = itemWidth * originalLength;

    // Seamless jump to middle set when reaching boundaries
    if (scrollLeft <= 50) {
      scrollContainerRef.current.scrollLeft = totalOriginalWidth + scrollLeft;
    } else if (scrollLeft >= scrollWidth - clientWidth - 50) {
      scrollContainerRef.current.scrollLeft = scrollLeft - totalOriginalWidth;
    }
  }, [originalLength]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -344 : 344;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      scroll("right");
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <div 
      className={cn("relative group transition-opacity duration-500 overflow-hidden", !isReady ? "opacity-0" : "opacity-100")}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 hidden sm:block">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-foreground"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 hidden sm:block">
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-foreground"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 sm:px-0 scroll-smooth items-stretch max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {extendedUniversities.map((uni, idx) => (
          <div key={`${uni.name}-${idx}`} className="flex-none w-[300px] sm:w-[340px] snap-center flex">
              <UniversityCard
                name={uni.name}
                description={uni.description}
                image={uni.image}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

