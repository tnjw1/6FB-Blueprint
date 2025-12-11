"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import YouTube from "react-youtube";
import { Button } from "@/components/ui/button";
import { SplashScreen } from "@/components/splash-screen";
import { Check } from "lucide-react";
import { StepsLayout } from "@/components/steps-layout";

export default function HomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("Name");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const handleNextStep = () => {
    router.push("/step-2");
  };

  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0, // Disable autoplay
      controls: 1, // Enable native controls
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <StepsLayout currentStep={1}>
      {isLoading && (
        <SplashScreen
          onAnimationEnd={() => setIsLoading(false)}
          name={name}
        />
      )}
      <div
        className={`p-4 sm:p-8 md:p-12 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-center pb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">
              Watch This Before Your Call
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto">
              In it, we break down exactly how the Blueprint helps barbers go
              from a 3k per month to a 10k a month barber using systems,
              content, and discipline.
            </p>
          </div>
          <p className="text-5xl animate-float">👇</p>
          <div
            className="
              relative w-full aspect-video
              before:content[''] before:absolute before:-inset-0.5 before:rounded-lg
              before:bg-[repeating-conic-gradient(from_var(--gradient-angle),#2E592D_0%,#173215_50%,#2E592D_100%)]
              before:animate-rotating

              after:content[''] after:absolute after:-inset-0.5 after:rounded-lg
              after:bg-[repeating-conic-gradient(from_var(--gradient-angle),#2E592D_0%,#173215_50%,#2E592D_100%)]
              after:animate-rotating after:blur-2xl after:opacity-75
            "
          >
            <div className="w-full h-full rounded-lg overflow-hidden bg-black relative z-10 group">
              <YouTube
                videoId="uYlmah2zAgk"
                opts={youtubeOpts}
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="mt-2 text-neutral-400 font-medium">
            💡 We will reference this video on the call. If you skip it, you
            will be behind.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleNextStep}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2E592D] to-[#173215] text-white font-bold py-3 px-8 text-lg flex items-center gap-2 hover:from-[#173215] hover:to-[#2E592D]"
            >
              <Check className="h-6 w-6" />
              I have watched the video.
            </Button>
          </div>
        </div>
      </div>
    </StepsLayout>
  );
}