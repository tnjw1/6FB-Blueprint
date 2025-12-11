"use client";

import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface StepsLayoutProps {
  currentStep: number;
  children: React.ReactNode;
}

const totalSteps = 5;

export const StepsLayout = ({ currentStep, children }: StepsLayoutProps) => {
  const router = useRouter();
  const progressValue = (currentStep / totalSteps) * 100;

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <Progress
          value={progressValue}
          className="w-full h-2 rounded-none bg-neutral-700 [&>div]:bg-gradient-to-r from-[#2E592D] to-[#173215]"
        />
        <div className="p-4 bg-black/30 backdrop-blur-sm">
          <div className="w-full max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="w-10">
              {currentStep > 1 && (
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-neutral-300 hover:text-white hover:bg-white/10"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Go back</span>
                </Button>
              )}
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-foreground">
                Step {currentStep} of {totalSteps}
              </p>
            </div>
            <div className="w-10" />
          </div>
        </div>
      </div>
      <div className="relative pt-20">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};