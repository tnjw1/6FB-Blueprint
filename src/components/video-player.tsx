"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, RotateCcw, Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const VideoPlayer = ({
  src,
  isPlaying,
  onTogglePlay,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      if (!isPlaying) {
        onTogglePlay();
      } else {
        videoRef.current.play();
      }
    }
  };

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
    video.muted = true;
    setIsMuted(true);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div
      className="
        relative w-full aspect-video
        before:content-[''] before:absolute before:-inset-0.5 before:rounded-lg
        before:bg-[repeating-conic-gradient(from_var(--gradient-angle),theme(colors.green.300)_0%,theme(colors.green.500)_50%,theme(colors.green.300)_100%)]
        before:animate-rotating

        after:content-[''] after:absolute after:-inset-0.5 after:rounded-lg
        after:bg-[repeating-conic-gradient(from_var(--gradient-angle),theme(colors.green.300)_0%,theme(colors.green.500)_50%,theme(colors.green.300)_100%)]
        after:animate-rotating after:blur-xl after:opacity-50
      "
    >
      <div
        className="w-full h-full rounded-lg overflow-hidden bg-black relative cursor-pointer z-10 group"
        onClick={onTogglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={src}
          loop
          playsInline
          muted
        >
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
            <Play className="h-16 w-16 text-white/80" />
          </div>
        )}

        <Progress
          value={progress}
          className="absolute bottom-0 left-0 right-0 w-full h-1.5 rounded-none bg-neutral-500/50 [&>div]:bg-gradient-to-r from-green-300 to-green-500"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  );
};