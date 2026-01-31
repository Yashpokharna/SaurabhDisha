"use client";

import { useEffect, useState } from "react";

const MIN_LOAD_TIME_MS = 1400;
const FADE_OUT_MS = 500;

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_LOAD_TIME_MS - elapsed);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => setIsLoading(false), FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 bg-background transition-opacity duration-500 ease-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Logo - centered, large */}
      <div
        className="relative mx-auto mb-10 h-28 w-72 shrink-0 bg-contain bg-center bg-no-repeat sm:mb-12 sm:h-36 sm:w-96 md:h-40 md:w-[420px]"
        style={{ backgroundImage: "url('/logo.png')" }}
        role="img"
        aria-label="Saurabh & Disha"
      />

      {/* Names */}
      <p className="text-center font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Saurabh & Disha
      </p>
      <p className="mt-3 text-center font-sans text-sm tracking-[0.4em] text-muted sm:text-base">
        February 10, 2026
      </p>

      {/* Loading dots */}
      <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
        <span className="loader-dot" />
        <span className="loader-dot loader-dot-delay-1" />
        <span className="loader-dot loader-dot-delay-2" />
      </div>
    </div>
  );
}
