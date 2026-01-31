"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  delay?: number;
  duration?: number;
  immediate?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  immediate = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const variants = {
      fadeUp: { y: 50, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleIn: { scale: 0.95, opacity: 0 },
      slideLeft: { x: 80, opacity: 0 },
      slideRight: { x: -80, opacity: 0 },
    };

    const from = variants[animation];
    const to = { y: 0, x: 0, opacity: 1, scale: 1, duration, delay, ease: "power3.out" as const };

    if (immediate) {
      gsap.fromTo(el, { ...from }, to);
    } else {
      const tween = gsap.fromTo(el, { ...from }, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
      return () => {
        const st = (tween as gsap.core.Tween & { scrollTrigger?: ScrollTrigger }).scrollTrigger;
        if (st) st.kill();
        tween.kill();
      };
    }
  }, [animation, delay, duration, immediate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
