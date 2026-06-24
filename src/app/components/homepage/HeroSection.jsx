import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className=" relative min-h-screen bg-white w-full flex items-center overflow-hidden">
      {/*
       * Background image layer
       * Add your smoke/wave image to /public/images/hero-bg.png
       * and uncomment the <Image> block below, or use the CSS class
       * .hero-bg-image defined at the bottom of this file's companion CSS.
       *
       * Option A — Next.js Image (recommended for performance):
       *
       * import Image from "next/image";
       * <Image
       *   src="/images/hero-bg.png"
       *   alt=""
       *   fill
       *   priority
       *   className="object-cover object-center pointer-events-none select-none"
       *   aria-hidden="true"
       * />
       *
       * Option B — CSS background (see heroSection.css below)
       * Just add className="hero-bg-image" to the div below.
       */}
      <div
        aria-hidden="true"
        className=" absolute inset-0 z-10 opacity-60"
        style={{
          backgroundImage: 'url(/assets/background-image.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Subtle left-edge gradient to keep text legible over the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0  bg-black pointer-events-none"
      />

      {/* Content */}
      <div className="absoulte inset-0 z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">
        {/* Headline */}
        <h1 className="text-5xl  lg:text-6xl font-medium tracking-tighter text-white leading-[1.05] max-w-2xl"
        style={{fontFamily:"Montserrat"}}>
          Marketing That
          <br />
          Brings Leads
          <br />
          Not Likes
        </h1>

        {/* Star Rating */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-1" aria-label="5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-sm font-medium tracking-wide">
            3000+ Customers
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Primary — Chat with us */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20  backdrop-blur-sm text-white text-xs font-bold uppercase tracking-tight pl-4 pr-2 py-1 rounded-full transition-colors duration-200"
          >
            Chat With Us
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <svg
                className="w-5 h-5"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="black"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* Secondary — Our Works */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 bg-white/60 hover:bg-white/50 text-white text-xs font-bold uppercase tracking-tight px-8 py-3 rounded-full  transition-colors duration-200"
          >
            Our Works
          </Link>
        </div>
      </div>
    </section>
  );
}
