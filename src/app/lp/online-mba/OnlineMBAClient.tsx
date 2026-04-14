"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  GraduationCap,
  Shield,
  IndianRupee,
  Headset,
  Star,
  ChevronDown,
  Clock,
  Wifi,
  Smartphone,
  Users,
  BookOpen,
  BarChart3,
  Award,
  Briefcase,
  Loader2,
  AlertCircle,
  Phone,
  ArrowRight,
  Globe,
  Handshake,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/app/actions/contact";
import { cn } from "@/lib/utils";
import { z } from "zod";

// ─── Local Schema for Landing Page ──────────────────────────────────────────

const lpFormSchema = z.object({
  name: z.string().max(100, "Name is too long").optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Invalid phone number format. Use 10 digits or include country code.",
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email is too long"),
  location: z.string().max(100, "Location is too long").optional(),
  interestedCourse: z.string().max(200, "Course name is too long").optional(),
});

type LPFormData = z.infer<typeof lpFormSchema>;

// ─── Data ────────────────────────────────────────────────────────────────────

const universities = [
  {
    name: "Amity University",
    duration: "2 Years",
    fee: "₹49,750",
    emi: "", // "Show EMI options"
    accreditation: "UGC, NAAC A+",
    image: "/universities/amity-university-gwalior-campus-admission.webp",
  },
  {
    name: "Manipal University Jaipur",
    duration: "2 Years",
    fee: "₹43,750",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/MUJ-mobile-banner.png",
  },
  {
    name: "Jain University",
    duration: "2 Years",
    fee: "₹49,000",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/jain university.jpg",
  },
  {
    name: "Lovely Professional University",
    duration: "2 Years",
    fee: "₹40,400",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/lpu-jalandhar-360559.webp",
  },
  {
    name: "Shoolini University",
    duration: "2 Years",
    fee: "₹32,500",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/shooliniUniversity.jpg",
  },
  {
    name: "Uttaranchal University",
    duration: "2 Years",
    fee: "₹24,500",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/uttaranchal university.png",
  },
  {
    name: "DY Patil Vidyapeeth Pune",
    duration: "2 Years",
    fee: "₹50,000",
    emi: "",
    accreditation: "UGC, NAAC A+",
    image: "/universities/Dr.-D.-Y.-Patil-Vidyapeeth.jpg",
  },
  {
    name: "Narsee Monjee University",
    duration: "2 Years",
    fee: "₹52,500",
    emi: "",
    accreditation: "UGC, NAAC A++",
    image: "/universities/narsee monjee university.jpg",
  },
];

const testimonials = [
  {
    name: "Aditya Sharma",
    program: "MBA (Operations)",
    quote:
      "After 7 years in tech, I needed an MBA to move into leadership. EdGrowth helped me find a program that fit my schedule. Within months of graduating, I was promoted to Associate Director with a 45% salary hike.",
  },
  {
    name: "Megha Iyer",
    program: "MBA (Finance)",
    quote:
      "The placement support is real. EdGrowth didn't just help with admission; their launchpad events connected me with top recruiters. I transitioned from a mid-sized firm to a global leader shortly after my MBA.",
  },
  {
    name: "Karthik Nair",
    program: "MBA (International Business)",
    quote:
      "I was skeptical about 'online' degrees, but the UGC-entitled programs EdGrowth suggested are globally recognized. My company even sponsored 50% of the fee because the university choice was so prestigious.",
  },
  {
    name: "Sanya Malhotra",
    program: "MBA (Marketing)",
    quote:
      "Transitioning from sales to marketing was tough until I took the MBA EdGrowth recommended. The curriculum was so practical that I started applying strategies at work from day one. I'm now leading a team of 15.",
  },
  {
    name: "Rohan Deshmukh",
    program: "MBA (Human Resources)",
    quote:
      "The transparency on EMI and fee structures made a huge difference. I managed my expenses easily while earning a degree from a NAAC A++ university. The network of alumni has been invaluable for my growth.",
  },
];

const faqs = [
  {
    q: "Are the universities listed on EdGrowth UGC approved?",
    a: "Yes. Every program listed is UGC-Entitled, NAAC Accredited, and fully recognized by the Government of India.",
  },
  {
    q: "Is EdGrowth a university or an education agent?",
    a: "Neither. EdGrowth is an independent educational advisory platform that helps you compare Online MBAs across India's top accredited universities.",
  },
  {
    q: "Do I have to pay EdGrowth for its services?",
    a: "No. All comparison and counselling services are 100% free. You pay your course fee directly to the university you choose.",
  },
  {
    q: "Is the information on EdGrowth verified?",
    a: "Absolutely. We source details directly from university admission offices and regularly verify fees, syllabus, and accreditation data.",
  },
  {
    q: "Which universities can I compare on EdGrowth?",
    a: "You can compare leading universities like Amity, Manipal, Jain, LPU, Shoolini, Uttaranchal, DY Patil, Narsee Monjee, and more — all officially UGC-Approved.",
  },
];

