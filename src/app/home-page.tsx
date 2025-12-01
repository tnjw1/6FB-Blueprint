"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SplashScreen } from "@/components/splash-screen";
import { Volume2, VolumeX, RotateCcw, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StepsLayout } from "@/components/steps-layout";

export default function HomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("Name");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleNextStep = () => {
    router.push("/step-2");
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the video click handler from firing
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration > 0) {
        const progressPercentage = (video.currentTime / video.duration) * 100;
        setProgress(progressPercentage);
      }
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [isLoading]);

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
              Watch this short video in full before your call{name ? `, ${name}` : ''}. In it, we break
              down exactly how the Blueprint helps barbers go from £1k to
              £4k/month trapped behind the chair to a structured, six-figure
              path using systems, content, and discipline.
            </p>
          </div>
          <p className="text-5xl animate-float">👇</p>
          <div
            className="
              relative w-full aspect-video
              before:content-[''] before:absolute before:-inset-0.5 before:rounded-lg
              before:bg-[repeating-conic-gradient(from_var(--gradient-angle),theme(colors.green.300)_0%,theme(colors.green.500)_50%,theme(colors.green.300)_100%)]
              before:animate-rotating

              after:content-[''] after:absolute after:-inset-0.5 after:rounded-lg
              after:bg-[repeating-conic-gradient(from_var(--gradient-angle),theme(colors.green.300)_0%,theme(colors.green.500)_50%,theme(colors.green.300)_100%)]
              after:animate-rotating after:blur-2xl after:opacity-75
            "
          >
            <div
              className="w-full h-full rounded-lg overflow-hidden bg-black relative cursor-pointer z-10"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="w-full h-full scale-150"
                src="https://cbjrmuowhljcfiirdhvv.supabase.co/storage/v1/object/public/assets/6FB/WELCOME_TO_THE_6_FIGURE_BARBER_BLUEPRINT_COMPRESSED.mp4"
                loop
                playsInline
                muted
              >
                Your browser does not support the video tag.
              </video>
              <Progress
                value={progress}
                className="absolute bottom-0 left-0 right-0 w-full h-1.5 rounded-none bg-neutral-500/50 [&>div]:bg-gradient-to-r from-green-300 to-green-500"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={handleRestart}
                        size="icon"
                        variant="ghost"
                        className="text-white bg-black/50 hover:bg-black/75 hover:text-white rounded-full"
                      >
                        <RotateCcw className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Restart Video</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  onClick={toggleMute}
                  size="icon"
                  variant="ghost"
                  className="text-white bg-black/50 hover:bg-black/75 hover:text-white rounded-full"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
              </div>
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
              className="w-full sm:w-auto bg-gradient-to-r from-green-300 to-green-500 text-black font-bold py-3 px-8 text-lg flex items-center gap-2 hover:from-green-400 hover:to-green-600"
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