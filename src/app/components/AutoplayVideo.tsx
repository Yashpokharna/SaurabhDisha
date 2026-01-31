"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className = "" }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} className={className} controls playsInline loop muted>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
