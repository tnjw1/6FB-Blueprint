"use client";

import { Header } from "@/components/header";
import { CheckCircle } from "lucide-react";

export default function FinalStepPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 sm:p-8 md:p-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-8 items-center">
          <div className="w-full max-w-md aspect-video bg-neutral-900/70 rounded-lg border border-neutral-800 flex items-center justify-center">
            <CheckCircle className="h-24 w-24 text-[#2E592D]" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-sans">
              See You on the Call
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300">
              The Six-Figure Barber Blueprint
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}