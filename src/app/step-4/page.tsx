"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StepsLayout } from "@/components/steps-layout";
import { Camera, Mic, Notebook, Wifi, UserCheck } from "lucide-react";

const requirements = [
  {
    icon: Camera,
    text: "Camera on. We want to speak face to face, not to a blank screen.",
  },
  {
    icon: Mic,
    text: "Quiet environment. No shop noise, no clients in the chair. Find a space where you can focus.",
  },
  {
    icon: Notebook,
    text: "Notebook or notes app ready. Come with numbers (current income, prices, monthly goals) and any questions.",
  },
  {
    icon: Wifi,
    text: "Stable connection. Join from Wi-Fi if possible, and be ready 5 minutes early.",
  },
  {
    icon: UserCheck,
    text: "Full attention. This is not the time to be cutting hair, scrolling, or driving.",
  },
];

export default function Step4Page() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push("/step-5");
  };

  return (
    <StepsLayout currentStep={4}>
      <div className="p-4 sm:p-8 md:p-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-8 text-center pb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              How to Show Up to Your Call
            </h1>
            <p className="text-neutral-300">
              To get the most from your session, we need you fully present.
              Treat this like the moment you decided to stop wasting your
              potential.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-left text-lg">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#173215]/20 text-[#2E592D] rounded-full p-2 mt-1 flex-shrink-0">
                  <req.icon className="h-5 w-5" />
                </div>
                <p>{req.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-500/10 border border-slate-400/30 rounded-lg p-4 text-center">
            <p className="font-medium text-slate-300">
              You've booked the call, now prove to yourself you're serious
              enough to show up prepared.
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              onClick={handleNextStep}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2E592D] to-[#173215] text-white font-bold py-3 px-8 text-lg flex items-center gap-2 hover:from-[#173215] hover:to-[#2E592D]"
            >
              Yes — I'll Show Up Prepared
            </Button>
          </div>
        </div>
      </div>
    </StepsLayout>
  );
}