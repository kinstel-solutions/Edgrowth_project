import Link from "next/link";
import Image from "next/image"; // Optimization
import { cn } from "@/lib/utils";

interface CourseCardProps {
  name: string;
  description: string;
  features: string[];
  tag?: string;
  image: string;
}

export function CourseCard({
  name,
  description,
  features,
  tag,
  image,
}: CourseCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-sm hover-scale">
      <div className="h-56 bg-muted flex items-center justify-center relative overflow-hidden">
        {tag && (
          <span className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
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
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground border border-secondary"
            >
              {f}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
