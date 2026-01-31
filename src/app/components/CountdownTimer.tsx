"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isOver: false,
  };
}

function pad(num: number) {
  return num.toString().padStart(2, "0");
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const target = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const targetTime = new Date(targetDate);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isOver) {
    return (
      <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        The big day has arrived! 🎉
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "D" },
    { value: timeLeft.hours, label: "H" },
    { value: timeLeft.minutes, label: "M" },
    { value: timeLeft.seconds, label: "S" },
  ];

  return (
    <div className="flex flex-nowrap items-center justify-center gap-3 overflow-x-auto py-4 sm:gap-6">
      {units.map(({ value, label }, i) => (
        <span key={label} className="contents">
          {i > 0 && <span className="text-accent/50 text-2xl sm:text-3xl">:</span>}
          <span className="flex shrink-0 flex-col items-center">
            <span className="font-mono text-3xl font-semibold tabular-nums text-foreground sm:text-4xl md:text-5xl">
              {pad(value)}
            </span>
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
              {label}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
