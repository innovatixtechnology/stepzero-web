"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", location: "", topic: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", location: "", topic: "", message: "" });
  };

  const fieldClass = "w-full border border-[#607E64]/25 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] bg-[#FFFDFC]";

  return (
    <section className="bg-[#F8F3EB] pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-5">Contact</p>
            <h1 className="text-[42px] md:text-[62px] leading-none font-semibold text-[#252A26] mb-6">Let&apos;s talk.</h1>
            <p className="text-lg text-[#3E453F]/68 leading-[1.75] max-w-xl mb-5">Not sure where to start? Send a quick message and tell us what&apos;s going on.</p>
            <a href="https://wa.aisensy.com/aabkw9" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 mb-9 hover:bg-[#dfa51d] transition-colors">Start on WhatsApp →</a>

            <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-6 md:p-9 shadow-[0_25px_60px_rgba(44,44,44,.07)] space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#252A26] mb-2">Name <span className="text-[#C17B5C]">*</span></label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#252A26] mb-2">Email <span className="text-[#C17B5C]">*</span></label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={fieldClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-[#252A26] mb-2">Where are you based?</label>
                  <select id="location" name="location" value={formData.location} onChange={handleChange} className={fieldClass}>
                    <option value="">Select</option><option value="india">India</option><option value="outside">Outside India</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold text-[#252A26] mb-2">What brings you here?</label>
                  <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className={fieldClass}>
                    <option value="">Select</option><option value="whatsapp">WhatsApp conversation</option><option value="coaching">1:1 Coaching</option><option value="clarity">Clarity Call</option><option value="general">General Question</option><option value="media">Media & Collaboration</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#252A26] mb-2">Tell me a little about what you&apos;re dealing with</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} />
              </div>
              <button type="submit" className="w-full rounded-full bg-[#C17B5C] text-white text-sm font-bold px-7 py-4 hover:bg-[#a8694d] transition-colors">Send my message →</button>
            </form>
            <p className="text-xs text-[#607E64] mt-4">I typically respond within 48 hours on weekdays.</p>
          </div>

          <div className="w-full lg:sticky lg:top-28">
            <div className="relative w-full max-w-[540px] aspect-[7/10] mx-auto rounded-[30px] overflow-hidden shadow-[0_30px_70px_rgba(44,44,44,.14)]">
              <Image src="/images/website/10.jpg" alt="Palasha, Integrative Health Coach" fill className="object-cover" preload sizes="(max-width:1024px) 90vw, 540px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/65 via-transparent to-transparent" />
              <div className="absolute left-7 right-7 bottom-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#F0B429] font-semibold mb-2">A human conversation</p>
                <p className="text-xl md:text-2xl font-semibold leading-snug">Tell me what&apos;s going on. We&apos;ll find the clearest next step.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 mt-5 max-w-[540px] mx-auto">
              <a href="https://wa.aisensy.com/aabkw9" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl bg-[#E7EFE7] p-5">
                <div><p className="text-sm font-bold text-[#252A26]">WhatsApp</p><p className="text-xs text-[#3E453F]/55 mt-1">Start the conversation</p></div><span className="text-[#607E64] group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <Link href="/work-with-me" className="group flex items-center justify-between rounded-2xl bg-[#F3E8E2] p-5">
                <div><p className="text-sm font-bold text-[#252A26]">Clarity Call</p><p className="text-xs text-[#3E453F]/55 mt-1">30 minutes, direct and useful</p></div><span className="text-[#C17B5C] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="https://instagram.com/stepzero_with_palasha" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl bg-white p-5">
                <div><p className="text-sm font-bold text-[#252A26]">Instagram</p><p className="text-xs text-[#3E453F]/55 mt-1">@stepzero_with_palasha</p></div><span className="text-[#F0B429] group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="mailto:palasha@stepzero.life" className="group flex items-center justify-between rounded-2xl bg-[#F8F3EB] p-5">
                <div><p className="text-sm font-bold text-[#252A26]">Email</p><p className="text-xs text-[#3E453F]/55 mt-1 break-all">palasha@stepzero.life</p></div><span className="text-[#607E64] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="mt-5 p-6 bg-[#252A26] text-white rounded-[22px] max-w-[540px] mx-auto">
              <p className="text-sm font-bold mb-2">Media & Collaboration</p>
              <p className="text-sm text-white/60 leading-[1.7]">For podcasts, expert contributions, and aligned brand collaborations, write to <a href="mailto:palasha@stepzero.life" className="text-[#F0B429] hover:text-white transition-colors break-all">palasha@stepzero.life</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
