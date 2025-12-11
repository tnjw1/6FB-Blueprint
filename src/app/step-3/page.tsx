"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StepsLayout } from "@/components/steps-layout";
import { TestimonialCard } from "@/components/testimonial-card";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Adam",
    text: "The Blueprint helped Adam confidently raise his prices, buy back hours of his week, and finally step out of burnout mode.",
    image: "/Adam.jpg",
    tag: "Blueprint Member",
  },
  {
    name: "K-Cutz",
    text: "The Blueprint showed Kcutz how to structure his days properly, giving him full control of his time and leading to more output with less stress.",
    image: "/K Cutz.jpg",
    tag: "Blueprint Member",
  },
  {
    name: "Greedy Cutz",
    text: "The Blueprint helped Greedy build a content system that took his videos viral and started bringing in new clients from his growth online.",
    image: "/Greedy Cutz.jpg",
    tag: "Blueprint Member",
  },
  {
    name: "Chloe",
    text: "The Blueprint helped Chloe break out of the 9 to 5 and become her own boss full time, transitioning into barbering with confidence.",
    image: "/Chloe.jpg",
    tag: "Blueprint Member",
  },
  {
    name: "Vural",
    text: "The Blueprint helped Vural escape the 'stuck behind the chair' lifestyle and transition into full self-employment, doubling his income.",
    image: "/Vural.jpg",
    tag: "Blueprint Member",
  },
  {
    name: "Wrighty Cuts",
    text: "The Blueprint helped Wrighty overcome his fear of the camera and step into content creation confidently, growing his personal brand.",
    image: "/Wrighty Cuts.jpg",
    tag: "Blueprint Member",
  },
];

const videoTestimonials = ["ynaQoEX1jkE", "NnLRA1T2h14", "20yC7qS3x4k"];

const whatsappTestimonials = [
  "/Whatsapp-1.jpg",
  "/Whatsapp-2.jpg",
  "/Whatsapp-3.jpg",
  "/Whatsapp-4.jpg",
];

export default function Step3Page() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push("/step-4");
  };

  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <StepsLayout currentStep={3}>
      <div className="p-4 sm:p-8 md:p-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 text-center pb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              Look Through Client Feedback
            </h1>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Before we speak, take a few minutes to see what's possible. These
              are barbers who were once in the exact position you're in now,
              stuck at the same income, same shop, same problems, and decided to
              change it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videoTestimonials.map((videoId) => (
              <div
                key={videoId}
                className="
                  relative w-full aspect-video
                  before:content-[''] before:absolute before:-inset-0.5 before:rounded-lg
                  before:bg-[repeating-conic-gradient(from_var(--gradient-angle),#2E592D_0%,#173215_50%,#2E592D_100%)]
                  before:animate-rotating

                  after:content-[''] after:absolute after:-inset-0.5 after:rounded-lg
                  after:bg-[repeating-conic-gradient(from_var(--gradient-angle),#2E592D_0%,#173215_50%,#2E592D_100%)]
                  after:animate-rotating after:blur-xl after:opacity-50
                "
              >
                <div className="w-full h-full rounded-lg overflow-hidden bg-black relative z-10">
                  <YouTube
                    videoId={videoId}
                    opts={youtubeOpts}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={8000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              spaceBetween={16}
              slidesPerView={1.2}
              breakpoints={{
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    name={testimonial.name}
                    text={testimonial.text}
                    image={testimonial.image}
                    tag={testimonial.tag}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-sans">
              More Wins From The Group
            </h2>
            <div className="relative w-full">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={8000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                spaceBetween={16}
                slidesPerView={2.5}
                breakpoints={{
                  640: { slidesPerView: 3.5 },
                  768: { slidesPerView: 4.5 },
                }}
                className="whatsapp-swiper"
              >
                {whatsappTestimonials.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="overflow-hidden rounded-lg border border-neutral-800">
                      <Image
                        src={src}
                        alt={`WhatsApp testimonial ${index + 1}`}
                        width={400}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="bg-[#173215]/10 border border-[#173215]/30 rounded-lg p-4 text-center">
            <p className="font-medium text-[#2E592D] text-lg">
              Your situation isn't unique. Your decision is.
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