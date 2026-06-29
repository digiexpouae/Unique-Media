"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ITEMS = [
  { id: 1, mobsrc:"/assets/eventsCovered/mb-1.webp" ,  src:"/assets/eventsCovered/CAMZ8828.webp", alt: "CAMZ8828.webp" },
  { id: 2, mobsrc:"/assets/eventsCovered/mb-2.webp" ,  src:"/assets/eventsCovered/1445-1058.webp", alt: "1445-1058.webp" },
  { id: 3, mobsrc:"/assets/eventsCovered/mb-3.webp" ,  src:"/assets/eventsCovered/1437-0342.webp", alt: "1437-0342.webp" },
  { id: 4, mobsrc:"/assets/eventsCovered/mb-4.webp" ,  src:"/assets/eventsCovered/1299D3-1073.webp", alt: "1299D3-1073.webp" },
  { id: 5, mobsrc:"/assets/eventsCovered/mb-5.webp" ,  src:"/assets/eventsCovered/CAMY5566.webp", alt: "CAMY5566.webp" },
  { id:6,  mobsrc:"/assets/eventsCovered/mb-6.webp" , src:"/assets/eventsCovered/CAMY5548.webp", alt: "CAMY5548.webp" },
  { id: 7, mobsrc:"/assets/eventsCovered/mb-7.jpg" ,  src:"/assets/eventsCovered/DSC00029.webp", alt: "DSC00029.webp" },
];

 
  
function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function ResultsSection() {


const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);



  const getImageSrc = (item) => (isMobile ? item.mobsrc : item.src);

 const total=ITEMS.length;
 const [current, setCurrent] = useState(0);
const [animSide, setAnimSide] = useState(null);
const [prevImg, setPrevImg] = useState(mod(-1, total)); // starts at last item
const [nextImg, setNextImg] = useState(1);              // starts at second item
const goPrev = () => {
  setAnimSide("left");
    const newCurrent = mod(current - 1, total);
    setCurrent(newCurrent);
    setPrevImg(mod(newCurrent - 1, total)); // ✅ only left updates
    setTimeout(() => {

    setAnimSide(null);
  }, 150);
};

const goNext = () => {
  setAnimSide("right");
    const newCurrent = mod(current + 1, total);
    setCurrent(newCurrent);
  setNextImg(mod(newCurrent + 1, total)); // ✅ was using stale current, now newCurrent
      setTimeout(() => {
    setAnimSide(null);
  }, 150);
};

// ✅ use state directly, no derivation from current
const prev = prevImg;
const next = nextImg;

  return (
    <section className="relative bg-white w-full py-14 md:py-24 overflow-hidden">
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] flex items-center justify-center">
        {/* Left card */}
        <div
          className={`
            absolute cursor-pointer overflow-hidden shadow-xl
            rounded-2xl md:rounded-3xl
   transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02]
            left-[-20px] w-[150px] h-[210px]
            sm:left-[-30px] sm:w-[230px] sm:h-[310px]
            md:left-[-50px] md:w-[400px] md:h-[460px]
 ${animSide === "left" 
  ? "opacity-0 " 
  : "opacity-100 "}
          `}
          style={{ transform: "rotate(-8deg)", transformOrigin: "bottom right" }}
        >
          <Image src={getImageSrc(ITEMS[prev])} alt={getImageSrc(ITEMS[prev])} fill className="object-cover" />
        </div>

        {/* Right card */}
        <div
          className={`
            absolute cursor-pointer overflow-hidden shadow-xl
            rounded-2xl md:rounded-3xl
   transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02]
            right-[-20px] w-[150px] h-[210px]
            sm:right-[-30px] sm:w-[230px] sm:h-[310px]
            md:right-[-50px] md:w-[400px] md:h-[460px]
            // ${animSide === "right" ? "opacity-0 " : "opacity-100"}
          `}
          style={{ transform: "rotate(8deg)", transformOrigin: "bottom left" }}
        >
          <Image src={ITEMS[next].src} alt={ITEMS[next].alt} fill className="object-cover" />
        </div>

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
            {/* <Link
              href="/"
              className="px-4 md:px-6 py-2 rounded-full border border-gray-300 text-xs md:text-sm text-gray-700 bg-white/90 backdrop-blur-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              View More
            </Link> */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 sm:px-12 md:px-20 mt-6">
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5">
            <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* <div className="flex items-center gap-2">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? "next" : "prev");
                setCurrent(i);
                setTimeout(() => setDirection(null), 300);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-2 bg-black" : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div> */}

        <button
          onClick={goNext}
          aria-label="Next"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}