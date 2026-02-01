import Link from "next/link";
import { ArrowRight, Cloud, Factory, Wind, BarChart3, Building2, Plane } from "lucide-react";

export default function SectorsPage() {
  const sectors = [
    {
      id: "urban",
      title: "Urban Air Quality Monitoring",
      description: "With rapid urbanization, cities face increasing pollution from traffic, construction, and industries. EnviroLko's smart city solutions provide real-time hyper-local data to help authorities plan infrastructure and policies for healthier cities.",
      icon: <Building2 className="h-12 w-12 text-blue-500" />,
      features: ["Smart City Integration", "Traffic Management", "Public Health Safety"]
    },
    {
      id: "industrial",
      title: "Industrial Air Quality Monitoring",
      description: " industries contribute significantly to air pollution. Real-time monitoring of dust, toxic gases, and odours helps industries ensure compliance, worker safety, and operational efficiency while minimizing environmental impact.",
      icon: <Factory className="h-12 w-12 text-orange-500" />,
      features: ["EHS Compliance", "Fenceline Monitoring", "Process Control"]
    },
    {
      id: "odour",
      title: "Odour Monitoring",
      description: "Odour nuisance from landfills, wastewater treatment plants, and factories is a major concern. EnviroLko's e-nose technology detects and quantifies odour levels, enabling effective mitigation and complaint management.",
      icon: <Wind className="h-12 w-12 text-green-500" />,
      features: ["Odour Dispersion Modeling", "Source Tracking", "Automated Neutralizers"]
    },
    {
      id: "research",
      title: "Air Quality Research",
      description: "Accurate data is the foundation of environmental research. EnviroLko supports universities and research institutes with high-precision monitors to study pollution trends, sources, and health impacts.",
      icon: <BarChart3 className="h-12 w-12 text-purple-500" />,
      features: ["High Data Accuracy", "Historical Analysis", "Source Apportionment"]
    },
    {
      id: "airports",
      title: "Airports & Transport",
      description: "Airports and transport hubs are pollution hotspots. Monitoring emissions from aircraft and vehicles helps in managing carbon footprints and ensuring a safe environment for travelers and staff.",
      icon: <Plane className="h-12 w-12 text-sky-500" />,
      features: ["Emission Tracking", "Passenger Safety", "Environmental Reporting"]
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries & Sectors</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tailored air quality monitoring solutions for diverse environments and applications.
          </p>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {sectors.map((sector, index) => (
            <div key={sector.id} id={sector.id} className="group rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm hover-scale hover:border-blue-200">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-4 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {sector.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{sector.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {sector.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {/* Since we don't have deep pages for all, link to Contact for now or a generic details section if I built one */}
                  <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                    Learn more about solutions for {sector.title} <ArrowRight className="ml-2 h-4 w-4" />
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