import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EdGrowth Consultants LLP",
  description: "Learn about EdGrowth Consultants, a premier EdTech firm in Lucknow. Our mission is to bridge the gap between quality education and industry needs through expert counselling.",
};

export default function AboutPage() {
  return (
    <div className="bg-background pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EdGrowth Consultants LLP</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Established Edtech firm with a focus on quality learning, committed to academic excellence and career readiness.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn direction="right">
                <h2 className="text-3xl font-bold text-foreground mb-6">About the Company</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Established Edtech firm with a focus on quality learning.</li>
                        <li>Offers industry relevant undergraduate and postgraduate programs.</li>
                        <li>Student-centric approach with an experienced team of academic counselors.</li>
                        <li>Commitment to academic excellence and career readiness.</li>
                        <li>Thousands of students guided toward successful careers.</li>
                        <li>Partnered with more than 10 top universities across pan India.</li>
                    </ul>
                </div>
                <ButtonCTA
                  href="/contact"
                  className="mt-8"
                  showIcon
                >
                  Get In Touch
                </ButtonCTA>
            </FadeIn>
            <FadeIn direction="left" className="h-full">
              <div className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                   <img src="/counselling.png" alt="EdGrowth Students" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
            </FadeIn>
        </div>

        {/* Vision and Mission */}
        <div className="mb-20 flex justify-center">
            <div className="mx-0 flex justify-center flex-col gap-16 overflow-hidden w-full">
                {/* Vision Section */}
                <FadeIn direction="left" delay={100} className="w-full flex justify-start">
                  <div className="text-left border-l-4 border-blue-600 pl-6 py-2 md:w-3/4">
                      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Our Vision</h2>
                      <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                          To be a leading institution delivering accessible and high-quality education.
                      </p>
                  </div>
                </FadeIn>

                {/* Mission Section */}
                <FadeIn direction="right" delay={200} className="w-full flex flex-col items-end  md:pl-24">
                  <div className="text-right border-r-4 border-blue-600 pr-6 py-2 md:w-full ">
                      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight">Our Mission</h2>
                      <ul className="space-y-4 text-lg text-muted-foreground">
                          <li className="leading-relaxed">To nurture skilled, knowledge, and ethical professionals.</li>
                          <li className="leading-relaxed">To bridge the gap between education and industry needs.</li>
                          <li className="leading-relaxed">Provide expert guidance to career aspirants seeking career counselling.</li>
                          <li className="leading-relaxed">Strong academic and student support.</li>
                      </ul>
                  </div>
                  <ButtonCTA
                  href="/contact"
                  className="mt-8 border-primary text-secondary-foreground hover:bg-primary/80"
                  variant="outline"
                  showIcon
                >
                 Take the First Step To Success
                </ButtonCTA>
                </FadeIn>
            </div>
        </div>

        <FadeIn direction="up">
            
          <div className="text-center">
            
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Reach</h2>
              <div className="bg-slate-900 rounded-2xl p-8 h-[300px] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-20 bg-[url('/education_hero.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="relative z-10">
                      <p className="text-4xl md:text-6xl font-bold text-white mb-2">10+</p>
                      <p className="text-blue-300 uppercase tracking-widest font-semibold">Top Universities Partners</p>
                  </div>
              </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}