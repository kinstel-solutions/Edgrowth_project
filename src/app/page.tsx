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
  CheckCircle2
} from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-xl mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Best Online Education Programs 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Empowering Education <br className="hidden lg:block" />
                <span className="text-primary block mt-2">Building Careers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                We are an established EdTech firm with a focus on quality learning. Offers industry relevant undergraduate and postgraduate programs. Partnered with more than 10 top universities across pan India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden md:block">
              <Image
                src="/education_hero.png"
                alt="Students studying"
                fill
                className="w-full h-full  object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4">
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-border py-12 bg-card rounded-xl shadow-sm">
          <FadeIn delay={100} direction="up">
            <div className="text-3xl font-bold text-primary">3000+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Users size={14} /> Students Counselled
            </div>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Globe size={14} /> Top Online Courses
            </div>
          </FadeIn>
          <FadeIn delay={300} direction="up">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Award size={14} /> Placement Assistance
            </div>
          </FadeIn>
          <FadeIn delay={400} direction="up">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <GraduationCap size={14} /> Happy Students
            </div>
          </FadeIn>
        </FadeIn>
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
            <FadeIn delay={100} direction="up">
              <CourseCard
                tag="Popular"
                name="Online MBA"
                description="Master of Business Administration. Specialize in Marketing, HR, Finance, and more."
                image="/mba_course.png"
                features={["Postgraduate", "Online", "Placement"]}
              />
            </FadeIn>
            <FadeIn delay={200} direction="up">
              <CourseCard
                tag="Master"
                name="Online MCA"
                description="Master of Computer Applications. Develop advanced skills in IT and software."
                image="/education_hero.png" // Placeholder
                features={["Postgraduate", "Online", "Technical"]}
              />
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <CourseCard
                tag="Master"
                name="Online M.Com"
                description="Master of Commerce. Advanced studies in accounting, economics, and business strategies."
                image="/counselling.png" // Placeholder
                features={["Postgraduate", "Online", "Accounting"]}
              />
            </FadeIn>
            <FadeIn delay={400} direction="up">
              <CourseCard
                tag="Bachelor"
                name="Online BBA / BCA"
                description="Undergraduate programs building strong foundations in business or tech."
                image="/education_hero.png" // Placeholder
                features={["Undergraduate", "Online", "Fundamental"]}
              />
            </FadeIn>
            <FadeIn delay={500} direction="up">
              <CourseCard
                tag="Certification"
                name="Online Certification"
                description="Enhance your skills with Coursera certifications."
                image="/counselling.png" // Placeholder
                features={["Certification", "Online", "Skill Dev"]}
              />
            </FadeIn>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={100} direction="up">
            <ServiceCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Career Counselling"
              description="Consult with our experienced academic counsellors who provide end-to-end admissions solutions and doubt sessions."
              colorClass="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            />
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <ServiceCard
               icon={<DollarSign className="h-8 w-8 text-amber-600 dark:text-amber-400" />}
               title="Financing Solutions"
               description="Help students in getting hassle-free loan options to fund their education."
               colorClass="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
             />
           </FadeIn>
           <FadeIn delay={300} direction="up">
             <ServiceCard
              icon={<GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
              title="Skill Development"
              description="Assist professionals upskill with industry demanded know-how."
              colorClass="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
            />
          </FadeIn>
        </div>
      </section>
      
{/* Admission & Support */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl mx-4 mb-16 px-8 md:px-16 text-center">
         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Admission & Support</h2>
         <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
             <FadeIn delay={100} direction="up" className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl font-semibold mb-3">Seamless Process</h3>
                 <p className="text-slate-300">Simple admission process supported by dedicated student counseling throughout your program journey.</p>
             </FadeIn>
             <FadeIn delay={200} direction="up" className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl font-semibold mb-3">Financial Aid</h3>
                 <p className="text-slate-300">Scholarship and flexible payment options available to ensure education is accessible to everyone.</p>
             </FadeIn>
             <FadeIn delay={300} direction="up" className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl font-semibold mb-3">Alumni & Placements</h3>
                 <p className="text-slate-300">Access to a robust alumni network. Post-completion, gain access to recruitment drives and launchpad events for placements into top global MNCs.</p>
             </FadeIn>
         </div>
      </section>
      
      {/* Right Guidance From Experts */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Right Guidance From Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EdGrowth has a team of experts giving you the right guidance for your successful career ahead.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <FadeIn direction="right">
                  <ul className="space-y-4">
                      <li className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                          <span className="text-muted-foreground">Industry recognized degree from dual accredited global universities.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                          <span className="text-muted-foreground">Extensive diversity of subjects such as AI, data science, big data etc. designed by top business schools.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                          <span className="text-muted-foreground">Learn via pre-recorded videos from globally renowned faculty ensuring best-in-class knowledge.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                          <span className="text-muted-foreground">Networking opportunities with peers from varied industries.</span>
                      </li>
                  </ul>
              </FadeIn>
              <FadeIn direction="left" className="h-[300px] md:h-[400px]">
                <div className="h-full bg-slate-200 rounded-xl overflow-hidden shadow">
                   <img src="/counselling.png" alt="Expert Counseling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </FadeIn>
          </div>
        </div>
      </section>

      {/* Why To Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Why To Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-foreground">
            <FadeIn delay={100}>
              <div className="flex flex-col items-center">
                   <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Users size={32}/></div>
                   <h3 className="font-semibold px-2">Experienced & Qualified Academic Counsellors</h3>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col items-center">
                   <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Briefcase size={32}/></div>
                   <h3 className="font-semibold px-2">Long Experience in Career Building & Placement</h3>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col items-center">
                   <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><BookOpen size={32}/></div>
                   <h3 className="font-semibold px-2">Modern Learning Resources</h3>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col items-center">
                   <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Globe size={32}/></div>
                   <h3 className="font-semibold px-2">Great Universities Alumni Network</h3>
              </div>
            </FadeIn>
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
