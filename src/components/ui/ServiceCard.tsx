import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  colorClass = "bg-primary/10 text-primary",
}: ServiceCardProps) {
  return (
    <Link
      href={`/contact`}
      className="group rounded-xl border border-border bg-card text-card-foreground p-6 shadow-md shadow-primary/30 hover-scale hover:border-primary/50  flex flex-col items-center text-center transition-colors h-full"
    >
      <div
        className={cn(
          "mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full shadow-md group-hover:scale-110 transition-transform duration-300",
          colorClass
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Link>
  );
}
