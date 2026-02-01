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

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Polludrone",
    href: "/products#polludrone",
    description:
      "Ambient Air Quality Monitoring System for smart cities and airports.",
  },
  {
    title: "Pollusense",
    href: "/products#pollusense",
    description: "Portable Air Quality Monitoring System for mobile surveys.",
  },
  {
    title: "Odosense",
    href: "/products#odosense",
    description: "Odour Monitoring System for landfills and treatment plants.",
  },
  {
    title: "Dustroid",
    href: "/products#dustroid",
    description:
      "Real-time Dust Monitoring System for construction and mining.",
  },
  {
    title: "AQBot",
    href: "/products#aqbot",
    description:
      "Industrial Air Quality Monitor for automation and compliance.",
  },
  {
    title: "Weathercom",
    href: "/products#weathercom",
    description: "Automatic Weather Station for meteorological parameters.",
  },
];

const sectors: { title: string; href: string; description: string }[] = [
  {
    title: "Urban Air Quality",
    href: "/sectors/urban",
    description: "Monitoring solutions for smart cities and campuses.",
  },
  {
    title: "Odour Monitoring",
    href: "/sectors/odour",
    description: "Solutions for managing odour complaints and compliance.",
  },
  {
    title: "Industrial",
    href: "/sectors/industrial",
    description: "EHS compliance and process optimization for industries.",
  },
  {
    title: "Research",
    href: "/sectors/research",
    description: "High-accuracy data for environmental research projects.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-2">
          {/* EnviroLko Logo Placeholder - In a real app, use the SVG or Image component */}
          <div className="flex items-center justify-center">
            <span className="text-blue-600 font-extrabold text-3xl">
              ENVIROLKO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-md shadow-lg border">
                    {products.map((component) => (
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
                <NavigationMenuTrigger>Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-md shadow-lg border">
                    {sectors.map((component) => (
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
                    href="/case-studies"
                    className={navigationMenuTriggerStyle()}>
                    Case Studies
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources"
                    className={navigationMenuTriggerStyle()}>
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex gap-4">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#155dfc" /> : <Menu color="#155dfc" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-white border-t h-screen overflow-y-auto pb-20">
          <nav className="flex flex-col gap-6">
            <div>
              <span className="font-semibold text-sm text-slate-500 uppercase tracking-wider block mb-2">
                Products
              </span>
              <div className="flex flex-col gap-2 pl-4">
                {products.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="text-slate-900 py-1"
                    onClick={() => setIsOpen(false)}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold text-sm text-slate-500 uppercase tracking-wider block mb-2">
                Sectors
              </span>
              <div className="flex flex-col gap-2 pl-4">
                {sectors.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="text-slate-900 py-1"
                    onClick={() => setIsOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/case-studies"
              className="font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}>
              Case Studies
            </Link>
            <Link
              href="/resources"
              className="font-semibold text-slate-900"
              onClick={() => setIsOpen(false)}>
              Resources
            </Link>

            <div className="h-px bg-slate-200 my-2"></div>
            <Link
              href="/contact"
              className="text-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white"
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
