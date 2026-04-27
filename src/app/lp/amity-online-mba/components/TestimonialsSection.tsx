"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Quote, UserPlus, ArrowRight } from "lucide-react";

export default function TestimonialsSection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  const reviewList = [
    {
      name: "Satheesh Nair",
      role: "Group IT Manager, Al-Murad Group UAE",
      rating: 4,
      text: "With 18 years of IT experience, Satheesh chose the MBA in IT Management for its flexibility. He highlights the practical curriculum and intuitive online learning platform as key benefits for working professionals.",
      image: "Satheesh Nair.webp",
    },
    {
      name: "Sangita Kumari",
      role: "Assistant Manager (MBA - HRM, 4th Semester)",
      rating: 5,
      text: "Sangita values the inclusive nature of the platform, which she feels does not judge based on age or background. She mentions the 'beSocial' platform and 'Qollab' for major projects as innovative features that enhanced her leadership and communication skills.",
      image: "Sangita Kumari.webp",
    },
    {
      name: "Mohd. Aasif Ansari",
      role: "Student (MBA - HRM, Jan '25 Batch)",
      rating: 5,
      text: "Aasif notes the transition from BBA to MBA was smooth due to the knowledgeable faculty. He gained strategic thinking skills in marketing and business planning, and recommends the program for its balance of academics and real-world application.",
      image: "Mohd. Aasif Ansari.webp",
    },
    {
      name: "Jatin Gupta",
      role: "Retail Outlet Owner (MBA July '25 Batch)",
      rating: 5,
      text: "As a business owner, Jatin appreciates the mobile-friendly LMS which allows him to study on the go (even in the metro). He highlights the seamless onboarding experience and the recordings of live lectures as crucial for his busy schedule.",
      image: "Jatin Gupta.webp",
    },
    {
      name: "Mohammad Asif",
      role: "Final Year Student (MBA - Sales & Marketing)",
      rating: 5,
      text: "After losing his job during the pandemic, Mohammad used the program to restart his career. He emphasizes the 'Karma Points' system on beSocial for keeping motivation high and the strong focus on brand management and data-driven decision making.",
      image: "Mohammad Asif.webp",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime: number = 0;
    const scrollSpeed = 0.1; // Pixels per millisecond

    const scroll = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed * deltaTime;

        // Infinite scroll jump logic
        // We repeat the list multiple times, so we jump back when we've scrolled past one full set
        // scrollWidth / 4 because we have 4 copies of reviewList
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
      id="testimonial"
      className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-4">
            What others say about Amity Online MBA
          </h2>
          <p className="text-gray-600">
            Hear what our learners have to say about their journey.
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
            {[...reviewList, ...reviewList, ...reviewList, ...reviewList].map(
              (review, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl relative shadow-sm border border-gray-100 w-[350px] md:w-[400px] shrink-0 hover:shadow-lg transition-all flex flex-col group/card">
                  <Quote
                    className="text-amity-yellow mb-4 opacity-50 shrink-0"
                    size={32}
                  />
                  <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow text-sm">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < review.rating
                            ? "text-amity-yellow"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold overflow-hidden shrink-0 border-2 border-transparent group-hover/card:border-amity-yellow transition-colors relative">
                      {review.image ? (
                        <Image
                          src={`/amity/testimonial/${review.image}`}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <UserPlus
                          className="text-gray-400"
                          size={20}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-amity-blue text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-12 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-yellow text-amity-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-md">
            START YOUR SUCCESS JOURNEY <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
