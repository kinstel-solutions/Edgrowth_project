import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  CloudRain,
  Factory,
  ShieldCheck,
  Wind,
  Globe,
  Users,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-100">
          <img
            src="https://oizom.com/wp-content/uploads/2022/08/Oizom_Ambient_Air_Quality_Monitoring_Equipments.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  opacity-70 bg-slate-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/20 px-3 py-1 text-sm text-blue-300 backdrop-blur-xl mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            New: Pollusense Portable Monitor
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-tr from-white to-white">
            Accurate & Affordable <br className="hidden md:block" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-green-300">
              Environmental Monitoring Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            EnviroLko offers end-to-end and scalable solutions for real-time air
            quality monitoring and advanced data analytics. Trusted by 30+ Smart
            Cities globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-slate-200 py-12">
          <div>
            <div className="text-3xl font-bold border-slate-200">80+</div>
            <div className="text-sm text-slate-500 flex items-center justify-center gap-1">
              <Globe size={14} /> Countries
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold border-slate-200">3500+</div>
            <div className="text-sm text-slate-500">Installations</div>
          </div>
          <div>
            <div className="text-3xl font-bold border-slate-200">250M+</div>
            <div className="text-sm text-slate-500 flex items-center justify-center gap-1">
              <Users size={14} /> People Monitored
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold border-slate-200">30+</div>
            <div className="text-sm text-slate-500 flex items-center justify-center gap-1">
              <Activity size={14} /> Parameters
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section
        id="products"
        className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Our Product Range
              </h2>
              <p className="text-lg text-slate-600">
                Smart, accurate, and robust environmental monitoring systems for
                every application.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:flex text-blue-600 font-medium hover:text-blue-700 items-center">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              tag="Ambient Air"
              name="Polludrone"
              description="Integrated air monitoring system for real-time outdoor air quality monitoring for Urban and Industrial applications."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Polludrone_Ambient_Air_Quality_Monitoring_System-qtlv11q7ikvjus00869zq6hxxayefn1ml1bpaqe9oo.webp"
              features={["Smart Cities", "Campuses", "Airports"]}
            />
            <ProductCard
              tag="Portable"
              name="Pollusense"
              description="Real-time portable air quality monitoring system designed for versatile use across industries and mobile surveys."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Pollusense-website-image2-qvxjxh9x4ci8s5d04is8jk4dlbkrfrbke4p27x3o94.jpg"
              features={["Hot-spot Monitoring", "Indoor Surveys", "EHS"]}
            />
            <ProductCard
              tag="Odour"
              name="Odosense"
              description="Monitors various odourful and toxic gases in the environment to provide insights for odour dispersion and modelling."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Odosense-Odour-Monitoring-Equipment-qtlv0zuj4wsz7k2qj5gql6z0qj7o08u5ws0qc6h214.webp"
              features={["Landfills", "WWTP", "Paper Mills"]}
            />
            <ProductCard
              tag="Dust"
              name="Dustroid"
              description="Particulate monitoring system to measure a wide spectrum of particulate matter sizes for dust laden activities."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Oizom_Dustroid_Ambient_Dust_Monitor-qtlv13lvw8y4hzx9x738v60v42p4v1939amo9abhc8.webp"
              features={["Construction", "Mining", "Quarries"]}
            />
            <ProductCard
              tag="Industrial"
              name="AQBot"
              description="Industrial air quality monitor designed to serve multiple applications with a wide range of gas parameters."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Indoor-use-case-AQBot-scaled-2-qtlv0ywoy2rovy43on240p7k55casjqfknd8uwig7c.webp"
              features={["Process Control", "Leak Detection", "Safety"]}
            />
            <ProductCard
              tag="Software"
              name="Envizom"
              description="Cloud-based air quality monitoring software to visualize, analyze, and act on air quality data from anywhere."
              image="https://oizom.com/wp-content/uploads/elementor/thumbs/Envizom_Air-Quality-Software_Banner-2-qtlv13lvw8y4hzx9x738v60v42p4v1939amo9abhc8.jpg"
              features={["Analytics", "Reports", "Alerts"]}
            />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions / Sectors */}
      <section
        id="sectors"
        className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Solutions by Sector
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tailored environmental monitoring solutions for diverse
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectorCard
            icon={<Cloud className="h-8 w-8 text-white" />}
            title="Urban Air Quality"
            description="Smart cities, campuses, and airports."
            color="bg-blue-500"
          />
          <SectorCard
            icon={<Wind className="h-8 w-8 text-white" />}
            title="Odour Monitoring"
            description="WWTP, landfills, and industries."
            color="bg-green-500"
          />
          <SectorCard
            icon={<Factory className="h-8 w-8 text-white" />}
            title="Industrial"
            description="EHS, process control, and compliance."
            color="bg-orange-500"
          />
          <SectorCard
            icon={<BarChart3 className="h-8 w-8 text-white" />}
            title="Research"
            description="Environmental impact assessments and studies."
            color="bg-purple-500"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-100 h-[400px] shadow-sm hover:shadow-xl transition-all">
              <img
                src="https://oizom.com/wp-content/uploads/2025/07/DFPCL-Monitors-NH₃-and-Noise-Levels-at-Taloja-Plant-with-Oizoms-AQBot-1024x1024.webp"
                alt="DFPCL Case Study"
                className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <div className="mb-2 text-sm font-semibold text-blue-400">
                  Industrial EHS
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  DFPCL Monitors NH3 and Noise at Taloja Plant
                </h3>
                <p className="text-slate-300 line-clamp-2">
                  Deepak Fertilisers uses AQBot to ensure safety and compliance
                  in their chemical plant.
                </p>
                <Link
                  href="/case-studies/dfpcl"
                  className="mt-4 inline-flex items-center text-white hover:underline">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-slate-100 h-[400px] shadow-sm hover:shadow-xl transition-all">
              <img
                src="https://oizom.com/wp-content/uploads/2025/09/Real-time-Dust-Monitoring-at-Raj-Transit-Infra-Projects-1024x1024.webp"
                alt="Raj Transit Infra Case Study"
                className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <div className="mb-2 text-sm font-semibold text-orange-400">
                  Construction
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Real-time Dust Monitoring at Raj Transit Infra
                </h3>
                <p className="text-slate-300 line-clamp-2">
                  Ensuring regulatory compliance and avoiding penalties with
                  AQBot PM monitoring.
                </p>
                <Link
                  href="/case-studies/raj-transit"
                  className="mt-4 inline-flex items-center text-white hover:underline">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="container mx-auto px-4 text-center py-12 bg-blue-600 rounded-3xl text-white mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Partner with us for a sustainable future
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join our global network of partners and distributors to bring accurate
          air quality data to your region.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-slate-100">
            Get in Touch
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
            Learn About EnviroLko
          </Link>
        </div>
      </section>
    </div>
  );
}

// Components
function ProductCard({
  name,
  description,
  features,
  tag,
  image,
}: {
  name: string;
  description: string;
  features: string[];
  tag?: string;
  image: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover-scale">
      <div className="h-56 bg-slate-100 flex items-center justify-center relative overflow-hidden">
        {tag && (
          <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-sm text-slate-500 mb-4 flex-1 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 border border-slate-200">
              {f}
            </span>
          ))}
        </div>
        <Link
          href={`/products#${name.toLowerCase()}`}
          className="w-full inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950">
          View Specs
        </Link>
      </div>
    </div>
  );
}

function SectorCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <Link
      href={`/sectors/${title.split(" ")[0].toLowerCase()}`}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover-scale hover:border-blue-200 flex flex-col items-center text-center">
      <div
        className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{description}</p>
    </Link>
  );
}
