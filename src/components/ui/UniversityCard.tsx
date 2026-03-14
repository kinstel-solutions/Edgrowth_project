"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UniversityCardProps {
  name: string;
  description: string;
  image: string;
  href?: string;
}

export function UniversityCard({ name, description, image, href = "/contact" }: UniversityCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      {/* <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-xs font-medium">Online Programs available</p>
        </div>
      </div> */}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-extrabold font-sans text-foreground mb-2 group-hover:text-primary transition-colors"><i>{name}</i>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            Enquire about {name.split(' ')[0]} courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
