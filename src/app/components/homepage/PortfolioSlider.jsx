"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    image: "/assets/dubai-civil-association.JPG",
    brand: "Gitex Pure Storage 2025",
    videoId: "1168382303",
  },
  {
    id: 2,
    image: "/assets/dubai-civil-association.JPG",
    brand: "Dubai Civil Aviation Authority ",
    videoId: "1160154730",
  },
  {
    id: 3,
    image: "/assets/d-marian.JPG",
    brand: "D-Marin",
    videoId: "1160149849",
  },
  {
    id: 4,
    image: "/assets/gulf_food.JPG",
    brand: "Gulf food GARIBSONS 2025",
    videoId: "1084592465",
  },
  {
    id: 5,
    image: "/assets/cisco.JPG",
    brand: "Cisco at Gisec 2025",
    videoId: "1160154730",
  },
  {
    id: 6,
    image: "/assets/riyadh-airport.JPG",
    brand: " Riyadh Airport",
    videoId: "1160147528",
  },
];

export default function PortfolioSlider() {
  const trackRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.querySelector("[data-card]");
    const cardW = cardEl ? cardEl.offsetWidth + 20 : 340;
    track.scrollBy({ left: dir === "next" ? cardW : -cardW, behavior: "smooth" });
  };

  const closeVideo = () => setActiveVideo(null);

  return (
    <section id="portfolio" className="bg-[#efefed] w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="text-center px-4 mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-black uppercase leading-none tracking-tight">
            We Build And
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-black uppercase leading-none tracking-tight mt-1">
            Scale Brands
          </h2>
          <p className="mt-4 text-sm max-w-xs mx-auto text-black leading-snug">
            A collection of projects we helped accelerate years ahead
          </p>
        </div>

        {/* Slider */}
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
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8 md:px-12 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {SLIDES.map((s) => (
              <div
                key={s.id}
                data-card
                onClick={() => setActiveVideo(s.videoId)}
                className="snap-start flex-shrink-0 w-[260px] sm:w-[290px] md:w-[310px] rounded-3xl overflow-hidden shadow-xl flex flex-col cursor-pointer group relative bg-white/60"
              >
                <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.brand}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />

                  {/* Hover overlay with play button */}
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 ml-1">
                        <polygon points="6,4 20,12 6,20" fill="black"/>
                      </svg>
                    </div>
                  </div>

                  {/* Brand pill */}
                  {/* <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-[10px] font-semibold tracking-widest uppercase">{s.brand}</span>
                  </div> */}
                </div>
              </div>
            ))}
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

        {/* View More */}
        <div className="flex justify-center mt-12">
          <Link
            href="https://vimeo.com/uniquemediasolution"
            className="inline-block px-8 py-2.5 rounded-full bg-black text-white text-xs md:text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Video Overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          style={{ animation: "fadeIn 0.3s ease" }}
          onClick={closeVideo}
        >
          {/* Close */}
          <button
            onClick={closeVideo}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            aria-label="Close video"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* iframe */}
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
  src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}