"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    id: 1,
    title: (
      <>
        Live <br /> Stream
      </>
    ),
    description:
      "We provide reliable live streaming and rebroadcast services that bring your event to a wider audience in real time.",
    dark: true,
    icon: "/assets/live-gray.png",
  },
  {
    id: 2,
    title: "Event Content Production",
    description:
      "We create engaging photo and video content designed specifically for social media platforms.",
    dark: false,
    icon: "/assets/event_content_production.png",
  },
  {
    id: 3,
    title: "Photography & Videos",
    description:
      "We produce high-quality product photos and videos that showcase every detail with clarity and creativity.",
    dark: false,
    icon: "/assets/photo.png",
  },
  {
    id: 4,
    title: "Corporate Videos",
    description:
      "We craft professional corporate videos that tell your brand's story with impact and clarity.",
    dark: false,
    icon: "/assets/v.png",
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(1);

  return (
    <>
      <section id="services" className="bg-white w-full px-6 sm:px-10 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase leading-none">
              What We
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase leading-none">
              Do Best
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            {SERVICES.map((s,index) => {
              const isOpen = expanded === s.id;

              return (
               <button
  key={s.id}
  type="button"
  onClick={() => setExpanded(isOpen ? null : s.id)}
  className={`
    text-left rounded-4xl p-6 sm:p-8 flex flex-col items-center justify-between text-center w-full
    transition-all duration-300 cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-400
  h-[300px]"
    ${isOpen && "min-h-[350px]" }
  `}
>
                  <div className="mb-4">
                    <Image
                      src={s.icon}
                      alt={s.title?.toString?.() || "service"}
                      width={120}
                      height={100}
                    />
                  </div>

                  <h3 className="text-xl sm:text-5xl font-black uppercase leading-tight mb-3 text-center tracking-tighter">
                    {s.title}
                  </h3>

{isOpen && (
  <div className="mt-2">
    <p className="text-xs sm:text-sm leading-relaxed text-center">
      {s.description}
    </p>
  </div>
)}
                  <span
                    className={`
                      mt-4 text-lg transition-transform duration-300
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="px-6 py-1 rounded-full bg-black text-white text-xs md:text-base font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}