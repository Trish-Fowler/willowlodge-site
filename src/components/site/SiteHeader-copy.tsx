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
          "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center px-4">
          {/* Left: Menu */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-4 py-2 wl-ui text-sm font-bold text-white bg-[var(--wl-green)] hover:bg-white/10"
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
                className="wl-heading text-white text-6xl font-bold leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]"
              >
                Willow
              </span>

              <Image
                src="/willowlodge-logo.png"
                alt="Willow Lodge"
                width={220}
                height={64}
                priority
                className="h-[56px] w-auto"
              />

              <span
                className="wl-heading text-white text-6xl font-bold leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]"
              >
                Lodge
              </span>
            </Link>
          </div>

          {/* Right: Book Now (bold green pill) */}
          <div className="flex justify-end">
            <Link
              href="/book"
              className="wl-ui inline-flex items-center justify-center rounded-full border-2 border-white px-4 py-2 bg-[var(--wl-green)] wl-ui text-sm font-bold text-white shadow-sm hover:brightness-110"
            >
              Book Now
            </Link>
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

