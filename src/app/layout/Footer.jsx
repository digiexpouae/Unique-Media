"use client";

import { useState } from "react";
import Image from "next/image";
const services = [
  "LIVE STREAM",
  "SOCIAL MEDIA",
  "PHOTOGRAPHY & VIDEOS",
  "CORPORATE VIDEOS",
];

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/#about" },
  { label: "Services",  href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
];
export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6 md:px-12"     style={{fontFamily:"Montserrat"}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between md:gap-6 items-start">

        {/* Col 1 — Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative h-[60px] w-[180px]">
          <Image src={"/assets/unique-logo.png"} 
          fill
          alt="logo"
          className="object-cover"
          />
          </div>
       
        </div>

        {/* Col 2 — CTA + Email */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 uppercase leading-snug mb-5">
            SIGN UP TO HARNESS THE
            <br />
            POWER OF UNIQUE MEDIA.
          </h2>

          {/* Email input row */}
          <div
            className={`flex items-center  gap-4 transition-all duration-300 ${
              focused
                ? "border-gray-900 shadow-[0_0_0_2px_rgba(0,0,0,0.06)]"
                : "border-gray-300"
            }`}
          >
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 px-3 py-2.5 text-[11px] tracking-widest text-gray-700 placeholder-gray-400 outline-none border bg-transparent font-medium uppercase"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2.5 bg-black  transition-colors duration-300 group/btn"
              aria-label="Subscribe"
            >
              {submitted ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-[pop_0.3s_ease]">
                  <path d="M2 8L6.5 12.5L14 4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:stroke-white"
                >
                  <path
                    d="M2 8H14M14 8L9 3M14 8L9 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 group-hover/btn:stroke-white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Col 3 — Services */}
        <div className="  ">
          <p className="text-xs font-medium  uppercase mb-3">
            Services
          </p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-[10px] font-medium  uppercase hover:text-gray-900 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div className="">
          <p className="text-xs font-medium  uppercase mb-3">
            Company
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[10px] font-medium tracking-tight   uppercase  relative inline-block hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
