"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const guideTopics = [
  "Your nervous system is in survival mode",
  "Your carbohydrate load is higher than you think",
  "Your gut lining needs repair before probiotics",
  "You are dehydrated in ways you do not recognise",
  "Your sleep is affecting your gut more than your food",
];

export default function FreeGuidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F8F3EB] pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-5">A practical place to begin</p>
            <h1 className="text-[40px] md:text-[58px] leading-[1.02] font-semibold text-[#252A26] mb-6">The Step Zero Gut Reset Guide</h1>
            <p className="text-xl text-[#C17B5C] max-w-xl leading-relaxed mb-5">Five foundations to address before another diet, supplement, or protocol.</p>
            <p className="text-base text-[#3E453F]/65 leading-[1.7] mb-9">For anyone doing everything right—and still not feeling it.</p>

            <div className="rounded-[26px] bg-[#E7EFE7] p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-semibold text-[#252A26] mb-6">Inside the guide</h2>
              <div className="space-y-3">
                {guideTopics.map((item, index) => (
                  <div key={item} className="grid grid-cols-[38px_1fr] gap-3 items-center rounded-2xl bg-white/75 p-4">
                    <span className="w-8 h-8 rounded-full bg-[#F0B429] text-[#252A26] text-xs font-bold flex items-center justify-center">{index + 1}</span>
                    <p className="text-sm text-[#252A26]/75 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(44,44,44,.07)]">
              <p className="text-base text-[#3E453F]/70 leading-[1.7] mb-6">Simple, practical foundations—without expensive supplements or a complete lifestyle overhaul.</p>
              {submitted ? (
                <div className="bg-[#E7EFE7] rounded-2xl p-6">
                  <p className="text-lg font-semibold text-[#607E64] mb-2">Thank you—your guide is on its way.</p>
                  <p className="text-sm text-[#3E453F]/65">Check your email and spam folder within the next few minutes.</p>
                  <Link href="/blog" className="inline-block mt-4 text-[#C17B5C] font-semibold text-sm">Read the blog →</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#252A26] mb-2">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} className="w-full border border-[#607E64]/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] bg-[#FFFDFC]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#252A26] mb-2">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} className="w-full border border-[#607E64]/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] bg-[#FFFDFC]" />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-[#dfa51d] transition-colors">Send me the free guide →</button>
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:sticky lg:top-28">
            <div className="relative w-full aspect-[3/2] rounded-[30px] overflow-hidden shadow-[0_30px_70px_rgba(44,44,44,.14)]">
              <Image src="/images/website/4.jpg" alt="Palasha creating the Step Zero Gut Reset Guide" fill className="object-cover" preload sizes="(max-width:1024px) 90vw, 600px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
