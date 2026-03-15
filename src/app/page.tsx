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
import { ExpandableServiceCard } from "@/components/ui/ExpandableServiceCard";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { InDemandSkills } from "@/components/InDemandSkills";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { UniversityCarousel } from "@/components/ui/UniversityCarousel";
import { UniversityCard } from "@/components/ui/UniversityCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-4 pb-0 md:py-12 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              {/* <div className="inline-flex items-center ml-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-xl mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Best Online Education Programs 2026
              </div> */}
               <div className="mb-8 sm:mb-10">
                <FadeIn delay={300} direction="left">
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  High-Paying Careers
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Financial Advisory",
                    "Investment Banking",
                    "Corporate Finance",
                   
                    "Artificial Intelligence",
                    
                    "Business Analytics",
                    "Full Stack Development"
                  ].map((skill) => (
                    <Link 
                      key={skill} 
                      href="/contact"
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground shimmer"
                    >
                      {skill}
                    </Link>
                  ))}
                </div>
                </FadeIn>
              </div>
        <FadeIn delay={60} direction="left">
              <h1 className="text-4xl font-extrabold md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Need help finding the <span className="text-primary inline md:block md:mt-2">best online program</span> for your Career?
              </h1>
              </FadeIn>
              <FadeIn delay={150} direction="down">
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                
                Let us help you find the best online program based on your unique requirements and interests.
              </p>
             </FadeIn>
             <FadeIn delay={200} direction="right">
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonCTA href="/contact" showIcon>
                  Get a Free Expert Consultation
                </ButtonCTA>
                <ButtonCTA href="/about" variant="outline">
                  About EdGrowth
                </ButtonCTA>
              </div>
         </FadeIn>
              {/* Accreditation Badges */}
              <FadeIn delay={300} direction="left">
              <div className="mt-10">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium">
                  Recognised & Accredited Programs
                </p>
                <div className="flex flex-wrap items-start gap-4 sm:gap-6">
                  {[
                    { src: "/accredation-images/naac.png", alt: "NAAC", title: "NAAC A+ Accredited" },
                    { src: "/accredation-images/ugc.png", alt: "UGC", title: "UGC Entitled" },
                    { src: "/accredation-images/nirf.jpg", alt: "NIRF", title: "NIRF Ranking 3" },
                    { src: "/accredation-images/iirf-trans.png", alt: "IIRF", title: "Private University in North East" },
                    { src: "/accredation-images/wes.jpg", alt: "WES", title: "WES Recognized" },
                    { src: "/accredation-images/AICTE-Logo.webp", alt: "AICTE", title: "AICTE Recognized" },
                  ].map((badge) => (
                    <div key={badge.alt} className="flex flex-col items-center gap-2 group">
                      <div className="relative h-16 w-24 sm:h-20 sm:w-28 bg-white rounded-lg border border-border/50 p-2 flex items-center justify-center shadow-sm hover:shadow-md shadow-primary/20 hover:border-primary/20 transition-all duration-300">
                        <Image
                          src={badge.src}
                          alt={badge.alt}
                          fill
                          className="object-contain p-1.5 scale-110 hover:scale-120"
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs text-center font-semibold text-muted-foreground/80 max-w-[80px] sm:max-w-[100px] leading-tight group-hover:text-primary transition-colors">
                        {badge.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              </FadeIn>
            </div>
            <FadeIn delay={60} direction="right">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden md:block">
              <Image
                src="/hero-v2.png"
                alt="Professional education and career growth"
                fill
                className="w-full h-full  object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            </FadeIn>
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
            <div className="text-3xl font-bold text-primary">Upto 95%</div>
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
      <section id="courses" className="bg-muted/30 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Top Online Courses 
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your skills with Industry-recognized, UGC & WES approved online degree programs from top-tier universities.
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
                image="/mca_real.png"
                features={["Postgraduate", "Online", "Technical"]}
              />
            </FadeIn>
            
            <FadeIn delay={400} direction="up">
              <CourseCard
                tag="Bachelor"
                name="Online BBA / BCA"
                description="Undergraduate programs building strong foundations in business or tech."
                image="/bba_bca_real.png"
                features={["Undergraduate", "Online", "Fundamental"]}
              />
            </FadeIn>
            <FadeIn delay={500} direction="up">
              <CourseCard
                tag="Certification"
                name="Online Certification"
                description="Enhance your skills with Coursera certifications."
                image="/certification_real.png"
                features={["Certification", "Online", "Skill Dev"]}
              />
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <CourseCard
                tag="Master"
                name="Online M.Com"
                description="Master of Commerce. Advanced studies in accounting, economics, and business strategies."
                image="/mcom_real.png"
                features={["Postgraduate", "Online", "Accounting"]}
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

          {/* <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Free Counselling
              <Phone className="ml-2 h-4 w-4" />
            </Link>
          </div> */}
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
          <FadeIn delay={400} direction="up">
             <ExpandableServiceCard
              icon={<Languages className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />}
              title="Multi-lingual Support"
              description="Get expert guidance and support in your preferred regional language."
              colorClass="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
              details={[
                "English","Hindi", "Bengali", "Marathi", "Telugu", "Tamil", "Gujarati", "Urdu", "Kannada", "Odia", "Malayalam", "Punjabi"
              ]}
            />
          </FadeIn>
          
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center shimmer rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Talk to Our Experts
            <Phone className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      
{/* Admission & Support */}
      <section className="bg-foreground text-white py-16 rounded-3xl mx-4 mb-16 px-8 md:px-16 text-center">
         <h2 className="text-3xl text-primary-foreground font-bold tracking-tight sm:text-4xl mb-8">Admission & Support</h2>
         <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
             <FadeIn delay={100} direction="up" className="bg-primary/10 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl text-primary-foreground font-semibold mb-3">Seamless Process</h3>
                 <p className="text-primary-foreground">Simple admission process supported by dedicated student counseling throughout your program journey.</p>
             </FadeIn>
             <FadeIn delay={200} direction="up" className="bg-primary/10 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl text-primary-foreground font-semibold mb-3">Financial Aid</h3>
                 <p className="text-primary-foreground">Scholarship and flexible payment options available to ensure education is accessible to everyone.</p>
             </FadeIn>
             <FadeIn delay={300} direction="up" className="bg-primary/10 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-xl text-primary-foreground font-semibold mb-3">Alumni & Placements</h3>
                 <p className="text-primary-foreground">Access to a robust alumni network. Post-completion, gain access to recruitment drives and launchpad events for placements into top global MNCs.</p>
             </FadeIn>
         </div>
      </section>
      
      {/* Affiliated Universities */}
      <section id="universities" className="container mx-auto px-4 py-8 overflow-hidden">
        <div className="mb-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Affiliated Universities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnered with India's top-tier institutions to deliver world-class online programs and industry-recognized degrees.
            </p>
          </FadeIn>
        </div>

        <UniversityCarousel 
          universities={[
            {
              name: "Amity University",
              description: "A global hub for industry-focused education, recognized for academic excellence and innovation.",
              image: "/universities/amity.png"
            },
            {
              name: "DY Patil University, Pune",
              description: "Established excellence in Pune, offering quality value-based and cutting-edge education across diverse fields.",
              image: "/universities/sharda.png"
            },
            {
              name: "Jain University",
              description: "A hub for learning in Bangalore, recognized for its focus on entrepreneurship, research, and sports.",
              image: "/universities/sharda.png"
            },
            {
              name: "Lovely Professional University",
              description: "One of India's largest multidisciplinary universities with a sprawling 600-acre residential campus.",
              image: "/universities/lpu.png"
            },
            {
              name: "Manipal University Jaipur",
              description: "A NAAC A+ accredited university known for academic excellence and industry-focused learning in Jaipur.",
              image: "/universities/manipal.png"
            },
            {
              name: "Noida International University",
              description: "An A+ NAAC accredited university in Greater Noida, offering world-class infrastructure and global education.",
              image: "/universities/sharda.png"
            },
            {
              name: "Sharda University",
              description: "A globally recognized institution in Greater Noida, fostering an inclusive and multicultural learning environment.",
              image: "/universities/sharda.png"
            },
            {
              name: "Shoolini University",
              description: "A research-focused university in the Himalayas, ranked among top global institutions for innovation.",
              image: "/universities/shoolini.png"
            },
            {
              name: "Sikkim Manipal University",
              description: "Pioneering quality education and healthcare in NE India, offering interdisciplinary programs.",
              image: "/universities/shoolini.png"
            },
            {
              name: "Uttaranchal University",
              description: "A state-of-the-art institution in Dehradun, dedicated to research, innovation, and student-centric learning.",
              image: "/universities/shoolini.png"
            },
            {
              name: "Vivekanand Global University",
              description: "A premier institution in Rajasthan focusing on holistic education, placements, and industry exposure.",
              image: "/universities/manipal.png"
            },
            {
              name: "Narsee Monjee University",
              description: "A leading multi-disciplinary university with a legacy of excellence in management and professional studies.",
              image: "/universities/nmims.png"
            }
          ]} 
        />
      </section>
      
      {/* Right Guidance From Experts */}
      <section className="bg-muted/30 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
               Expert Guidance
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

          <div className="mt-10 text-center">
            <ButtonCTA href="/contact" showIcon>
              Book Expert Consultation
            </ButtonCTA>
          </div>
        </div>
      </section>

      <InDemandSkills />

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
                   <h3 className="font-semibold px-2">Extensive Expertise in Career Building & Placement</h3>
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
          <ButtonCTA 
            href="/contact" 
            className="bg-background text-primary hover:bg-accent border-none" 
            variant="outline" 
            showIcon 
            iconType="phone"
          >
            Get Counselling
          </ButtonCTA>
          <ButtonCTA 
            href="/about" 
            variant="outline" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Learn More
          </ButtonCTA>
        </div>
      </section>
    </div>
  );
}
