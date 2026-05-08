"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    topic: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", location: "", topic: "", message: "" });
  };

  return (
    <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Form */}
          <div className="md:w-[55%]">
            <div className="w-12 h-px bg-[#F0B429] mb-6" />
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[44px] font-bold text-[#2C2C2C] mb-6">Let&apos;s talk.</h1>
            <p className="text-base text-[#2C2C2C]/80 leading-[1.7] max-w-md mb-10">
              I read every message personally. If you&apos;re unsure where to start, the best first step is usually the free Gut Health Guide — it gives you a real sense of how I work. If you&apos;re ready to talk, fill in the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">Name <span className="text-[#F0B429]">*</span></label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full border border-[#7A9E7E]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">Email <span className="text-[#F0B429]">*</span></label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-[#7A9E7E]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#2C2C2C] mb-2">Where are you based?</label>
                <select id="location" name="location" value={formData.location} onChange={handleChange} className="w-full border border-[#7A9E7E]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white">
                  <option value="">Select</option><option value="india">India</option><option value="outside">Outside India</option>
                </select>
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-[#2C2C2C] mb-2">What brings you here?</label>
                <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className="w-full border border-[#7A9E7E]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white">
                  <option value="">Select</option><option value="coaching">1:1 Coaching</option><option value="clarity">Clarity Call</option><option value="general">General Question</option><option value="media">Media & Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">Tell me a little about what you&apos;re dealing with</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full border border-[#7A9E7E]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0B429] focus:ring-1 focus:ring-[#F0B429] transition-colors bg-white resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#C17B5C] text-white text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#a8694d] transition-colors">Send my message &rarr;</button>
            </form>
            <p className="text-xs italic text-[#7A9E7E] mt-4">I typically respond within 48 hours on weekdays.</p>
          </div>

          {/* Right Column: Photo + Quick Links */}
          <div className="md:w-[45%]">
            <div className="w-full aspect-[4/5] max-w-[400px] bg-gradient-to-br from-[#C17B5C]/15 to-[#7A9E7E]/15 rounded-2xl mx-auto mb-8" />
            <div className="space-y-4 max-w-[400px] mx-auto">
              <Link href="/free-guide" className="block bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow border border-[#2C2C2C]/5">
                <p className="text-sm font-semibold text-[#2C2C2C] mb-1">📥 Download the free guide</p>
                <p className="text-xs text-[#2C2C2C]/60">Start with the Step Zero Gut Reset Guide</p>
              </Link>
              <Link href="/work-with-me" className="block bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow border border-[#2C2C2C]/5">
                <p className="text-sm font-semibold text-[#2C2C2C] mb-1">📞 Book a Clarity Call</p>
                <p className="text-xs text-[#2C2C2C]/60">60 minutes, direct and useful</p>
              </Link>
              <a href="https://instagram.com/stepzero_with_palashaa" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow border border-[#2C2C2C]/5">
                <p className="text-sm font-semibold text-[#2C2C2C] mb-1">📱 Instagram</p>
                <p className="text-xs text-[#2C2C2C]/60">@stepzero_with_palashaa</p>
              </a>
            </div>
            <div className="mt-8 p-6 bg-[#EEF3EE] rounded-lg max-w-[400px] mx-auto">
              <p className="text-sm text-[#2C2C2C]/80 leading-[1.7]"><strong>Media & Collaboration</strong><br />For media, podcast or collaboration enquiries: Open to conversations around guest appearances, expert contributions, and brand collaborations genuinely aligned with the Step Zero philosophy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
