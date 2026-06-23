"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    id: 1,
    title: "Live Stream",
    description: "We provide reliable live streaming and rebroadcast services that bring your event to a wider audience in real time.",
    dark: true,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="2.5"/>
        <polygon points="28,27 28,37 38,32" fill="white"/>
        <path d="M18 20 Q8 32 18 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M46 20 Q56 32 46 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M11 14 Q-4 32 11 50" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
        <path d="M53 14 Q68 32 53 50" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Social Media Content",
    description: "We create engaging photo and video content designed specifically for social media platforms.",
    dark: false,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="32" height="28" rx="4" stroke="#111" strokeWidth="2.5"/>
        <rect x="18" y="8" width="30" height="24" rx="4" stroke="#111" strokeWidth="2.5"/>
        <circle cx="28" cy="20" r="3" stroke="#111" strokeWidth="2"/>
        <path d="M18 30 L24 24 L30 29 L36 22 L42 28" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Photography & Videos",
    description: "We produce high-quality product photos and videos that showcase every detail with clarity and creativity.",
    dark: false,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="52" height="36" rx="5" stroke="#111" strokeWidth="2.5"/>
        <circle cx="32" cy="36" r="10" stroke="#111" strokeWidth="2.5"/>
        <circle cx="32" cy="36" r="4" stroke="#111" strokeWidth="2"/>
        <path d="M22 18 L26 10 H38 L42 18" stroke="#111" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="50" cy="26" r="2" fill="#111"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Corporate Videos",
    description: "We craft professional corporate videos that tell your brand's story with impact and clarity.",
    dark: false,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="40" height="32" rx="4" stroke="#111" strokeWidth="2.5"/>
        <path d="M46 24 L58 16 V48 L46 40" stroke="#111" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="16" y1="22" x2="36" y2="22" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="30" x2="30" y2="30" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(1); // first card open by default

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <>
      {/* ── What We Do Best ── */}
      <section id="services" className="bg-white w-full px-6 sm:px-10 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase leading-none">
              What We
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 uppercase leading-none">
              Do Best
            </h2>
          </div>

          {/* 2×2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => {
              const isOpen = expanded === s.id;
              const dark   = s.dark;

              return (
                <button
                  key={s.id}
                  onClick={() => toggle(s.id)}
                  className={`
                    text-left rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center
                    transition-colors duration-300 cursor-pointer w-full
                    ${dark ? "bg-black" : "bg-gray-100 hover:bg-gray-200"}
                  `}
                >
                  {/* Icon */}
                  <div className="mb-4">{s.icon}</div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-black uppercase leading-tight mb-3 ${dark ? "text-white" : "text-black"}`}>
                    {s.title}
                  </h3>

                  {/* Description — shown when expanded */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className={`text-xs sm:text-sm leading-relaxed ${dark ? "text-white/60" : "text-gray-500"}`}>
                      {s.description}
                    </p>
                  </div>

                  {/* Chevron */}
                  <span className={`mt-4 text-lg transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${dark ? "text-white/50" : "text-gray-400"}`}>
                    &#8964;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Get In Touch */}
          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="px-8 py-2.5 rounded-full bg-black text-white text-xs font-semibold tracking-widest hover:bg-gray-800 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Let Us Help ── */}
      <section className="bg-white w-full px-6 py-14 md:py-20 text-center border-t border-gray-100">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase leading-none">
          Let Us Help
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase leading-none mt-1">
          Your Company
        </h2>
        <p className="mt-3 text-sm font-semibold tracking-widest text-blue-500 uppercase">
          Accelerate Years Ahead
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block px-8 py-2.5 rounded-full border border-gray-300 text-xs font-semibold tracking-widest text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
