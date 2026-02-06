"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SectionAnimatorProps {
  children: ReactNode;
}

export default function SectionAnimator({ children }: SectionAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-animate">
      {children}
    </div>
  );
}
