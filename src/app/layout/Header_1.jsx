"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/#about" },
  { label: "Services",  href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section[id]");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // section must be 50% visible to activate
  //   );

  //   sections.forEach((s) => observer.observe(s));
  //   return () => observer.disconnect();
  // }, []);

  // nav link className
  const linkClass = (href) =>
    `text-sm font-normal transition-colors duration-200 ${
      activeSection === href.replace("#", "")
        ? "text-yellow-400"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex  relative items-center gap-2 shrink-0 w-[160px]  h-[50px]">
        {/* Replace with <Image> once you add your logo asset */}
        <Image src={'/assets/unique-logo.png'}
        fill
        alt="logo"
        className="object-cover"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`text-sm font-normal transition-colors duration-200 ${linkClass(href)}} ${
              label === "Home"
                ? "text-yellow-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-2">
        <Link
          href="/contact"
          className="text-sm text-white b pb-0.5 hover:border-white transition-colors duration-200 flex items-center gap-2"
        >
          <span className="border-b-2 border-white">      Get In Touch</span>
    
          <span className="inline-flex items-center justify-center w-7 h-7 border border-white rounded-full hover:border-white transition-colors duration-200">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12L12 2M12 2H5M12 2V9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col items-start px-6 py-6 gap-5 md:hidden border-t border-white/10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 ${
                label === "Home"
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white border-b border-white/40 pb-0.5 flex items-center gap-2"
          >
            Get In Touch
            <span className="inline-flex items-center justify-center w-6 h-6 border border-white/40 rounded-full">
              <svg
                className="w-3 h-3"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
