"use client";

import { useState } from "react";

const services = [
  "LIVE STREAM",
  "SOCIAL MEDIA",
  "PHOTOGRAPHY & VIDEOS",
  "CORPORATE VIDEOS",
];

const companyLinks = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];

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
    <footer className="bg-white border-t border-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 items-start">

        {/* Col 1 — Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex flex-col leading-none select-none">
            <span className="text-[15px] font-black tracking-widest text-gray-900 uppercase transition-colors duration-300 group-hover:text-gray-600">
              UNIQUE
            </span>
            <span className="text-[7px] font-medium tracking-[0.25em] text-gray-400 uppercase mt-0.5">
              MEDIA SOLUTION
            </span>
          </div>
          {/* Arrow chevron mark */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="transition-transform duration-500 group-hover:translate-x-1"
          >
            <polygon points="0,0 18,14 0,28" fill="#C8C8C8" />
            <polygon points="10,0 28,14 10,28" fill="#E8E8E8" />
          </svg>
        </div>

        {/* Col 2 — CTA + Email */}
        <div className="md:col-span-1">
          <h2 className="text-[13px] font-black tracking-wider text-gray-900 uppercase leading-snug mb-5">
            SIGN UP TO HARNESS THE
            <br />
            POWER OF UNIQUE MEDIA.
          </h2>

          {/* Email input row */}
          <div
            className={`flex items-center border transition-all duration-300 ${
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
              className="flex-1 px-3 py-2.5 text-[11px] tracking-widest text-gray-700 placeholder-gray-400 outline-none bg-transparent font-medium uppercase"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2.5 bg-white border-l border-gray-300 hover:bg-gray-900 transition-colors duration-300 group/btn"
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
                    stroke="#111111"
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
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
            Services
          </p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-[10px] font-semibold tracking-wider text-gray-700 uppercase hover:text-gray-900 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
            Company
          </p>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[10px] font-semibold tracking-wider text-gray-700 uppercase hover:text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
