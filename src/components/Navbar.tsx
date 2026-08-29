"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "bg-[#F8F3EB]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,44,44,0.05)] border-b border-[#252A26]/[0.06]"
            : "bg-[#F8F3EB]/90 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 h-24 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center -ml-2"
            aria-label="Step Zero home"
          >
            <Image src="/images/brand/step-zero-transparent.png" alt="Step Zero with Palasha" width={140} height={111} className="h-[82px] w-auto object-contain" preload />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-semibold text-[#252A26]/75 hover:text-[#607E64] transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#607E64] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/free-guide"
              className="text-[14px] font-semibold text-[#252A26]/75 hover:text-[#607E64] transition-colors relative group"
            >
              Free Guide
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#607E64] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="bg-[#F0B429] text-[#252A26] text-[14px] font-bold px-6 py-3 rounded-full hover:bg-[#dfa51d] transition-colors shadow-[0_8px_22px_rgba(240,180,41,0.18)]"
            >
              Book a Clarity Call
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-full"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-[#2C2C2C]" />
            <span className="block w-6 h-0.5 bg-[#2C2C2C]" />
            <span className="block w-6 h-0.5 bg-[#2C2C2C]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu — a full-screen opaque panel that sits above the header */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-[60] bg-[#F8F3EB] flex flex-col overscroll-contain"
        >
          <div className="flex items-center justify-between h-24 px-5 shrink-0">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center -ml-2"
              aria-label="Step Zero home"
            >
              <Image src="/images/brand/step-zero-transparent.png" alt="Step Zero with Palasha" width={140} height={111} className="h-[70px] w-auto object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="size-11 -mr-2 grid place-items-center rounded-full text-[#252A26]"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pb-8">
            <ul className="border-t border-[#252A26]/10">
              {[...navLinks, { href: "/free-guide", label: "Free Guide" }].map(
                (link) => (
                  <li key={link.href} className="border-b border-[#252A26]/10">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-xl font-semibold text-[#252A26] active:text-[#607E64] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex items-center justify-center bg-[#F0B429] text-[#252A26] text-base font-bold px-8 py-4 rounded-full shadow-[0_12px_30px_rgba(240,180,41,0.2)]"
            >
              Book a Clarity Call
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
