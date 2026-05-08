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
          ? "bg-[#FAF7F2]/95 shadow-sm border-b border-[#7A9E7E]/20"
          : "bg-[#FAF7F2] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] hover:text-[#F0B429] transition-colors"
        >
          Step Zero
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#2C2C2C] hover:text-[#F0B429] transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#F0B429] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/free-guide"
            className="text-[15px] font-medium text-[#2C2C2C] hover:text-[#F0B429] transition-colors relative group"
          >
            Free Guide
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#F0B429] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="bg-[#F0B429] text-white text-[15px] font-bold px-6 py-2.5 rounded-lg hover:bg-[#d9a123] transition-colors"
          >
            Book a Clarity Call
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
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
        <div className="md:hidden fixed inset-0 top-16 bg-[#FAF7F2] z-40 flex flex-col items-center justify-center gap-8">
          {[...navLinks, { href: "/free-guide", label: "Free Guide" }].map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-[#2C2C2C] hover:text-[#F0B429] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#F0B429] text-white text-lg font-bold px-8 py-3 rounded-lg"
          >
            Book a Clarity Call
          </Link>
        </div>
      )}
    </header>
  );
}
