import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EnviroLko</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are an environmental IoT company with a mission to make air quality monitoring accurate, affordable, and accessible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Pioneering Environmental Intelligence</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                        Founded in 2015, EnviroLko has quickly grown to become a global leader in environmental monitoring solutions. We specialize in manufacturing accurate air quality monitoring systems and advanced data analytics software.
                    </p>
                    <p>
                        Our technology is currently monitoring the environmental health of more than 250 million people across 80+ countries. We have successfully deployed over 3,500 installations for smart cities, industrial zones, airports, and research institutes.
                    </p>
                    <p>
                        At EnviroLko, we believe that data is the key to solving the global air pollution crisis. By providing real-time, hyper-local data, we empower communities and authorities to take timely, data-driven actions.
                    </p>
                </div>
            </div>
            <div className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                 <img src="https://oizom.com/wp-content/uploads/2022/09/Oizom_Robust_Air_Quality_Monitor.webp" alt="EnviroLko Device" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Values/Stats */}
        <div className="bg-blue-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Why the world trusts EnviroLko</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm text-center hover-scale">
                    <div className="text-blue-600 mb-4 flex justify-center">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Patent-Pending Technology</h3>
                    <p className="text-slate-600 text-sm">
                        Our "e-breathing" technology ensures sensor longevity and high data accuracy even in extreme weather conditions.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center hover-scale">
                    <div className="text-blue-600 mb-4 flex justify-center">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                    <p className="text-slate-600 text-sm">
                        From a single device to a city-wide network of 500+ monitors, our infrastructure scales effortlessly.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center hover-scale">
                    <div className="text-blue-600 mb-4 flex justify-center">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Data Security</h3>
                    <p className="text-slate-600 text-sm">
                        We prioritize data integrity with end-to-end encryption and secure cloud storage protocols.
                    </p>
                </div>
            </div>
        </div>

        {/* Global Presence Map (Abstract) */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Global Footprint</h2>
            <div className="bg-slate-900 rounded-2xl p-8 h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://oizom.com/wp-content/uploads/2022/08/Oizom_Ambient_Air_Quality_Monitoring_Equipments.webp')] bg-cover bg-center"></div>
                <div className="relative z-10">
                    <p className="text-4xl md:text-6xl font-bold text-white mb-2">80+</p>
                    <p className="text-blue-300 uppercase tracking-widest font-semibold">Countries</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}