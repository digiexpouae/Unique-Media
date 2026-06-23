"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const SERVICES = [
  {
    id: 1,
    title: <>Live <br /> Stream</>,
      // title: 'Live Stream',
    description: "We provide reliable live streaming and rebroadcast services that bring your event to a wider audience in real time.",
    dark: true,
    icon:"/assets/live.png",
  },
  {
    id: 2,
    title: "Social Media Content",
    description: "We create engaging photo and video content designed specifically for social media platforms.",
    dark: false,
    icon:"/assets/social.png"
  },
  {
    id: 3,
    title: "Photography & Videos",
    description: "We produce high-quality product photos and videos that showcase every detail with clarity and creativity.",
    dark: false,
    icon: "/assets/photo.png"
  },
  {
    id: 4,
    title: "Corporate Videos",
    description: "We craft professional corporate videos that tell your brand's story with impact and clarity.",
    dark: false,
       icon: "/assets/v.png"
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(1); // first card open by default


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
            <h2 className="text-4xl sm:text-5xl md:text-6xl  uppercase leading-none">
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
                  className={`
                    text-left rounded-4xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[300px] text-center
                    transition-colors duration-300 cursor-pointer w-full
                    ${dark ? "bg-black" : "bg-gray-100 hover:bg-gray-200"}
                  `}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Image src={s.icon}
                  width={120}
                  height={100}
                  /></div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-5xl font-black uppercase leading-tight mb-3 text-center tracking-tighter ${dark ? "text-white" : "text-gray-400"}`}>
                    {s.title}
                  </h3>

                  {/* Description — shown when expanded */}
                  <div className={`overflow-hidden transition-all duration-300 `}>
                  <p className={`text-xs sm:text-sm leading-relaxed text-center ${dark ? "text-white/60" : "text-black "}`}>
  {s.description}
</p>
                  </div>

                  {/* Chevron */}
                  <span className={`mt-4 text-lg transition-transform duration-300  ${dark ? "text-white/50" : "text-gray-400"}`}>
                   <ChevronDown className="w-4 h-4" />

                  </span>
                </button>
              );
            })}
          </div>

          {/* Get In Touch */}
          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="px-6 py-1 rounded-full bg-black text-white text-xs md:text-base font-medium  hover:bg-gray-800 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Let Us Help ── */}
      <section className="bg-white w-full px-6 py-10 text-center ">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none">
          Let Us Help
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none mt-1">
          Your Company
        </h2>
        <p className="mt-3 text-2xl sm:text-4xl text-black  tracking-tight  uppercase">
          Accelerate Years Ahead
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block px-8 py-1 rounded-full  text-sm md:text-base font-medium tracking-tight text-black bg-gray-200 hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
