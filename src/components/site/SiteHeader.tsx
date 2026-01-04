"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "Amenities", href: "/amenities" },
  { label: "Celebrations & Events", href: "/events" },
  { label: "Things to Do", href: "/things-to-do" },
  { label: "Policies", href: "/policies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Contact", href: "/contact" },
  { label: "Location", href: "/location" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const getHeaderH = () => {
      const css = getComputedStyle(document.documentElement)
        .getPropertyValue("--wl-header-h")
        .trim();
      const n = Number.parseFloat(css.replace("px", ""));
      return Number.isFinite(n) ? n : 112;
    };

    const update = () => {
      const hero = document.getElementById("wl-hero");

      // If there is no hero on this route, use the “scrolled” header style by default.
      if (!hero) {
        setPastHero(true);
        return;
      }

      const headerH = getHeaderH();
      const heroRect = hero.getBoundingClientRect();
      const heroBottom = heroRect.top + window.scrollY + heroRect.height;

      setPastHero(window.scrollY >= heroBottom - headerH);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "h-[var(--wl-header-h)]",
        "transition-colors duration-300",
        pastHero
          ? "bg-[var(--wl-cream)] shadow-sm text-[var(--wl-ink)]"
          : "bg-transparent text-white",
      ].join(" ")}
    >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
          {/* Row 1: Menu | Willow [logo] Lodge | Book Now */}
          <div className="flex items-center">
            {/* Left: Menu */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={[
                "inline-flex items-center justify-center rounded-full border-2 px-4 py-2 wl-ui text-sm font-bold transition-colors",
                pastHero
                  ? "border-[var(--wl-green)] bg-transparent text-[var(--wl-green)] hover:bg-black/5"
                  : "border-white bg-[var(--wl-green)] text-white hover:bg-white/10",
              ].join(" ")}
            >
              <Menu className="h-5 w-5" />
              <span className="ml-2 wl-ui text-sm font-semibold tracking-wide">
                Menu
              </span>
            </button>
            
            {/* Center: Willow [logo] Lodge */}
            <div className="pointer-events-none flex flex-1 justify-center">
              <Link
                href="/"
                aria-label="Willow Lodge home"
                className="pointer-events-auto flex items-center gap-3"
              >
                <span
                  className={[
                    "wl-heading text-5xl sm:text-6xl font-bold leading-none transition-colors",
                    pastHero ? "text-[var(--wl-green)]" : "text-white",
                    "drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]",
                  ].join(" ")}
                >
                  Willow
                </span>
                
                <Image
                  src="/willowlodge-logo.png"
                  alt="Willow Lodge"
                  width={220}
                  height={64}
                  priority
                  className="h-[64px] w-auto"
                />

                <span
                  className={[
                    "wl-heading text-5xl sm:text-6xl font-bold leading-none transition-colors",
                    pastHero ? "text-[var(--wl-green)]" : "text-white",
                    "drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]",
                  ].join(" ")}
                >
                  Lodge
                </span>
              </Link>
            </div>
                
            {/* Right: Book Now */}
            <div className="flex justify-end">
              <Link
                href="/book"
                className={[
                  "wl-ui inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors",
                  pastHero
                    ? "border-[var(--wl-green)] bg-transparent text-[var(--wl-green)] hover:bg-black/5"
                    : "border-white bg-[var(--wl-green)] text-white hover:brightness-110",
                ].join(" ")}
              >
                Book Now
              </Link>
            </div>
          </div>
              
          {/* Row 2: Tagline left + line to the right */}
          <div className="mt-2 flex items-center gap-4">
            <div
              className={[
                "wl-ui text-[14px] sm:text-[16px] font-bold",
                "leading-relaxed tracking-[0.04em]",
                "transition-colors",
                pastHero
                  ? "text-[var(--wl-green)]"
                  : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]",
              ].join(" ")}
            >
              Award winning boutique accommodations on the Lowcountry's Hammock Coast.
            </div>
            
            <div
              className={[
                "h-0 border-t-2 flex-1 transition-colors",
                pastHero ? "border-[var(--wl-green)]" : "border-white",
              ].join(" ")}
            />
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[min(440px,92vw)] bg-[var(--wl-cream)] shadow-2xl">
            <div className="flex h-[var(--wl-header-h)] items-center justify-between px-4">
              <div className="wl-ui text-sm font-semibold tracking-wide">
                Willow Lodge
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 p-2 hover:bg-white/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-4 pb-6">
              <ul className="space-y-1">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 wl-ui text-[15px] font-semibold text-black/90 hover:bg-white/60"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--wl-green)] px-5 py-3 wl-ui text-sm font-bold text-white hover:brightness-110"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

