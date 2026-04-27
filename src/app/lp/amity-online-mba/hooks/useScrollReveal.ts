"use client";
import { useEffect } from "react";

export function useScrollReveal(dependencies: any[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("reveal-on-scroll-left")) {
              entry.target.classList.add("animate-fade-in-left");
              entry.target.classList.remove("opacity-0", "-translate-x-8");
            } else if (
              entry.target.classList.contains("reveal-on-scroll-right")
            ) {
              entry.target.classList.add("animate-fade-in-right");
              entry.target.classList.remove("opacity-0", "translate-x-8");
            } else if (
              entry.target.classList.contains("reveal-on-scroll-down")
            ) {
              entry.target.classList.add("animate-fade-in-down");
              entry.target.classList.remove("opacity-0", "-translate-y-4");
            } else {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0", "translate-y-4");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(
        ".reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right, .reveal-on-scroll-down",
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
