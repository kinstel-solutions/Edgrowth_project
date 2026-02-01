import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Users,
  Globe,
  BookOpen,
  DollarSign,
  Award,
  Phone,
  Languages,
} from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="/education_hero.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 dark:bg-background/95 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-xl mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Admissions Open for 2026 Batch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Empowering Your <span className="text-primary">Career Journey</span> <br className="hidden md:block" />
            
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            We are an EdTech firm specializing in counselling services for online graduate and post-graduate courses. 
            Achieve your dream qualification with our expert guidance, financing support, and placement assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Book Counselling
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-border py-12 bg-card rounded-xl shadow-sm">
          <div>
            <div className="text-3xl font-bold text-primary">3000+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Users size={14} /> Students Counselled
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Globe size={14} /> University Partners
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Award size={14} /> Placement Assistance
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">₹10Cr+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <DollarSign size={14} /> Financing Facilitated
            </div>
          </div>
        </div>
      </section>

      {/* Courses Showcase */}
      <section id="courses" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Our Courses
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your skills with our top-tier online degree programs.
              </p>
            </div>
            <Link
              href="/courses"
              className="hidden md:flex text-primary font-medium hover:underline items-center"
            >
              View All Courses <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CourseCard
              tag="Popular"
              name="Online MBA"
              description="Master of Business Administration. Specialize in Marketing, HR, Finance, and more."
              image="/mba_course.png"
              features={["2 Years", "Online", "Placement"]}
            />
            <CourseCard
              tag="Bachelor"
              name="Online BBA"
              description="Bachelor of Business Administration. Build a strong foundation in business management."
              image="/education_hero.png" // Placeholder
              features={["3 Years", "Online", "Fundamental"]}
            />
            <CourseCard
              tag="Master"
              name="Online M.Com"
              description="Master of Commerce. Advanced studies in accounting, economics, and business strategies."
              image="/counselling.png" // Placeholder
              features={["2 Years", "Online", "Accounting"]}
            />
            <CourseCard
              tag="Bachelor"
              name="Online B.Com"
              description="Bachelor of Commerce. Understand the core principles of commerce and trade."
              image="/education_hero.png" // Placeholder
              features={["3 Years", "Online", "Commerce"]}
            />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/courses"
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              View All Courses <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From counselling to placement, we support you at every step of your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Professional Counselling"
            description="Guidance for finding the right course and university."
            colorClass="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          />
          <ServiceCard
            icon={<Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />}
            title="Training & Placement"
            description="Interview prep and job placement in BFSI sector."
            colorClass="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          />
          <ServiceCard
            icon={<DollarSign className="h-8 w-8 text-amber-600 dark:text-amber-400" />}
            title="Financing Services"
            description="Easy financing options through our Fintech partners."
            colorClass="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
          />
           <ServiceCard
            icon={<GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
            title="Skill Development"
            description="Professional training to improve your skillset."
            colorClass="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
          />
          <ServiceCard
            icon={<Languages className="h-8 w-8 text-pink-600 dark:text-pink-400" />}
            title="Multi-lingual Support"
            description="Counselling available in multiple regional and international languages."
            colorClass="bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="container mx-auto px-4 text-center py-16 bg-primary rounded-3xl text-primary-foreground mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Contact us today to get expert counselling and take the first step towards your dream qualification.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-accent"
          >
            Get Counselling
            <Phone className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
