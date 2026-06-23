"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    brand: "NodPod",
    body: "We executed a powerful customer retention strategy through automated email flows, giving them the ability to re-engage users based on each user's interaction with the brand.",
    stats: [
      { value: "178%", label: "Increase in Website Traffic" },
      { value: "56%",  label: "Increase in Customer Lifetime Value" },
      { value: "340%", label: "Increase in ROAS" },
      { value: "91%",  label: "Decrease in Customer Acquisition Cost" },
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    brand: "BearFruit",
    body: "A full-funnel paid social campaign that turned cold audiences into loyal repeat buyers, scaling revenue 3× in under 90 days.",
    stats: [
      { value: "3×",   label: "Revenue Growth" },
      { value: "62%",  label: "Lower CAC" },
      { value: "210%", label: "ROAS Improvement" },
      { value: "88%",  label: "Retention Rate" },
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    brand: "LaunchCo",
    body: "Zero-to-launch content strategy that built an audience of 40k followers before the product even shipped, turning launch day into a sell-out event.",
    stats: [
      { value: "40k",  label: "Followers Pre-Launch" },
      { value: "100%", label: "Sell-Out on Day 1" },
      { value: "4.8★", label: "Average Review Score" },
      { value: "2.1×", label: "Email List Growth" },
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    brand: "ScaleUp",
    body: "Rebranded and relaunched a stagnant DTC product line, doubling monthly recurring revenue within one quarter through targeted content.",
    stats: [
      { value: "2×",   label: "MRR Growth" },
      { value: "44%",  label: "Lower Bounce Rate" },
      { value: "190%", label: "Ad Click-Through" },
      { value: "73%",  label: "Repeat Purchase Rate" },
    ],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    brand: "Vantage",
    body: "Scaled a fashion brand from local boutique to national e-commerce powerhouse through precision-targeted influencer and paid media campaigns.",
    stats: [
      { value: "5×",   label: "Online Revenue" },
      { value: "38%",  label: "Return Rate Drop" },
      { value: "320%", label: "Instagram Growth" },
      { value: "67%",  label: "Higher AOV" },
    ],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    brand: "Meridian",
    body: "Built a B2B demand generation engine that cut sales cycle length in half and tripled qualified pipeline within a single quarter.",
    stats: [
      { value: "3×",   label: "Qualified Pipeline" },
      { value: "50%",  label: "Shorter Sales Cycle" },
      { value: "410%", label: "LinkedIn Reach" },
      { value: "82%",  label: "Lead-to-Demo Rate" },
    ],
  },
];

function StatGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 pt-4 border-t border-white/10">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <p className="text-white text-sm font-bold leading-none">{value}</p>
          <p className="text-white/40 text-[10px] leading-tight mt-0.5">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function PortfolioSlider() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.querySelector("[data-card]");
    const cardW = cardEl ? cardEl.offsetWidth + 20 : 340;
    track.scrollBy({ left: dir === "next" ? cardW : -cardW, behavior: "smooth" });
  };

  return (
    <section className="bg-[#efefed] w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Headline ── */}
        <div className="text-center px-4 mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-black uppercase leading-none tracking-tight">
            We Build And
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-black uppercase leading-none tracking-tight mt-1">
            Scale Brands
          </h2>
          <p className="mt-4 text-sm max-w-xs mx-auto text-black leading-snug">
            <span className="">A collection of projects we helped </span>
            <span className="">accelerate years ahead</span>
          </p>
          <Link
            href="/portfolio"
            className="inline-block mt-5 px-7 py-2 rounded-full bg-black text-white text-xs font-medium tracking-tight hover:bg-gray-800 transition-colors duration-200"
          >
            View More
          </Link>
        </div>

        {/* ── Slider with side arrows ── */}
        <div className="relative flex items-center px-8 md:px-0">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous"
            className="absolute left-0 z-10 md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#efefed] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200 shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       px-8 md:px-12 pb-2
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {SLIDES.map((s, i) => {
              const isCenter = i === 1; // middle card starts highlighted
              return (
                <div
                  key={s.id}
                  data-card
                  className={`snap-start flex-shrink-0 w-[260px] sm:w-[290px] md:w-[310px]
                             rounded-3xl overflow-hidden shadow-xl flex flex-col
                             transition-transform duration-300
                             ${"bg-white/60 scale-95 grayscale-[20%]"}`}
                >
                  {/* Photo — full bleed, taller on center card */}
                  <div className={`relative w-full ${"h-[280px] md:h-[380px]"} overflow-hidden`}>
                    <Image
                      src={s.image}
                      alt={s.brand}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Dark card logo overlay */}
              
                  </div>

                  {/* Content — only on center dark card */}
                
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("next")}
            aria-label="Next"
            className="absolute right-0 z-10 md:translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#efefed] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200 shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}