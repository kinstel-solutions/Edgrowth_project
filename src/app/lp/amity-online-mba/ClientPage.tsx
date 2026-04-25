"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  CheckCircle,
  Smartphone,
  BookOpen,
  Star,
  PlayCircle,
  MapPin,
  Users,
  Building,
  GraduationCap,
  Calendar,
  Trophy,
  UserPlus,
  Briefcase,
  Quote,
  Phone,
  CreditCard,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function ClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhySayYesExpanded, setIsWhySayYesExpanded] = useState(false);
  const [openSemester, setOpenSemester] = useState<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("reveal-on-scroll-left")) {
              entry.target.classList.add("animate-fade-in-left");
              entry.target.classList.remove("opacity-0", "-translate-x-8");
            } else if (
              entry.target.classList.contains("reveal-on-scroll-right")
            ) {
              entry.target.classList.add("animate-fade-in-right");
              entry.target.classList.remove("opacity-0", "translate-x-8");
            } else if (
              entry.target.classList.contains("reveal-on-scroll-down")
            ) {
              entry.target.classList.add("animate-fade-in-down");
              entry.target.classList.remove("opacity-0", "-translate-y-4");
            } else {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0", "translate-y-4");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(
        ".reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right, .reveal-on-scroll-down",
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, [isWhySayYesExpanded]);

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
  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      subjects: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication",
        "Accounting for Managers",
        "Marketing Management",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      subjects: [
        "Legal Aspects of Business",
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Conflict Resolution and Management",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      subjects: [
        "Strategic Management",
        "Minor Project",
        "Professional Ethics",
        "Specialization Elective 1",
        "Specialization Elective 2",
        "Specialization Elective 3",
        "Specialization Elective 4",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      subjects: [
        "Major Project",
        "Management in Action Social...",
        "Digital Marketing",
        "Specialization Elective 1",
        "Specialization Elective 2",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .font-amity-serif { font-family: "Playfair Display", "Merriweather", Georgia, serif; }
        .font-raleway { font-family: var(--font-raleway), "__Raleway_504afd", "__Raleway_Fallback_504afd", sans-serif; }
        .amity-blue { color: #1B325D; }
        .bg-amity-blue { background-color: #1B325D; }
        .amity-yellow { color: #FFC907; }
        .bg-amity-yellow { background-color: #FFC907; }
      `,
        }}
      />

      {/* Top Header */}
      <header className="bg-amity-blue py-4 mt-2 h-[75px] rounded-2xl mx-2 sm:mx-8 sm:mt-4 px-4 md:px-8 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/amity/amity-online-logo.png"
              alt="Amity University Online"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
        <a
          href="tel:+910000000000"
          className="font-raleway text-amity-blue bg-amity-yellow px-4 sm:px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-amity-yellow hover:text-amity-blue transition-colors">
          <span className="hidden sm:inline">ENQUIRE NOW</span>
          <span className="sm:hidden">ENQUIRE NOW</span>
          <ArrowRight size={22} />
        </a>
      </header>

      {/* Admissions Banner */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="font-raleway mt-4 mx-2 sm:mx-8 rounded-lg bg-amity-yellow text-center py-2 text-sm font-semibold text-black px-4 cursor-pointer hover:bg-yellow-500 transition-colors">
        Admissions Open for Jul'26 Session. Get Early-Bird Scholarship.
        <span className="font-bold text-amity-blue"> Apply Now</span>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-8 md:px-12 max-w-[1400px] mx-auto">
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
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1B325D 35%, transparent 90%)",
              }}
            />
          </div>

          {/* Left Content (Text) */}
          <div className="relative bg-amity-blue lg:bg-transparent rounded-[2.5rem] lg:rounded-none p-8 md:p-12 lg:w-3/5 overflow-hidden flex flex-col justify-center min-h-[450px]">
            {/* Mobile Background Image */}
            <div className="absolute inset-0 z-0 lg:hidden">
              <Image
                src="/amity/hero-person.png"
                alt="Background"
                fill
                className="object-cover object-right opacity-100 mix-blend-luminosity translate-x-[50%] scale-135"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #1B325D 25%, transparent 95%)",
                }}
              />
            </div>

            <div className="relative z-10 text-white space-y-3">
              <p
                className="text-sm font-bold tracking-[0.2em] text-white/95 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}>
                UGC ENTITLED ONLINE MBA
              </p>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-amity-serif leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}>
                Master of Business Administration (MBA)
              </h1>

              <div
                className="inline-block bg-[#E5F1FF] text-[#19233A] px-4 py-2 font-bold rounded-md text-sm animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}>
                Designed for Working Professionals
              </div>

              {/* <div className="tracking-widest text-sm font-semibold pt-2">
                DURATION: 2 YEARS
              </div> */}

              <div
                className="pt-2 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="font-raleway bg-amity-yellow text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full sm:w-auto justify-center">
                  DOWNLOAD BROCHURE <Download size={18} />
                </button>
              </div>

              {/* QS Ranking Badge */}
              {/* <div className="inline-flex bg-white text-[#19233A] rounded-xl mt-6 overflow-hidden flex-col sm:flex-row">
                <div className="flex items-center gap-3 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200">
                  <div className="w-8 h-8 bg-yellow-500 text-white font-bold flex items-center justify-center text-xs rounded-sm shrink-0">
                    QS
                  </div>
                  <span className="font-bold text-sm leading-tight sm:max-w-[150px]">
                    India's only Online MBA Ranked by QS, 2024
                  </span>
                </div>
                <div className="px-4 py-3 font-bold text-sm flex items-center justify-center bg-gray-50 whitespace-nowrap">
                  Asia Pacific
                  <br className="hidden sm:block" /> Top 10
                </div>
              </div> */}

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}>
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
                    key={i}
                    className="flex items-center text-white gap-2 bg-amity-blue/10 backdrop-blur-sm border border-amity-yellow/20 rounded-lg px-3 py-2 text-xs font-medium ">
                    <span className="text-amity-yellow">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}

          <div className="relative z-10 w-full  lg:w-2/5 flex items-center justify-center lg:p-12">
            <div className="bg-white rounded-3xl p-8 border-2 border-amity-blue/20 shadow-2xl w-full max-w-md mx-auto">
              <h2 className="text-3xl font-amity-serif text-center amity-blue mb-6">
                Enquire Now
              </h2>

              {/* EMI Offer Banner */}
              {timeLeft && (
                <div className="bg-amity-yellow/20 border border-amity-blue rounded-xl p-3 mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <CreditCard
                      className="text-amity-blue"
                      size={20}
                    /> */}
                    <span className="font-bold text-sm text-amity-blue">
                      EMI offers ends in:
                    </span>
                  </div>
                  <div className="flex gap-1 text-amity-blue font-bold text-sm">
                    <div className="bg-white px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <span className="py-1">:</span>
                    <div className="bg-white px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <span className="py-1">:</span>
                    <div className="bg-white px-2 py-1 rounded shadow-sm min-w-[32px] text-center">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="w-24 px-2 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-300 shrink-0">
                        <option>+91 (IND)</option>
                        <option>+1 (US)</option>
                        <option>+44 (UK)</option>
                        <option>+61 (AUS)</option>
                        <option>+971 (UAE)</option>
                        <option>+86 (CN)</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Enter your no."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm min-w-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Email Id <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="abc@xyz.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="mt-0.5 shrink-0">
                    <div className="w-5 h-5 rounded-full border-2 border-amity-blue flex items-center justify-center p-0.5">
                      <div className="w-full h-full bg-amity-blue rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    By entering these details I agree that Amity University
                    Online and its associates can contact me with updates &
                    notifications via Email, SMS, WhatsApp, and Voice call as
                    per the{" "}
                    <a
                      href="#"
                      className="underline">
                      Privacy Policy
                    </a>
                    . This consent will override any registration for DNC /
                    NDNC.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="font-raleway w-full bg-gray-200 text-gray-500 font-semibold py-3.5 rounded-full text-sm hover:bg-amity-yellow hover:text-amity-blue transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Official Website Strip */}
      {/* <div className="bg-[#263755] text-center py-3 text-white text-xs md:text-sm px-4">
        <span className="opacity-80">
          Official website of Amity University Online.
        </span>{" "}
        <span className="opacity-60 md:ml-4 block md:inline mt-1 md:mt-0">
          Payments are accepted only through the secure link...
        </span>
      </div> */}

      {/* Stats Row */}
      <section className="px-4 py-6 md:px-12 max-w-[1400px] mx-auto">
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
      </section>

      {/* Why Say Yes To Amity Online */}
      <section className="bg-white py-16 border-t border-gray-100">
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
              .slice(0, isWhySayYesExpanded ? 6 : 3)
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

          <div className="mt-12 text-center reveal-on-scroll opacity-0 translate-y-4">
            <button
              onClick={() => setIsWhySayYesExpanded(!isWhySayYesExpanded)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-amity-blue text-amity-blue font-bold hover:bg-amity-blue hover:text-white transition-all duration-300">
              {isWhySayYesExpanded ? "VIEW LESS" : "VIEW ALL BENEFITS"}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isWhySayYesExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* What Makes This MBA Different */}
      <section className="bg-gray-50 py-16">
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
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
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

            {/* Expanded Card */}
            {/* <div
              className="bg-[#F4F7FB] rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-500 reveal-on-scroll-right opacity-0 translate-x-8"
              style={{ animationDelay: "0.4s" }}>
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Interactive Learning"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-amity-blue/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-[#19233A] font-bold text-xl mb-3 group-hover:text-amity-blue transition-colors">
                  Interactive Learning Material With AI-Powered Features
                </h3>
                <div className="text-sm text-gray-600 leading-relaxed space-y-1 mt-2">
                  <p>
                    Study smarter, not harder, with tools that give you an edge:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li className="group-hover:translate-x-1 transition-transform duration-300">
                      AI-powered summaries for instant clarity.
                    </li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300">
                      Smart question generation to test your understanding.
                    </li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300">
                      A built-in note-taker to organise your thoughts
                      effortlessly.
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Get your Prestigious Degree today */}
      <section className="bg-white py-16 border-t border-gray-100">
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
        </div>
      </section>

      {/* Program Overview & Structure */}
      <section className="bg-slate-50 py-16 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-6 reveal-on-scroll opacity-0 translate-y-4">
            Program Overview & Structure
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 reveal-on-scroll opacity-0 translate-y-4">
            Master Of Business Administration (Online MBA) program created by
            Amity Online provides a holistic view of business management that
            will not only cover modern tools and practices but will also provide
            you with the ability to manage critical business decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {semesters.map((sem, index) => (
              <div
                key={sem.id}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 reveal-on-scroll-down opacity-0 -translate-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className="flex justify-between items-center cursor-pointer p-6"
                  onClick={() =>
                    setOpenSemester(openSemester === sem.id ? null : sem.id)
                  }>
                  <h3 className="text-xl font-bold amity-blue">{sem.title}</h3>
                  <span
                    className={`transition-transform duration-300 ${
                      openSemester === sem.id ? "rotate-180" : ""
                    }`}>
                    <ChevronDown
                      size={20}
                      className="text-amity-blue"
                    />
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSemester === sem.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <ul className="space-y-3 text-sm text-gray-600">
                      {sem.subjects.map((subject, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 transition-all duration-500 transform ${
                            openSemester === sem.id
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-4 opacity-0"
                          }`}
                          style={{ transitionDelay: `${idx * 100}ms` }}>
                          <CheckCircle
                            className="text-amity-yellow shrink-0 mt-0.5"
                            size={16}
                          />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="bg-white py-16 border-t border-gray-100">
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
              "Human Resource Management",
              "Marketing Management",
              "Finance Management",
              "Data Science",
              "Digital Marketing",
              "Operations Management",
              "International Business",
              "Business Analytics",
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 hover:border-amity-yellow p-6 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col items-center justify-center text-center gap-3">
                <Briefcase
                  className="text-amity-blue opacity-70"
                  size={28}
                />
                <h4 className="font-semibold text-amity-blue text-sm">
                  {spec}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Campus Experiences Section */}
      {/* <section className="bg-slate-50 py-16 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-4">On-Campus Experiences</h2>
            <p className="text-gray-600">
              We offer immersive on-campus experiences, curated industry tours, and high-impact mid-year meetups to connect you with faculty, peers, and industry leaders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workshops", desc: "Practical, expert-led sessions designed for experiential learning.", icon: <BookOpen /> },
              { title: "Campus Classes", desc: "In-person classes held on campus for deeper learning and peer interaction.", icon: <GraduationCap /> },
              { title: "Industry Visits", desc: "Guided field visits providing real-world industrial exposure.", icon: <Building /> },
              { title: "Convocation", desc: "Formal degree distribution ceremony celebrating academic milestones.", icon: <Trophy /> },
              { title: "On-Campus Connect", desc: "Impactful campus sessions promoting peer learning and faculty connections.", icon: <UserPlus /> },
              { title: "Mid-Year Meetup", desc: "Interactive sessions fostering interactions with peers and faculty.", icon: <Calendar /> },
              { title: "Sangathan", desc: "Amity's annual flagship event with inter-campus sports activities.", icon: <Trophy /> },
              { title: "Samagam", desc: "Orientation session introducing learners to platforms, faculty, and academic life.", icon: <Users /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-amity-blue rounded-full flex items-center justify-center mb-4">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
                <h3 className="font-bold text-amity-blue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Faculty Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-4">
              Learn From The Best
            </h2>
            <p className="text-gray-600">
              World-class education delivered by leading international faculty
              and industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Coral Jasmine Barboza",
                role: "Deputy Director",
                exp: "10+ years",
                bg: "PhD in General Management",
              },
              {
                name: "Dr. Divya Bansal",
                role: "Deputy Director",
                exp: "18+ years",
                bg: "PhD in Management",
              },
              {
                name: "Dr. Sachit Paliwal",
                role: "Associate Professor",
                exp: "12+ years",
                bg: "MBA in Finance Management",
              },
              {
                name: "Dr. Pragati Sahai",
                role: "Assistant Professor",
                exp: "17+ years",
                bg: "PhD in Biotechnology",
              },
              {
                name: "Dr. Mona Chaudhary",
                role: "Assistant Professor",
                exp: "9+ years",
                bg: "MBA",
              },
              {
                name: "Dr. Sunil Kumar",
                role: "Associate Professor",
                exp: "10+ years",
                bg: "Ph.D. in Management",
              },
              {
                name: "Dr. Rashmi Saxena",
                role: "Assistant Professor",
                exp: "14+ years",
                bg: "PhD in Management",
              },
              {
                name: "Dr. Harshita Singh",
                role: "Assistant Professor",
                exp: "3+ years",
                bg: "PhD in SHRM",
              },
            ].map((prof, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl p-6 text-center hover:border-amity-blue transition-colors group cursor-pointer bg-slate-50 hover:bg-white">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <UserPlus
                    className="text-gray-400"
                    size={32}
                  />
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
      </section>

      {/* Fee Structure Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-8">
            Fee Structure
          </h2>
          <hr className="border-gray-200 mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-amity-blue text-white rounded-2xl p-8 relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="font-medium text-lg mb-1">
                  24 Months Zero Cost
                </h3>
                <h3 className="font-medium text-lg mb-6">EMI</h3>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">₹8,906</div>
                <div className="text-gray-300 font-medium text-lg">
                  Interest free
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-amity-yellow opacity-80">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle
                    cx="12"
                    cy="8"
                    r="5"></circle>
                  <path d="M10 7h4"></path>
                  <path d="M10 9h4"></path>
                  <path d="M12 5v6"></path>
                  <path d="M4.5 16.5c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5"></path>
                  <path d="M21 16l-3.5 2"></path>
                  <path d="M17.5 18H20"></path>
                  <path d="M20 18v2.5"></path>
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] relative overflow-hidden">
              <h3 className="text-[#3A4E7A] font-medium text-lg mb-6">
                Per Semester Fee
              </h3>
              <div className="text-4xl font-bold amity-blue mt-auto">
                ₹56,300
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 text-gray-400">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                  <path d="M8 7h8"></path>
                  <path d="M8 11h8"></path>
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] relative overflow-hidden">
              <div>
                <h3 className="text-[#3A4E7A] font-medium text-lg mb-3">
                  Full Program Fee
                </h3>
                <p className="text-[#3A4E7A] text-xs leading-relaxed max-w-[150px]">
                  Pay one time full fee and get extra benefits
                </p>
              </div>
              <div className="text-4xl font-bold amity-blue mt-auto">
                ₹2,25,000
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-5 text-gray-400">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] items-center text-center">
              <h3 className="text-[#3A4E7A] font-medium text-lg mb-6">
                Attractive Scholarships Available
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-raleway bg-amity-yellow text-amity-blue font-bold px-6 py-2.5 rounded-full mt-auto flex items-center gap-2 hover:bg-yellow-400 transition-colors w-max mx-auto text-sm">
                EXPLORE NOW <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <p className="text-center text-[#3A4E7A] font-medium mt-4">
            Finance Your Future, Hassle-Free Loan Assistance Available
          </p>
        </div>
      </section>

      {/* Text Reviews Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600">
              Hear what our learners have to say about their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "The MBA program's flexibility allowed me to balance my job and studies seamlessly. The UDL-based learning approach made complex business concepts very easy to digest.",
                name: "Rohan Sharma",
                role: "Marketing Manager",
              },
              {
                text: "Prof. AMI has been a game-changer! Having an AI mentor available 24/7 helped me stay on top of my assignments. The industry projects gave me real-world insights.",
                name: "Priya Desai",
                role: "Business Analyst",
              },
              {
                text: "Getting a QS-ranked degree from Amity Online has significantly boosted my resume. The live sessions with international faculty were my favorite part of the curriculum.",
                name: "Aditya Verma",
                role: "Operations Lead",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl relative shadow-sm border border-gray-100">
                <Quote
                  className="text-amity-yellow mb-4 opacity-50"
                  size={32}
                />
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amity-blue text-white rounded-full flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-amity-blue text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-3xl font-amity-serif text-center amity-blue mb-8">
              Enquire Now
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select className="w-20 px-2 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-300 shrink-0">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter your no."
                      className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm min-w-0"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="abc@xyz.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-300 text-sm"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="mt-0.5 shrink-0">
                  <div className="w-5 h-5 rounded-full border-2 border-amity-blue flex items-center justify-center p-0.5">
                    <div className="w-full h-full bg-amity-blue rounded-full"></div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 leading-tight">
                  By entering these details I agree that Amity University Online
                  and its associates can contact me with updates & notifications
                  via Email, SMS, WhatsApp, and Voice call as per the{" "}
                  <a
                    href="#"
                    className="underline">
                    Privacy Policy
                  </a>
                  . This consent will override any registration for DNC / NDNC.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="font-raleway w-full bg-amity-blue text-white font-semibold py-3.5 rounded-full text-sm hover:bg-blue-900 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer minimal */}
      <footer className="bg-amity-blue py-12 text-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amity-yellow rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-amity-blue rounded-full"></div>
            </div>
            <div className="flex flex-col text-white font-semibold leading-none">
              <span className="text-lg tracking-wide">AMITY</span>
              <span className="text-[8px] tracking-widest text-gray-400">
                ONLINE
              </span>
            </div>
          </div>
          <div className="text-sm text-center md:text-right">
            <p className="mb-2">
              Disclaimer: We act as a marketing service partner only. Amity
              University holds the right to request the change or removal of any
              non-relevant content. Images used are for illustrative purposes
              and do not directly represent the respective colleges or
              universities.
            </p>
            <p className="opacity-70">
              &copy; {new Date().getFullYear()} EdGrowth Consultants LLP. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
