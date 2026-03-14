"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ExpandableServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass?: string;
  details: string[];
}

export function ExpandableServiceCard({
  icon,
  title,
  description,
  colorClass = "bg-primary/10 text-primary",
  details,
}: ExpandableServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="group rounded-xl border border-border bg-card text-card-foreground p-6 shadow-md shadow-primary/30 hover:border-primary/50 flex flex-col items-center text-center transition-all cursor-pointer h-full"
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
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out w-full",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-border">
            {details.map((detail, index) => (
              <span key={index} className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-foreground">
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 text-muted-foreground transition-colors group-hover:text-primary">
        <span className="text-xs font-medium mb-1">
          {isExpanded ? "Hide supported languages" : "Show supported languages"}
        </span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )}
        />
      </div>
    </div>
  );
}
