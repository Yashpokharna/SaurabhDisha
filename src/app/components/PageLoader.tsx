"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_LOAD_TIME_MS = 1400;
const FADE_OUT_MS = 500;

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = MIN_LOAD_TIME_MS;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 95);
      setProgress(p);
    }, 50);

    const handleLoad = () => {
      setProgress(100);
      clearInterval(interval);
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
      return () => {
        window.removeEventListener("load", handleLoad);
        clearInterval(interval);
      };
    }
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ease-out ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, var(--section-alt) 0%, var(--background) 70%)",
        }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-6 px-6">
          <div className="animate-loader-pulse animate-loader-fade-in">
            <Image
              src="/logo.png"
              alt="Saurabh & Disha"
              width={220}
              height={110}
              className="h-20 w-auto object-contain opacity-95 sm:h-28"
              priority
            />
          </div>
          <p
            className="animate-loader-fade-in font-serif text-2xl text-foreground/95 sm:text-3xl"
            style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
          >
            Saurabh & Disha
          </p>
          <p
            className="animate-loader-fade-in text-sm tracking-[0.35em] text-muted"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            February 10, 2026
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden bg-accent/10">
          <div
            className="loader-progress-bar h-full bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
}
