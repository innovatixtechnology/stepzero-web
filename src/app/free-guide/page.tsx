"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FreeGuidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Copy */}
          <div className="md:w-[55%]">
            <div className="w-12 h-px bg-[#F0B429] mb-6" />
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[36px] font-bold text-[#2C2C2C] mb-6 leading-snug">The Step Zero Gut Reset Guide</h1>
            <p className="text-lg italic text-[#C17B5C] mb-8">5 Things to Fix Before Any Diet, Supplement or Protocol Can Work</p>
            <p className="text-base text-[#2C2C2C]/80 leading-[1.7] mb-6">A free guide for anyone who&apos;s doing everything right — and still not feeling it.</p>

            <div className="bg-white rounded-lg p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-10">
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Inside the Guide</h2>
              <ul className="space-y-3">
                {["Your Nervous System Is in Survival Mode", "Your Carbohydrate Load Is Higher Than You Think", "Your Gut Lining Needs Repair Before It Needs Probiotics", "You're Dehydrated in Ways You Don't Recognise", "Your Sleep Is Sabotaging Your Gut More Than Your Food Is"].map((item) => (
                  <li key={item} className="text-[15px] text-[#2C2C2C]/80 flex items-start gap-3">
                    <span className="text-[#F0B429] mt-1">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="text-base text-[#2C2C2C]/80 leading-[1.7] mb-6">None of these fixes are complicated. None require a special diet, an expensive supplement, or a complete lifestyle overhaul. They are the foundation — the step that most health advice skips entirely.</p>

              {submitted ? (
                <div className="bg-[#EEF3EE] rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-[#7A9E7E] mb-2">🎉 Thank you!</p>
                  <p className="text-sm text-[#2C2C2C]/70">Your guide is on its way to your inbox. Check your email (and spam!) within the next few minutes.</p>
                  <Link href="/blog" className="inline-block mt-4 text-[#F0B429] hover:underline font-medium">Read the Blog &rarr;</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} className="w-full border border-[#7A9E7E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} className="w-full border border-[#7A9E7E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white" />
                  </div>
                  <button type="submit" className="w-full bg-[#F0B429] text-white text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#d9a123] transition-colors">Send Me the Free Guide &rarr;</button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Mockup */}
          <div className="md:w-[45%] flex justify-center sticky top-24">
            {/* Guide cover — guide-cover.png (600×750, 4:5) fills 3:4 container */}
            <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/guide-cover.png"
                alt="Step Zero Gut Reset Guide"
                fill
                className="object-cover object-center"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white drop-shadow">Gut Reset</p>
                <p className="text-white/80 text-sm drop-shadow">Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
