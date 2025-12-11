"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

interface SplashScreenProps {
  onAnimationEnd: () => void;
  name: string | null;
}

export const SplashScreen = ({ onAnimationEnd, name }: SplashScreenProps) => {
  const [phase, setPhase] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Text animations
    timers.push(setTimeout(() => setPhase(1), 100)); // Logo fade-in
    timers.push(setTimeout(() => setPhase(2), 800)); // Heading fade-in
    timers.push(setTimeout(() => setPhase(3), 1800)); // Subtext fade-in

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35); // ~4 seconds to complete

    // Fade out and end timers
    timers.push(
      setTimeout(() => {
        setIsFadingOut(true);
      }, 4000) // Start fade out at 4s
    );

    timers.push(setTimeout(onAnimationEnd, 5000)); // End at 5s

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-dark-grey to-black transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <div
          className={`transition-all duration-1000 flex flex-col items-center ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src="/6FB by Matty Cutz.png"
            alt="6FB by Matty Cutz Logo"
            width={350}
            height={140}
            className="h-auto w-80"
            priority
          />
        </div>
        <div className="max-w-4xl px-4 min-h-[160px]">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-sans transition-opacity duration-1000 ${
              phase >= 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            The Six-Figure Barber Blueprint
          </h1>
          <p
            className={`text-lg sm:text-xl text-foreground font-normal mt-4 transition-opacity duration-1000 ${
              phase >= 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            Congrats{name ? `, ${name}` : ''}! Your call is booked, you are now one step closer to
            changing your life
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 w-full max-w-xs px-4">
        <Progress
          value={progress}
          className="h-2 bg-neutral-800 [&>div]:bg-gradient-to-r from-[#2E592D] to-[#173215]"
        />
        <p className="text-center text-sm text-neutral-400 mt-2 font-medium">
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};