// components/AboutSection.jsx
"use client"
import Image from "next/image";
export default function AboutSection() {
  return (
    <section id="about" className="bg-white w-full px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* ── Pill Row ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-14">
          {/* We */}
          <div className="flex items-center justify-center px-10 py-4 rounded-full bg-gray-100 text-gray-500 text-xl md:text-2xl font-light min-w-[140px]">
            We
          </div>

          {/* Create */}
          <div className="flex items-center justify-center px-10 py-4 rounded-full bg-gray-300 text-gray-600 text-xl md:text-2xl font-light min-w-[160px]">
            Create
          </div>

          {/* Arrow pill — swap the inner div for your SVG */}
          <div className="flex items-center justify-center px-10 py-4 rounded-full bg-gray-600 min-w-[140px]">
            {/*
             * Replace this placeholder with your arrow SVG, e.g.:
             * <Image src="/icons/arrow-right.svg" alt="" width={28} height={28} />
             */}
       <div className="w-10 h-7 text-white flex items-center justify-center">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-7"
  >
    <path
      d="M2 12H19M19 12L13 6M19 12L13 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>
          </div>

          {/* Impact */}
          <div className="flex items-center justify-center px-10 py-4 rounded-full bg-black text-white text-xl md:text-2xl font-light min-w-[160px]">
            Impact
          </div>
        </div>

        {/* ── Bottom Row: Map + About Us label + Text ── */}
        <div className="mt-14 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0">

          {/* Left — Map image + About Us badge */}
          <div className="relative flex-1 flex items-center justify-start min-h-[220px] w-full">
            {/* About Us badge */}
            <span className="absolute top-1/3 left-1/5 z-10 inline-flex items-center gap-1.5 bg-gray-200 white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
              About Us
            </span>

            {/*
             * Map image placeholder
             * Drop your UAE/region map SVG or PNG at /public/images/map.png
             * then replace this div with:
             *
             * import Image from "next/image";
             * <Image
             *   src="/images/map.png"
             *   alt="Map"
             *   width={420}
             *   height={280}
             *   className="object-contain opacity-80 mt-8"
             * />
             */}
            <div className="mt-8 w-full relative h-[220px] md:h-[260px] rounded-xl  flex items-center justify-center text-gray-300 text-sm select-none w-full">
              {/* Map image goes here */}
            <Image
               src="/assets/middleeast.png"
               alt="Map"
              fill
               className="object-cover md:object-[top_20%] opacity-30 "
             />
            </div>
          </div>

          {/* Right — Description text */}
          <div className="flex-1  flex md:justify-end ">
            <p className="text-md md:w-[90%] md:text-2xl font-semibold leading-snug text-gray-900 text-left md:text-right">
              Unique Media Solutions creates{" "}
              <span className="font-bold text-black">high-quality media</span>{" "}
              <span className="font-extralight">
                that captures key moments 
               and aligns with brand storytelling.
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}