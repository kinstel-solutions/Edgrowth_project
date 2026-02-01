import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data for case studies - in a real app this would come from a CMS or API
const caseStudiesData: Record<string, { title: string; client: string; location: string; date: string; sector: string; solution: string; image: string; content: string[] }> = {
  "dfpcl-monitors-nh3": {
    title: "DFPCL Monitors NH3 and Noise Levels at Taloja Plant",
    client: "Deepak Fertilisers and Petrochemicals Corporation Ltd.",
    location: "Taloja, Maharashtra",
    date: "January 2025",
    sector: "Industrial EHS",
    solution: "AQBot NH3 & Noise",
    image: "https://oizom.com/wp-content/uploads/2025/07/DFPCL-Monitors-NH₃-and-Noise-Levels-at-Taloja-Plant-with-Oizoms-AQBot-1024x1024.webp",
    content: [
      "Deepak Fertilisers and Petrochemicals Corporation Ltd. (DFPCL) is one of India’s leading producers of industrial chemicals and fertilizers. Committed to sustainable manufacturing and employee safety, DFPCL partnered with Technovalue Solutions and EnviroLko to enhance their environmental monitoring capabilities.",
      "In January 2025, they installed four AQBot monitors—two for Ammonia (NH3) and two for Noise—at their Taloja plant. This initiative was aimed at ensuring 24/7 compliance with regulatory standards and improving workplace safety.",
      "The AQBot's real-time data allows the plant managers to track emissions and noise levels continuously. The system provides automated alerts if any parameter breaches the set safety thresholds, enabling immediate corrective actions.",
      "This deployment has streamlined their internal audit processes and provided a transparent view of their environmental impact, reinforcing DFPCL's commitment to responsible manufacturing."
    ]
  },
  "raj-transit-dust-monitoring": {
    title: "Real-time Dust Monitoring at Raj Transit Infra Projects",
    client: "Raj Transit Infra Projects",
    location: "Mira Bhayandar, Maharashtra",
    date: "January 2025",
    sector: "Construction",
    solution: "AQBot PM",
    image: "https://oizom.com/wp-content/uploads/2025/09/Real-time-Dust-Monitoring-at-Raj-Transit-Infra-Projects-1024x1024.webp",
    content: [
      "Raj Transit Infra Projects, a key infrastructure developer, faced challenges with dust emissions at their construction site in Mira Bhayandar. Managing particulate matter (PM) levels is crucial for regulatory compliance and community health in urban construction zones.",
      "To address this, they installed EnviroLko's AQBot PM, a real-time dust monitoring system. This device tracks PM2.5 and PM10 levels continuously, providing accurate data to the project team.",
      "With the AQBot PM, Raj Transit Infra can now monitor dust levels in real-time and take proactive dust suppression measures, such as water sprinting, whenever levels rise. This has helped them avoid potential regulatory penalties and maintain a healthier environment for their workers and the surrounding neighborhood.",
      "The system's ability to generate automated reports has also simplified their compliance documentation process."
    ]
  }
};

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const study = caseStudiesData[slug];

  if (!study) {
    // For prototype purposes, show a generic page if slug doesn't match specific data
    // In production, we might want to return notFound();
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
            <p className="text-slate-600 mb-8">The case study you are looking for is currently being updated.</p>
            <Link href="/case-studies" className="text-blue-600 hover:underline flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4"/> Back to Case Studies
            </Link>
        </div>
    )
  }

  return (
    <article className="bg-white pb-20">
      {/* Hero Image */}
      <div className="h-[400px] w-full relative">
        <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">{study.title}</h1>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Sidebar / Meta */}
            <div className="md:col-span-1 space-y-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-4 border-b pb-2">Project Details</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Client</span>
                            <span className="font-medium text-slate-800">{study.client}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Location</span>
                            <span className="font-medium text-slate-800 flex items-center gap-1"><MapPin size={14}/> {study.location}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Date</span>
                            <span className="font-medium text-slate-800 flex items-center gap-1"><Calendar size={14}/> {study.date}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Sector</span>
                            <span className="font-medium text-slate-800">{study.sector}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Solution</span>
                            <span className="font-medium text-slate-800 flex items-center gap-1"><Tag size={14}/> {study.solution}</span>
                        </li>
                    </ul>
                </div>
                
                <Link href="/case-studies" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4"/> Back to all case studies
                </Link>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
                <div className="prose prose-slate max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                    {study.content.map((paragraph, index) => (
                        <p key={index} className="text-lg text-slate-600 leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>
                
                <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Want similar results?</h3>
                    <p className="text-slate-600 mb-6">Contact our team to discuss how we can help you achieve your environmental monitoring goals.</p>
                    <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </article>
  );
}