const comparisonFactors = [
  { icon: Shield, label: "Accreditation", color: "text-blue-500" },
  { icon: Briefcase, label: "Placement Record", color: "text-emerald-500" },
  { icon: IndianRupee, label: "Fees & EMI", color: "text-amber-500" },
  { icon: Wifi, label: "Live Classes", color: "text-violet-500" },
  { icon: BookOpen, label: "Syllabus", color: "text-rose-500" },
  { icon: Clock, label: "Flexibility", color: "text-cyan-500" },
  { icon: Users, label: "Alumni Network", color: "text-orange-500" },
  { icon: Smartphone, label: "Mobile LMS", color: "text-teal-500" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function OnlineMBAClient() {
  return (
    <div className="flex flex-col">
      {/* Urgency Banner */}
      {/* <UrgencyBanner /> */}

      {/* Hero + Lead Form */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* University Comparison */}
      <UniversityComparison />

      {/* Why EdGrowth */}
      <WhyEdGrowth />

      {/* Compare Across 8 Factors */}
      {/* <ComparisonFactors /> */}

      {/* Mid-page CTA */}
      <MidPageCTA />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Sticky Mobile CTA */}
      {/* <StickyMobileCTA /> */}
    </div>
  );
}

// ─── Urgency Banner ──────────────────────────────────────────────────────────

function UrgencyBanner() {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-semibold">
      <span className="inline-flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
        Limited offer! Get up to <strong>₹5,000 Cashback</strong> on MBA
        Enrollment
        <span className="hidden sm:inline">— Only a few seats left!</span>
      </span>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-12 md:py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Headline & Value Props */}
          <div>
            <FadeIn direction="left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-md font-medium text-primary mb-6">
                <GraduationCap className="h-4 w-4 mr-2" />
                Prestigious MBA Degrees, Now Online
              </div>
            </FadeIn>

            <FadeIn
              delay={100}
              direction="left">
              <h1 className="text-4xl  sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight text-balance">
                Top{" "}
                <span className="text-primary  tracking-normal font-extrabold shimmer  ">
                  Online MBA
                </span>{" "}
                <span className="md:block">
                  programs starting at{" "}
                  <span className="text-primary shimmer font-extrabold">
                    ₹4,500/month
                  </span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn
              delay={200}
              direction="left">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Our team of highly experienced academic and career counsellors
                will help you find the right, globally-recognized MBA program
                based on your unique requirements, budget and career goals.
              </p>
            </FadeIn>

            <FadeIn
              delay={250}
              direction="left">
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#lead-form"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 text-md font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all shimmer">
                  Get Free Counselling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+918527511409"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/20 bg-background text-foreground px-8 text-md font-bold hover:bg-primary/5 transition-all">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Talk to an Expert Now
                </a>
              </div>
            </FadeIn>

            <FadeIn
              delay={300}
              direction="up">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "UGC Approved" },
                  { icon: Award, text: "NAAC Accredited" },
                  { icon: CheckCircle2, text: "100% Verified" },
                  { icon: Globe, text: "Globally Recognized" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center font-bold gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-primary shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Accreditation Logos */}
            <FadeIn
              delay={400}
              direction="up">
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { src: "/accredation-images/ugc.png", alt: "UGC" },
                  { src: "/accredation-images/naac.png", alt: "NAAC" },
                  { src: "/accredation-images/wes.jpg", alt: "WES" },
                  { src: "/accredation-images/AICTE-Logo.webp", alt: "AICTE" },
                ].map((badge) => (
                  <div
                    key={badge.alt}
                    className="relative h-18 w-20 sm:h-14 sm:w-20 bg-white rounded-lg border border-border/50 p-1.5 flex items-center justify-center shadow-sm">
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — Lead Form */}
          <FadeIn
            delay={150}
            direction="right">
            <div
              id="lead-form"
              className="scroll-mt-20">
              <LeadCaptureForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Lead Capture Form ───────────────────────────────────────────────────────

function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LPFormData>({
    resolver: zodResolver(lpFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LPFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const result = await sendContactEmail({
        name: data.name || "Anonymous",
        email: data.email,
        phone: data.phone,
        location: data.location || "Not specified",
        programs: "Online MBA",
        otherInfo: `[Lead from: Online MBA Landing Page]`.trim(),
      });

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your enquiry! Sit tight, our MBA expert will call you as soon as possible.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "A network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus.type === "success") {
    return (
      <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-xl text-center animate-in fade-in zoom-in duration-300">
        <div className="h-16 w-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Request Submitted!
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {submitStatus.message}
        </p>
        <button
          onClick={() => setSubmitStatus({ type: null, message: null })}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">
          Get Free Expert Counselling
        </h2>
        <p className="text-sm text-muted-foreground">
          Shortlist your top 3 MBA programs in a free 10-minute call.
          <br /> Also, Get <b>best EMI Offers</b>, scholarship details,{" "}
          <b>Brochure</b> & more.
        </p>
      </div>

      {submitStatus.type === "error" && (
        <div className="bg-destructive/10 border border-destructive/20 p-3 rounded-md flex items-center gap-2 text-destructive text-sm font-medium mb-4">
          <AlertCircle
            size={16}
            className="shrink-0"
          />
          <p>{submitStatus.message}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="lp-name"
            className="text-sm font-medium text-foreground flex justify-between">
            Full Name{" "}
            <span className="text-muted-foreground font-normal text-xs">
              (Optional)
            </span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="lp-name"
            className={cn(
              "w-full h-11 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm",
              errors.name && "border-destructive",
            )}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="lp-email"
              className="text-sm font-medium text-foreground flex justify-between">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="lp-email"
              className={cn(
                "w-full h-11 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm",
                errors.email && "border-destructive",
              )}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="lp-phone"
              className="text-sm font-medium text-foreground flex justify-between">
              Mobile Number <span className="text-destructive">*</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="lp-phone"
              className={cn(
                "w-full h-11 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm",
                errors.phone && "border-destructive",
              )}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="lp-location"
              className="text-sm font-medium text-foreground flex justify-between">
              City{" "}
              <span className="text-muted-foreground font-normal text-xs">
                (Optional)
              </span>
            </label>
            <input
              {...register("location")}
              type="text"
              id="lp-location"
              className="w-full h-11 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              placeholder="Enter your city"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="lp-course"
              className="text-sm font-medium text-foreground flex justify-between leading-tight">
              Interested University/Course{" "}
              <span className="text-muted-foreground font-normal text-xs">
                (Optional)
              </span>
            </label>
            <input
              {...register("interestedCourse")}
              type="text"
              id="lp-course"
              className="w-full h-11 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              placeholder="Fill this field to get brochure"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25 shimmer">
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Get Free Counselling
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-muted-foreground leading-relaxed">
          🔒 Your information is secure. We don't spam — ever.
        </p>
      </form>
    </div>
  );
}

// ─── Trust Badges ────────────────────────────────────────────────────────────

function TrustBadges() {
  return (
    <section className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            {[
              { value: "1000+", label: "Happy Students" },
              { value: "15+", label: "Partner Universities" },
              { value: "upto 95%", label: "Placement Assistance" },
              { value: "100%", label: "Free- Expert Counselling" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── University Comparison ───────────────────────────────────────────────────

function UniversityComparison() {
  return (
    <section
      id="universities"
      className="py-16 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Confused about which online mba to pursue?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve got you covered! Our experts has researched over
              <b> hundreds of online MBA courses</b> and shortlisted top 15,
              best mba programs in 2026, based on industry recognition, students
              reviews, fees, & more!
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, idx) => (
            <FadeIn
              key={uni.name}
              delay={idx * 80}
              direction="up"
              className="h-full">
              <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* University Image */}
                <div className="relative h-36 w-full overflow-hidden bg-muted">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-foreground text-2xl mb-4 leading-tight">
                    {uni.name}
                  </h3>

                  <div className="space-y-1 text-md">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Duration</span>
                      <span className="font-medium text-foreground">
                        {uni.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Fees</span>
                      <span className="font-bold text-primary">
                        {uni.fee}
                        <span className="text-xs font-normal">/Sem</span>
                      </span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Accreditation</span>
                      <span className="font-medium text-foreground text-xs">
                        {uni.accreditation}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border space-y-1.5 flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      100% Placement Support
                    </div>
                    {/* <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      EMI Option Available
                    </div> */}
                  </div>

                  <div className="mt-4 space-y-2">
                    <a
                      href="#lead-form"
                      className="flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground text-md font-bold transition-all hover:bg-primary/90 w-full">
                      Show Best EMI Offers{uni.emi}
                    </a>
                    <a
                      href="#lead-form"
                      className="flex h-10 items-center justify-center rounded-md border border-primary text-primary text-md font-bold transition-all hover:bg-primary/5 w-full">
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="#lead-form"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-all hover:bg-primary/90 shimmer">
              More Online MBA Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Why EdGrowth ────────────────────────────────────────────────────────────

function WhyEdGrowth() {
  const reasons = [
    {
      icon: Shield,
      title: "Free Expert Guidance",
      description:
        "Get unbiased guidance from industry experts who will help you choose the best online MBA program based on your career goals, interests and budget.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: IndianRupee,
      title: "Financial Aid",
      description:
        "Scholarship and flexible payment options available to ensure education is accessible to everyone. We also help you find 0% interest EMI options.",
      color:
        "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      icon: Handshake,
      title: "Extensive Alumni & Placement Network",
      description:
        "Access to a robust alumni network. Post-completion, gain access to recruitment drives and launchpad events for placements into top global MNCs.",
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
      icon: GraduationCap,
      title: "Hassle-Free Admission Process",
      description:
        "Simple admission process supported by dedicated student counseling throughout your program journey.",
      color:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Students Choose EdGrowth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by 3000+ students across India for unbiased MBA guidance.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <FadeIn
              key={reason.title}
              delay={idx * 120}
              direction="up">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div
                  className={cn(
                    "h-12 w-12 rounded-xl flex items-center justify-center mb-4",
                    reason.color,
                  )}>
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Factors ──────────────────────────────────────────────────────

function ComparisonFactors() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Compare Across 8 Key Factors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make an informed decision by comparing universities on the metrics
              that matter most.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {comparisonFactors.map((factor, idx) => (
            <FadeIn
              key={factor.label}
              delay={idx * 60}
              direction="up">
              <div className="flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 text-center group">
                <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <factor.icon className={cn("h-6 w-6", factor.color)} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {factor.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mid-page CTA ────────────────────────────────────────────────────────────

function MidPageCTA() {
  return (
    <section className="bg-foreground text-primary-foreground py-16 mx-4 rounded-3xl px-8 md:px-16 text-center">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Still Confused? Let Us Find the Perfect MBA for You.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Get a free 10-minute counselling call to shortlist your top 3
          universities based on your career goals and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#lead-form"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-all hover:bg-primary/90 shimmer">
            Get Free Counselling
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="tel:+918527511409"
            className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-8 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-all">
            <Phone className="mr-2 h-4 w-4" />
            Call: +91 8527511409
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              How online MBA has helped transform careers
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by 1000+ students | Partnered with Top 10+ UGC-Approved
              Universities
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((t, idx) => (
            <FadeIn
              key={t.name}
              delay={idx * 100}
              direction="up">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">
                    — {t.name}
                  </p>
                  <p className="text-xs text-primary">{t.program}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Extra testimonials — compact */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-6">
          {testimonials.slice(3).map((t, idx) => (
            <FadeIn
              key={t.name}
              delay={(idx + 3) * 100}
              direction="up">
              <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground mt-2">
                    — {t.name},{" "}
                    <span className="text-primary font-normal">
                      {t.program}
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about EdGrowth and Online MBAs
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 60}
              direction="up">
              <div className="border border-border rounded-xl overflow-hidden bg-card">
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-content-${idx}`}>
                  <span className="font-semibold text-foreground text-sm pr-4">
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      openIndex === idx && "rotate-180",
                    )}
                  />
                </button>
                <div
                  id={`faq-content-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === idx
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0",
                  )}>
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <FadeIn>
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your MBA Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join 1000+ students who found their perfect online MBA through
            EdGrowth. Free counselling. Zero spam. 100% privacy guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#lead-form"
              className="inline-flex h-12 items-center justify-center rounded-md bg-background text-primary px-8 text-sm font-bold shadow transition-all hover:bg-accent">
              Get Free Counselling
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+918527511409"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 text-primary-foreground px-8 text-sm font-bold hover:bg-primary-foreground/10 transition-all">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Sticky Mobile CTA ──────────────────────────────────────────────────────

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border p-3 shadow-2xl">
      <div className="flex gap-2">
        <a
          href="#lead-form"
          className="flex-1 inline-flex h-11 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold shadow shimmer">
          <GraduationCap className="mr-2 h-4 w-4" />
          Free MBA Counselling
        </a>
        <a
          href="tel:+918527511409"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary">
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
