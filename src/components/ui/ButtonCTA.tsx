"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import { ArrowRight, Phone, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconType?: "arrow" | "phone";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "navbar" | "full";
  placement?: string;
}

export function ButtonCTA({
  href,
  children,
  className,
  showIcon = false,
  iconType = "arrow",
  variant = "primary",
  size = "md",
  placement = "generic_button",
}: ButtonCTAProps) {
  const pathname = usePathname();
  const Icon = iconType === "phone" ? Phone : ArrowRight;
  const baseStyles = "group inline-flex items-center justify-center rounded-md font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary  text-primary-foreground  hover:bg-primary/90 shadow shimmer",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
    outline: "border border-input bg-background/50 text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm",
    ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-8 text-sm",
    lg: "h-14 px-10 text-base",
    navbar: "h-10 px-8 text-sm",
    full: "w-full py-3 text-sm",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("tel:")) {
      if (pathname?.startsWith("/lp/")) {
        sendGTMEvent({ event: "lp_call_click", placement, method: "tel_link" });
      } else {
        sendGTMEvent({ event: "main_call_click", placement, method: "tel_link" });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {showIcon && <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
