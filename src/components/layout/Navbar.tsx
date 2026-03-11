"use strict";
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const courses = [
  {
    title: "MBA",
    href: "/courses#mba",
    description: "Master of Business Administration - Advance your career with top-tier management skills.",
  },
  {
    title: "BBA",
    href: "/courses#bba",
    description: "Bachelor of Business Administration - Foundation for future business leaders.",
  },
  {
    title: "MCOM",
    href: "/courses#mcom",
    description: "Master of Commerce - Specialized knowledge in accounting and finance.",
  },
  {
    title: "BCOM",
    href: "/courses#bcom",
    description: "Bachelor of Commerce - Comprehensive understanding of commerce and trade.",
  },
];


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-primary flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <span className="text-primary font-extrabold text-3xl">
              EDGROWTH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover rounded-md shadow-lg border">
                    {courses.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#services"
                    className={navigationMenuTriggerStyle()}
                    onClick={(e) => {
                      const el = document.getElementById("services");
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", "/#services");
                      }
                    }}>
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={navigationMenuTriggerStyle()}>
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-background border-t h-screen overflow-y-auto pb-20">
          <nav className="flex flex-col gap-6">
            <div>
              <span className="font-semibold text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                Courses
              </span>
              <div className="flex flex-col gap-2 pl-4">
                {courses.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="text-foreground py-1"
                    onClick={() => setIsOpen(false)}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#services"
              className="font-semibold text-foreground"
              onClick={(e) => {
                setIsOpen(false);
                const el = document.getElementById("services");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/#services");
                }
              }}>
              Services
            </Link>

            <Link
              href="/about"
              className="font-semibold text-foreground"
              onClick={() => setIsOpen(false)}>
              About Us
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-foreground"
              onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <div className="h-px bg-border my-2"></div>
            <Link
              href="/contact"
              className="text-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setIsOpen(false)}>
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
