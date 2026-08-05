"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "bg-[#F8F3EB]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,44,44,0.05)] border-b border-[#252A26]/[0.06]"
          : "bg-[#F8F3EB]/90 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[#252A26] hover:text-[#607E64] transition-colors"
        >
          Step Zero
          <span className="w-2 h-2 rounded-full bg-[#F0B429]" />
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#F8F3EB] z-40 flex flex-col items-start justify-center gap-7 px-8">
          {[...navLinks, { href: "/free-guide", label: "Free Guide" }].map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-[#252A26] hover:text-[#607E64] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#F0B429] text-[#252A26] text-base font-bold px-8 py-4 rounded-full"
          >
            Book a Clarity Call
          </Link>
        </div>
      )}
    </header>
  );
}
