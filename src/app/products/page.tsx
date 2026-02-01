import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: "polludrone",
      name: "Polludrone",
      tagline: "Ambient Air Quality Monitoring System",
      description: "Polludrone is a fully integrated air quality monitoring system that delivers reference-standard performance. It offers real-time monitoring of various environmental parameters like PM1, PM2.5, PM10, CO, CO2, SO2, NO2, O3, H2S, Noise, Light, UV, Temperature, and Humidity. Ideal for Smart Cities, Airports, and Industrial perimeters.",
      features: ["Solar Compatible", "Retrofit Design", "Data Accuracy > 90%", "Real-time Data Transfer"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Polludrone_Ambient_Air_Quality_Monitoring_System-qtlv11q7ikvjus00869zq6hxxayefn1ml1bpaqe9oo.webp"
    },
    {
      id: "pollusense",
      name: "Pollusense",
      tagline: "Portable Air Quality Monitor",
      description: "Pollusense is a battery-operated, handheld air quality monitor designed for mobile surveys and hot-spot monitoring. It is perfect for EHS managers, researchers, and consultants who need to measure air quality on the go.",
      features: ["8-hour Battery Life", "Internal Data Logging", "Lightweight & Compact", "Plug & Play Sensors"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Pollusense-website-image2-qvxjxh9x4ci8s5d04is8jk4dlbkrfrbke4p27x3o94.jpg"
    },
    {
      id: "odosense",
      name: "Odosense",
      tagline: "Odour Monitoring System",
      description: "Odosense uses e-nose technology to detect and monitor odourful gases like Hydrogen Sulphide (H2S), Ammonia (NH3), Methyl Mercaptan, and TVOCs. It helps in tracking odour nuisance around landfills, wastewater treatment plants, and industrial sites.",
      features: ["Odour Plume Modeling", "Meteorological Integration", "Complaint Management", "Real-time Alerts"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Odosense-Odour-Monitoring-Equipment-qtlv0zuj4wsz7k2qj5gql6z0qj7o08u5ws0qc6h214.webp"
    },
    {
      id: "dustroid",
      name: "Dustroid",
      tagline: "Real-time Dust Monitor",
      description: "Dustroid is a continuous particulate monitoring system that measures PM1, PM2.5, PM10, PM100, and Temperature & Humidity. It is designed for dust-laden activities like construction, mining, and quarrying to ensure compliance and automate dust suppression systems.",
      features: ["Heated Inlet", "Optical Particle Counter", "Robust Enclosure", "Automation Triggers"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Oizom_Dustroid_Ambient_Dust_Monitor-qtlv13lvw8y4hzx9x738v60v42p4v1939amo9abhc8.webp"
    },
    {
      id: "aqbot",
      name: "AQBot",
      tagline: "Industrial Air Quality Monitor",
      description: "AQBot is a single-parameter industrial grade air quality monitor. It provides accurate data for specific gases in industrial process control, leak detection, and EHS monitoring. Available for various gases including Cl2, HF, HCl, HCN, etc.",
      features: ["On-device Display", "Industrial Grade Enclosure", "Built-in Relay", "Wide Range of Sensors"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Indoor-use-case-AQBot-scaled-2-qtlv0ywoy2rovy43on240p7k55casjqfknd8uwig7c.webp"
    },
    {
      id: "weathercom",
      name: "Weathercom",
      tagline: "Automatic Weather Station",
      description: "Weathercom is an automatic weather station (AWS) that measures meteorological parameters such as wind speed, wind direction, rainfall, temperature, humidity, and barometric pressure. Essential for dispersion modeling and environmental analysis.",
      features: ["Ultrasonic Wind Sensor", "Maintenance Free", "High Accuracy", "Compact Design"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Automatic_Weather_Station_Weathercom-qtlv0ywoy2rovy43on240p7k55casjqfknd8uwig7c.webp"
    },
    {
      id: "envizom",
      name: "Envizom",
      tagline: "Air Monitoring Software",
      description: "Envizom is a user-friendly, cloud-based software platform that collects, stores, visualizes, and analyzes data from EnviroLko devices. It offers features like smart alerts, reports, heatmaps, and pollution source apportionment.",
      features: ["Device Management", "Advanced Analytics", "API Integration", "Public Displays"],
      image: "https://oizom.com/wp-content/uploads/elementor/thumbs/Envizom_Air-Quality-Software_Banner-2-qtlv13lvw8y4hzx9x738v60v42p4v1939amo9abhc8.jpg"
    }
  ];

  return (
    <div className="bg-white pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive range of environmental monitoring solutions for every need.
          </p>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center h-[400px] shadow-inner hover-scale">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{product.tagline}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{product.name}</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                        <Check size={12} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
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