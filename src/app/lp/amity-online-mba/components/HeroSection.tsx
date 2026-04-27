"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, CreditCard, Briefcase, Users, Sparkles } from "lucide-react";
import LeadForm from "./LeadForm";

export default function HeroSection({
  onDownloadClick,
}: {
  onDownloadClick: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 8 && currentHour < 19) {
        const target = new Date(now);
        target.setHours(19, 0, 0, 0);
        const diff = target.getTime() - now.getTime();

        return {
          hours: Math.floor(diff / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="px-4 py-8 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col rounded-sm lg:flex-row lg:bg-amity-blue lg:rounded-[1.5rem] lg:overflow-hidden relative gap-8 lg:gap-0 ">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/hero-v2.png"
            alt="Background"
            fill
            className="object-cover object-right opacity-100 mix-blend-luminosity translate-x-[15%]"
            priority
          />
          {/* <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1B325D 15%, transparent 20%)",
            }}
          /> */}
        </div>

        {/* Left Content (Text) */}
        <div className="relative bg-amity-blue lg:bg-transparent rounded-[2.5rem] lg:rounded-none p-8 md:p-12 lg:w-3/5 overflow-hidden flex flex-col justify-center min-h-[350px]">
          {/* Mobile Background Image */}
          <div className="absolute inset-0 z-0 lg:hidden">
            <Image
              src="/amity/hero-person.png"
              alt="Background"
              fill
              className="object-cover object-right opacity-100 mix-blend-luminosity translate-x-[30%] scale-130"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1B325D 20%, transparent 85%)",
              }}
            />
          </div>

          <div className="relative z-10 text-white space-y-3">
            <p
              className="text-xs font-bold sm:text-xl  tracking-[0.2em] text-white/95 animate-fade-in-up "
              style={{ animationDelay: "0.1s" }}>
              UGC ENTITLED ONLINE MBA
            </p>

            <h1
              className="text-[28px] md:text-5xl lg:text-6xl font-amity-serif leading-tight animate-fade-in-up text-white"
              style={{ animationDelay: "0.2s" }}>
              Master of Business Administration (MBA)
            </h1>

            <div
              className="inline-block -mt-2 rounded-md tracking-wider font-medium shimmer sm:text-sm bg-[#E5F1FF]/90 text-[#19233A] px-2 py-1 text-xs animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}>
              DESIGNED FOR WORKING PROFESSIONALS
            </div>

            <div
              className="pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}>
              <button
                onClick={onDownloadClick}
                className="font-raleway text-sm sm:text-md bg-amity-yellow text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full sm:w-auto justify-center">
                DOWNLOAD BROCHURE <Download size={18} />
              </button>
            </div>

            {/* Badges Hero moved below */}
          </div>
        </div>

        {/* Right Form */}

        <div className="relative z-10 w-full  lg:w-2/5 flex items-center justify-start lg:p-12">
          <div className="bg-white rounded-3xl p-8 border-2 border-amity-blue/20 shadow-2xl w-full max-w-md mx-auto">
            <h2 className="text-3xl font-amity-serif text-center amity-blue mb-6">
              Enquire Now
            </h2>

            {/* EMI Offer Banner */}
            {timeLeft && (
              <div className=" border border-amity-blue rounded-xl p-3 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-amity-blue">
                    EMI offers ends in:
                  </span>
                </div>
                <div className="flex gap-1 text-amity-blue font-bold text-sm">
                  <div className="bg-amity-blue text-amity-yellow px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <span className="py-1">:</span>
                  <div className="bg-amity-blue text-amity-yellow px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <span className="py-1">:</span>
                  <div className="bg-amity-blue text-amity-yellow px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
            )}

            <LeadForm buttonStyle="default" />
          </div>
        </div>
      </div>

      {/* Marquee Badges Carousel */}
      <div className="mt-12 relative overflow-hidden py-6 border-y border-amity-blue/5">
        {/* Gradient Mask */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-4 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {[
                {
                  icon: <CreditCard size={18} />,
                  text: "Flexible, No-Cost EMI",
                },
                {
                  icon: <Briefcase size={18} />,
                  text: "Industry Relevant skills",
                },
                {
                  icon: <Users size={18} />,
                  text: "Personalised Learning methods",
                },
                { icon: <Sparkles size={18} />, text: "AI-ready Career" },
              ].map((badge, i) => (
                <div
                  key={`${groupIndex}-${i}`}
                  className="flex items-center gap-3 bg-amity-yellow border border-amity-yellow rounded-2xl px-4 py-2 shadow-sm  hover:shadow-md transition-all group whitespace-nowrap min-w-[250px]">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-amity-blue group-hover:bg-amity-blue group-hover:text-amity-yellow transition-colors">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-semibold text-amity-blue">
                    {badge.text}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
