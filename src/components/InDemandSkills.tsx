import { FadeIn } from "@/components/ui/FadeIn";
import { 
  Megaphone, 
  BrainCircuit, 
  LineChart, 
  Wallet, 
  Landmark, 
  Coins, 
  Code 
} from "lucide-react";

const skills = [
 
  {
    title: "Artificial Intelligence",
    description: "Build intelligent systems and leverage machine learning algorithms for automation.",
    icon: BrainCircuit,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    title: "Financial Advisory",
    description: "Provide expert guidance on wealth management, investment strategies, and strategic financial planning.",
    icon: Wallet,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Business Analytics",
    description: "Transform data into strategic business decisions and optimize corporate performance.",
    icon: LineChart,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
  },
  {
    title: "Investment Banking",
    description: "Master mergers and acquisitions, capital raising, and complex financial modeling for global markets.",
    icon: Landmark,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
  },
  {
    title: "Corporate Finance",
    description: "Strategize capital structure, budgeting, and investment decisions to drive organizational value.",
    icon: Coins,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
  },
  {
    title: "Full Stack Development",
    description: "Develop robust end-to-end web applications using modern frameworks and databases.",
    icon: Code,
    color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400"
  },
   {
    title: "Digital Marketing",
    description: "Master SEO, social media, and performance marketing to drive business growth.",
    icon: Megaphone,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
  },
];

export function InDemandSkills() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
          High-Paying Jobs
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Future-Proof Your Career with In-Demand Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from one of the most sought-after, High-value & industry-focused skills that align with your Passion and interests. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <FadeIn key={index} delay={index * 100} direction="up" className="bg-card p-6 rounded-2xl border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${skill.color}`}>
              <skill.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {skill.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
