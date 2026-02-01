import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
        title: "DFPCL Monitors NH3 and Noise Levels at Taloja Plant",
        client: "Deepak Fertilisers and Petrochemicals Corporation Ltd.",
        location: "Taloja, Maharashtra",
        date: "January 2025",
        sector: "Industrial EHS",
        solution: "AQBot NH3 & Noise",
        image: "https://oizom.com/wp-content/uploads/2025/07/DFPCL-Monitors-NH₃-and-Noise-Levels-at-Taloja-Plant-with-Oizoms-AQBot-1024x1024.webp",
        slug: "dfpcl-monitors-nh3"
    },
    {
        title: "Real-time Dust Monitoring at Raj Transit Infra Projects",
        client: "Raj Transit Infra Projects",
        location: "Mira Bhayandar, Maharashtra",
        date: "January 2025",
        sector: "Construction",
        solution: "AQBot PM",
        image: "https://oizom.com/wp-content/uploads/2025/09/Real-time-Dust-Monitoring-at-Raj-Transit-Infra-Projects-1024x1024.webp",
        slug: "raj-transit-dust-monitoring"
    },
    {
        title: "EnviroLko's Polludrone Installed at Stonecraft Hyderabad Campus",
        client: "Stonecraft",
        location: "Hyderabad, India",
        date: "December 2024",
        sector: "Smart Campus",
        solution: "Polludrone",
        image: "https://oizom.com/wp-content/uploads/2020/11/Polludrone_Ambient_Air_Quality_Monitoring_System_Thumbnail.webp", // Placeholder based on content
        slug: "stonecraft-hyderabad"
    },
    {
      title: "Real-Time Odour Monitoring at Malad Waste Water Treatment",
      client: "Malad WWTP",
      location: "Mumbai, India",
      date: "November 2024",
      sector: "Wastewater Treatment",
      solution: "Odosense",
      image: "https://oizom.com/wp-content/uploads/2021/01/Odosense_Odour_Monitoring_System_Mobile_Banner.webp", // Placeholder
      slug: "malad-wwtp-odour"
    },
    {
        title: "Brigade Group Chooses EnviroLko for Cleaner Living Spaces",
        client: "Brigade Group",
        location: "Bangalore, India",
        date: "October 2024",
        sector: "Smart City",
        solution: "Polludrone",
        image: "https://oizom.com/wp-content/uploads/2022/08/Oizom_Ambient_Air_Quality_Monitoring_Equipments.webp", // Placeholder
        slug: "brigade-group"
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover how industries and smart cities worldwide are using EnviroLko to monitor and improve air quality.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
                <div key={index} className="flex flex-col border border-slate-200 rounded-xl overflow-hidden hover-scale bg-white">
                    <div className="h-48 overflow-hidden relative">
                        <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-slate-800 uppercase tracking-wide">
                            {study.sector}
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                            {study.title}
                        </h3>
                        
                        <div className="flex flex-col gap-2 mb-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-blue-500"/>
                                <span>{study.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-blue-500"/>
                                <span>{study.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag size={16} className="text-blue-500"/>
                                <span>Solution: {study.solution}</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <Link href={`/case-studies/${study.slug}`} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                                Read Full Story <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}