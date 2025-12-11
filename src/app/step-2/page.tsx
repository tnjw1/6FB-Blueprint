"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StepsLayout } from "@/components/steps-layout";
import { Check, Link as LinkIcon } from "lucide-react";

export default function Step2Page() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push('/step-3');
  };

  return (
    <StepsLayout currentStep={2}>
      <div className="p-4 sm:p-8 md:p-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-8 text-center pb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              Confirm Your Call
            </h1>
            <p className="text-neutral-300">
              You'll receive a calendar invite via email (Google, Apple, or
              Outlook). It will look just like the example below.
            </p>
          </div>

          <div className="w-full max-w-[160px] sm:max-w-xs mx-auto overflow-hidden rounded-lg border border-neutral-700">
            <Image
              src="/calendar-invite-new.png"
              alt="Calendar invite for Toby and Matty Cuts call"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-6 text-left text-lg">
            <div className="flex items-start gap-4">
              <div className="bg-[#173215]/20 text-[#2E592D] rounded-full p-2 mt-1 flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <p>
                <span className="font-bold text-white">Accept the invite</span>{" "}
                and add it to your calendar so you don't forget. Set a reminder
                10 to 15 minutes before the call.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#173215]/20 text-[#2E592D] rounded-full p-2 mt-1 flex-shrink-0">
                <LinkIcon className="h-5 w-5" />
              </div>
              <p>
                <span className="font-bold text-white">
                  Your email will include a clickable Zoom / Google Meet link.
                </span>{" "}
                Keep that email saved so you can access the call at the right
                time.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg border border-neutral-700">
            <Image
              src="/meeting-link.jpg"
              alt="Email with Google Meet link for Blueprint Call"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-slate-500/10 border border-slate-400/30 rounded-lg p-4 text-center">
            <p className="font-medium text-slate-300">
              💡 This call could be step 1 towards completely changing your
              income and life as a barber, so don't miss the call!
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              onClick={handleNextStep}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2E592D] to-[#173215] text-white font-bold py-3 px-8 text-lg flex items-center gap-2 hover:from-[#173215] hover:to-[#2E592D]"
            >
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </StepsLayout>
  );
}