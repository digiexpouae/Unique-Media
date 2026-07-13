"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
"Unique Media Solutions delivered exceptional quality from start to finish. Their creativity, professionalism, and passion for what they do are evident in every project. The team's ability to produce visually stunning content exceeded our expectations. Highly recommended."  
 ,avatar: null,
  },
  {
    quote:
"Working with Unique Media Solutions transformed our production experience. Their attention to detail, creative vision, and commitment to excellence set them apart. Every deliverable was executed with precision, making the entire process seamless and enjoyable."   
, avatar: null,
  },
  {
    quote:"From the initial concept to the final delivery, every stage was handled with care and expertise. The team brought our event to life with creativity and flawless execution, capturing every important moment beautifully. We couldn't have asked for a better partner."  
, avatar: null,
  },
];
export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const { quote, name, title } = testimonials[current];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6"
    style={{fontFamily:"Montserrat"}}>
      <div className="w-full  flex  flex-col md:flex-row items-center gap-12 md:justify-between md:gap-20">
        {/* Left — circular badge */}
        <div className=" flex flex-shrink-0 items-center justify-center relative w-full h-54 md:w-1/3 md:h-72">
          {/* Rotating text ring */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
          >
            <defs>
              <path
                id="circle-path"
                d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="11.5"
              letterSpacing="7"
              fontWeight="500"
            >
              <textPath href="#circle-path">
                TRUSTED BY CLIENTS • TESTIMONIAL •{" "}
              </textPath>
            </text>
          </svg>

          {/* Dashes around circle */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full"
          >
            {Array.from({ length: 48 }).map((_, i) => {
              const angle = (i / 48) * 2 * Math.PI - Math.PI / 2;
              const r1 = 88;
              const r2 = 93;
              const x1 = 100 + r1 * Math.cos(angle);
              const y1 = 100 + r1 * Math.sin(angle);
              const x2 = 100 + r2 * Math.cos(angle);
              const y2 = 100 + r2 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Quote mark center */}
          <div className="relative z-10 flex items-center justify-center">
            <svg
              width="52"
              height="40"
              viewBox="0 0 52 40"
              fill="none"
                className="rotate-180"

              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Two bold quote marks */}
              <path
                d="M0 40V24.8C0 18.1333 1.6 12.5333 4.8 8C8.10667 3.46667 12.9067 0.533333 19.2 0L21.6 4.4C17.6 5.2 14.5067 7.06667 12.32 10C10.24 12.8267 9.2 16.2667 9.2 20.3333H18.4V40H0ZM30.4 40V24.8C30.4 18.1333 32 12.5333 35.2 8C38.5067 3.46667 43.3067 0.533333 49.6 0L52 4.4C48 5.2 44.9067 7.06667 42.72 10C40.64 12.8267 39.6 16.2667 39.6 20.3333H48.8V40H30.4Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Right — quote content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Quote text */}
          <blockquote className="text-white text-xl md:text-3xl font-light leading-snug tracking-tight">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Divider */}
          <div className="w-full h-px bg-white/15" />

          {/* Author + pagination */}
          <div className="flex items-center justify-between">
            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-11 h-11 rounded-full bg-[#555] flex-shrink-0" />
              {/* <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {name}
                </p>
                <p className="text-white/50 text-xs mt-0.5">{title}</p>
              </div> */}
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.5 2L3.5 6L7.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <span className="text-white/50 text-sm tabular-nums px-1">
                <span className="text-white">{current + 1}</span>
                {" / "}
                {testimonials.length}
              </span>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 2L8.5 6L4.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
