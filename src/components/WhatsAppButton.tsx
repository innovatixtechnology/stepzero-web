"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [showLabel, setShowLabel] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3">
      {showLabel && (
        <div className="relative hidden sm:block rounded-2xl bg-white px-4 py-3 pr-9 text-sm font-semibold text-[#252A26] shadow-[0_12px_35px_rgba(37,42,38,0.18)] border border-[#252A26]/10">
          Message me on WhatsApp
          <button
            type="button"
            onClick={() => setShowLabel(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#252A26]/45 hover:text-[#252A26]"
            aria-label="Hide WhatsApp message"
          >
            ×
          </button>
        </div>
      )}
      <a
        href="https://wa.aisensy.com/aabkw9"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Palasha on WhatsApp"
        className="grid size-14 sm:size-16 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 sm:size-9" fill="none">
          <path d="M16 4.2A11.4 11.4 0 0 0 6.1 21.3L4.6 27.4l6.2-1.6A11.4 11.4 0 1 0 16 4.2Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 10.1c.3-.6.6-.6 1-.6h.7c.2 0 .5.1.6.5l1.1 2.7c.1.4.1.6-.1.9l-.9 1.1c-.2.2-.2.4 0 .7.7 1.3 1.8 2.4 3.2 3.1.3.2.5.2.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.7 1.3c.3.2.5.3.5.6 0 .3-.2 1.7-1.2 2.5-1 .8-2.2 1-3.2.7-1-.3-4.5-1.6-7.2-5.4-2.1-2.9-2.1-5.1-1.7-6 .4-.8 1.1-1.4 2-1.6Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
