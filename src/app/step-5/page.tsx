"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StepsLayout } from "@/components/steps-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will raising my prices make me lose all my clients?",
    answer: (
      <>
        <p className="font-bold mb-2">
          Short Answer: No, not with the right system.
        </p>
        <p>
          Explanation: Most barbers don't lose clients because of higher prices,
          they lose clients because they raise prices without strategy. Inside
          the blueprint, you get a structured price increase strategy that shows
          you exactly how to raise prices while keeping your best clients and
          attracting better ones. The goal isn't to lose clients, it's to
          increase demand, loyalty, and perceived value, not just charge more.
        </p>
      </>
    ),
  },
  {
    question:
      "I've tried posting content before… it never worked. Why would it work this time?",
    answer: (
      <>
        <p className="font-bold mb-2">
          Because you didn't have a system, you had guesswork.
        </p>
        <p className="mb-2">You'll get a full daily content framework that:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Shows you what to post, when to post, and why</li>
          <li>Trains you how to film & edit content that increases demand</li>
          <li>Positions you as the "premium operator" in your area</li>
        </ul>
        <p className="mt-2">
          When content is structured properly, it leads to new client bookings,
          higher retention, and more premium clients, consistently.
        </p>
      </>
    ),
  },
  {
    question: "What if my area is too competitive or too cheap?",
    answer: (
      <>
        <p className="font-bold mb-2">
          Your area is not the problem, your positioning is.
        </p>
        <p>
          The program teaches you how to elevate your brand, skillset, and
          visibility so you become the go-to premium barber, regardless of
          location. Low-ticket barbers compete on price. High-earning barbers
          compete on identity, content, and client experience. That's what the
          blueprint installs.
        </p>
      </>
    ),
  },
  {
    question: "I don't know if investing in myself will pay off.",
    answer: (
      <>
        <p className="font-bold mb-2">
          Here's the truth: The real cost is staying where you are.
        </p>
        <p className="mb-2">
          Right now you're losing money every week from:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low pricing</li>
          <li>Gaps in your diary</li>
          <li>Missed opportunities</li>
          <li>No structure or consistency</li>
          <li>No brand positioning</li>
        </ul>
        <p className="mt-2">
          This program fixes all of that and raises your monthly income in a
          controlled, strategic, predictable way.
        </p>
      </>
    ),
  },
  {
    question: "What if I can't stay consistent? I always fall off.",
    answer: (
      <>
        <p className="font-bold mb-2">
          This is exactly why the blueprint focuses heavily on:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Identity training</li>
          <li>Discipline systems</li>
          <li>Daily structure</li>
          <li>Mindset & accountability</li>
        </ul>
        <p className="mt-2">
          You're not just getting "advice." You're getting weekly 1:1 coaching,
          group support, and daily accountability from a community of high
          achieving barbers, the opposite of the negative circles you're in now.
          Falling off becomes nearly impossible.
        </p>
      </>
    ),
  },
  {
    question: "I'm not good at tech, filming, or editing… will I struggle?",
    answer: (
      <>
        <p className="font-bold mb-2">Not at all.</p>
        <p className="mb-2">
          The blueprint includes step by step training for filming, editing,
          content structure, and branding, all made for beginners.
        </p>
        <p className="mb-2">
          Everything is simplified, templated, and broken down.
        </p>
        <p>
          You'll learn only what you need to attract premium clients, not become
          a YouTuber.
        </p>
      </>
    ),
  },
  {
    question: "How fast will I see results?",
    answer: (
      <>
        <p className="font-bold mb-2">
          Most barbers see their first wins within 7 to 14 days, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Their first price increase</li>
          <li>More inbound bookings</li>
          <li>More confidence posting content</li>
          <li>Clear structure & workflow</li>
          <li>Better client retention</li>
        </ul>
        <p className="mt-2">
          This blueprint is engineered to get you fast, visible wins so momentum
          builds quickly.
        </p>
      </>
    ),
  },
];

export default function Step5Page() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push("/final-step");
  };

  return (
    <StepsLayout currentStep={5}>
      <div className="p-4 sm:p-8 md:p-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center pb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              Please Read the Below Frequently Asked Questions
            </h1>
          </div>

          <Accordion type="single" collapsible className="w-full text-left">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-300 space-y-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex justify-center mt-4">
            <Button
              onClick={handleNextStep}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2E592D] to-[#173215] text-white font-bold py-3 px-8 text-lg flex items-center gap-2 hover:from-[#173215] hover:to-[#2E592D]"
            >
              I Have Read the FAQs
            </Button>
          </div>
        </div>
      </div>
    </StepsLayout>
  );
}