"use client";

import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  tag: string;
}

export const TestimonialCard = ({
  name,
  text,
  image,
  tag,
}: TestimonialCardProps) => {
  return (
    <div className="bg-black text-white rounded-2xl flex flex-col h-full">
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={`Testimonial from ${name}`}
          width={400}
          height={270}
          className="h-[270px] w-full object-cover object-top hover:scale-105 transition-all duration-300"
        />
        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
      </div>
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <p className="font-medium border-b border-neutral-700 pb-5 text-neutral-300 flex-grow">
          “{text}”
        </p>
        <div className="mt-4">
          <p className="font-bold text-white">— {name}</p>
          <p className="text-sm font-medium bg-gradient-to-r from-[#2E592D] to-[#173215] text-transparent bg-clip-text">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
};