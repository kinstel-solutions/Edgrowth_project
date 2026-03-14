import { ServiceCard } from "@/components/ui/ServiceCard";
import { Users, Briefcase, DollarSign, GraduationCap, Languages } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | EdGrowth Consultants",
  description: "Explore our range of educational services: MBA/BBA counselling, training & placement, and financing options. We empower careers through quality learning.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Professional Counselling",
      description: "Expert guidance for finding the right course and university. We help you choose the best path.",
      icon: <Users className="h-8 w-8 text-primary" />,
      colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Training & Placement",
      description: "Comprehensive training programs to crack interviews and placement assistance in top BFSI companies.",
      icon: <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />,
      colorClass: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Financing Services",
      description: "We offer financing services through our Fintech partners to make your education affordable.",
      icon: <DollarSign className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      colorClass: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      title: "Skill Development",
      description: "Improve your skillset with our professional training modules designed for industry readiness.",
      icon: <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      colorClass: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      title: "Multi-lingual Support",
      description: "Counselling and support available in multiple regional and international languages.",
      icon: <Languages className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
      colorClass: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive services to support your educational and career journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}