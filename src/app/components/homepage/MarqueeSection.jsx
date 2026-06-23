"use client";

// components/MarqueeSection.jsx
// Row 1 scrolls left → right (forward)
// Row 2 scrolls right → left (backward)
//
// Drop your logo images into /public/logos/ and update the arrays below.
// Each item: { src: "/logos/name.png", alt: "Brand Name" }

import Image from "next/image";

const ROW_ONE = [
  { src: "/assets/logos/egma.jpg",     alt: "Amity University Dubai" },
  { src: "/assets/logos/ADMAF.png",  alt: "Assa Abloy" },
  { src: "/assets/logos/ASSA-ABLOY.png",  alt: "Banque Misr" },
  { src: "/assets/logos/Amity-Univercity.png",  alt: "Tonight" },
  { src: "/assets/logos/Canadian-University-Dubai.jpg",  alt: "Canadian University Dubai" },
  { src: "/assets/logos/Capital-envelopes-LLc.png",  alt: "Capital Envelopes LLC" },
    { src: "/assets/logos/Banque_Misr.svg.png",  alt: "Tonight" },
  { src: "/assets/logos/Burj-Al-Arab.gif",  alt: "Canadian University Dubai" },
  { src: "/assets/logos/D-marin-Jumeirah-Marsa-Al-Arab.png",  alt: "Capital Envelopes LLC" },
    { src: "/assets/logos/unilever-logo-png_seeklogo-287464.png",  alt: "Capital Envelopes LLC" },

];

const ROW_TWO = [
  { src: "/assets/logos/Cisco-Logo.png", alt: "Cisco" },
  { src: "/assets/logos/dubai-civil.JPG", alt: "Dubai Civil Aviation Authority" },
  { src: "/assets/logos/D-marin-Jumeirah-Marsa-Al-Arab.png", alt: "Marriott Jumeirah" },
  { src: "/assets/logos/dubai-civil-association.JPG", alt: "Dubai Economy and Tourism" },
  { src: "/assets/logos/Elie-Saab.png", alt: "EGMA" },
  { src: "/assets/logos/friesland-Campina.png", alt: "Unilever" },
  { src: "/assets/logos/Gulf_Business_Machines_logo_2015.png", alt: "Elie Saab" },
    { src: "/assets/logos/logo-bluemarlin-x2-2.png", alt: "Unilever" },
  { src: "/assets/logos/Label-CUCA.png", alt: "Elie Saab" },
];

function MarqueeRow({ logos, direction = "left", speed = 30 }) {
  // Duplicate logos so the strip loops seamlessly
  const items = [...logos, ...logos];

  return (
    <div className="relative flex overflow-hidden w-full">
      <div
        className={`flex shrink-0 gap-12 md:gap-16 items-center
          ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        `}
        style={{ "--marquee-speed": `${speed}s` }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex  relative items-center justify-center shrink-0 h-22 w-32 md:w-44"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
             fill
              className="object-contain  transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Duplicate strip for seamless loop */}
      <div
        className={`flex shrink-0 gap-12 md:gap-16 items-center
          ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        `}
        style={{ "--marquee-speed": `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex items-center relative justify-center shrink-0 h-22 w-32 md:w-44"
          >
            <Image
              src={logo.src}
              alt="logo"
              fill
              className="object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="bg-white w-full py-10 md:py-14 overflow-hidden">
      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex flex-col gap-8">
          {/* Row 1 — moves left (forward) */}
          <MarqueeRow logos={ROW_ONE} direction="left" speed={28} />

          {/* Row 2 — moves right (backward) */}
          <MarqueeRow logos={ROW_TWO} direction="right" speed={32} />
        </div>
      </div>
    </section>
  );
}
