"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  { id: 1, src: "/assets/background-image.png", alt: "Black Coffee Event" },
  { id: 2, src: "/assets/abt-map.png",          alt: "Daily Stoic" },
  { id: 3, src: "/assets/background-image.png", alt: "Project Three" },
  { id: 4, src: "/assets/abt-map.png",          alt: "Project Four" },
  { id: 5, src: "/assets/background-image.png", alt: "Project Five" },
];

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function ResultsSection() {
  const [current, setCurrent] = useState(0);
  const total = ITEMS.length;
  const prev  = mod(current - 1, total);
  const next  = mod(current + 1, total);

  return (
    <section id="portfolio" className="relative bg-white w-full py-14 md:py-24 overflow-hidden">

      {/* ── Headline ── */}
    

      {/* ── Cards + CTA ── */}
      {/*
       * The row has an explicit height at each breakpoint so the
       * absolutely-positioned cards never collapse the parent or overlap
       * the headline / arrows.
       */}
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] flex items-center justify-center">

        {/* Left card */}
        <div
          onClick={() => setCurrent(prev)}
          className="
            absolute cursor-pointer overflow-hidden shadow-xl
            rounded-2xl md:rounded-3xl
            transition-transform duration-300 hover:scale-[1.02]
            left-[-20px]  w-[150px] h-[210px]
            sm:left-[-30px] sm:w-[230px] sm:h-[310px]
            md:left-[-50px] md:w-[400px] md:h-[460px]
          "
          style={{ transform: "rotate(-8deg)", transformOrigin: "bottom right" }}
        >
          <Image src={ITEMS[prev].src} alt={ITEMS[prev].alt} fill className="object-cover" />
        </div>

        {/* Right card */}
        <div
          onClick={() => setCurrent(next)}
          className="
            absolute cursor-pointer overflow-hidden shadow-xl
            rounded-2xl md:rounded-3xl
            transition-transform duration-300 hover:scale-[1.02]
            right-[-20px]  w-[150px] h-[210px]
            sm:right-[-30px] sm:w-[230px] sm:h-[310px]
            md:right-[-50px] md:w-[400px] md:h-[460px]
          "
          style={{ transform: "rotate(8deg)", transformOrigin: "bottom left" }}
        >
          <Image src={ITEMS[next].src} alt={ITEMS[next].alt} fill className="object-cover" />
        </div>

        {/* Centre — View More */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2">
            <div className="text-center mb-8 md:mb-10 px-4">
        <p className="text-[10px] md:text-sm font-semibold tracking-tight text-gray-700 uppercase mb-1">
          To Infinity And Beyond
        </p>
        <h2 className="text-3xl sm:text-6xl md:text-8xl font-black text-black leading-none uppercase">
          Next Level
        </h2>
        <h2 className="text-2xl sm:text-5xl mb-4 md:mb-6 md:text-7xl font-light text-black leading-none uppercase tracking-tight">
          Results
        </h2>
      <Link
            href="/portfolio"
            className="px-4 md:px-6 py-2  rounded-full border border-gray-300 text-xs md:text-sm text-gray-700 bg-white/90 backdrop-blur-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            View More
          </Link> 
      </div>
         
        </div>
      </div>

      {/* ── Arrows + Dots ── */}
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-20 mt-6">

        <button
          onClick={() => setCurrent(prev)}
          aria-label="Previous"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5">
            <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-2 bg-black" : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent(next)}
          aria-label="Next"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </section>
  );
}
