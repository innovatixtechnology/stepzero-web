import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Palasha | Step Zero Integrative Health Coach",
  description: "Meet Palasha, an integrative nutrition health coach whose personal recovery and evidence-aware approach shaped the Step Zero method.",
};

const credentials = [
  "Internationally Certified Integrative Nutrition Health Coach — IIN, New York",
  "Certified Nutritionist — IGMPI (Post Graduate Diploma in Nutrition & Dietetics)",
  "Functional Medicine Certification — AIC",
  "RYT 200 Certified Yoga Teacher — Sivananda tradition",
  "12+ Years in Brand Strategy & Consumer Behaviour",
  "Personal experience: Post-cholecystectomy recovery and postpartum health",
];

const audiences = [
  "Post-surgery recovery — especially post-cholecystectomy",
  "Postpartum women rebuilding nutrition, energy, and identity",
  "Chronic stress and gut issues — bloating, poor digestion, IBS-like symptoms",
  "Stubborn weight that won’t shift despite doing everything right",
  "Sleep issues, anxiety, and low energy with no clear medical cause",
  "Anyone who simply feels off — and wants to understand why",
  "People experiencing symptoms driven by nervous system dysregulation",
  "Hormonal imbalance — PCOS, thyroid, perimenopause",
  "High-protein dieters who are eating right but not absorbing properly",
  "People dealing with chronic inflammation",
  "Adults looking to prevent future lifestyle diseases through sustainable habits",
  "Adults who want to better understand their health—not just treat symptoms",
  "Busy professionals struggling with stress-related health concerns",
  "Adults focused on healthy ageing and longevity",
];

export default function AboutPage() {
  return (
    <>
      {/* Section 5.1: Page Hero */}
      <section className="relative bg-[#F8F3EB] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[48%] h-full bg-[#E7EFE7] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] items-center gap-12 lg:gap-20">
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-5">Meet your coach</p>
              <h1 className="text-[42px] md:text-[64px] leading-[1] font-semibold text-[#252A26] mb-7">Health became personal before it became my profession.</h1>
              <p className="text-lg leading-[1.7] text-[#3E453F]/70 mb-8">I&apos;m Palasha—an Integrative Nutrition Health Coach who believes the best plan begins by understanding the person living it.</p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#F0B429]" />
                <span className="text-sm font-semibold text-[#C17B5C]">Founder of Step Zero</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[3/2] rounded-[30px] overflow-hidden shadow-[0_30px_70px_rgba(44,44,44,0.14)]">
                <Image src="/images/about-hero-client.jpg" alt="Palasha, founder of Step Zero" fill className="object-cover object-center" preload sizes="(max-width:1024px) 90vw, 680px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.2: The Hook */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-20 items-center">
            <AnimateOnScroll className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(44,44,44,0.10)]">
              <Image src="/images/website/21A.jpg" alt="Palasha practising mindful breathing outdoors" fill className="object-cover" sizes="(max-width:768px) 90vw, 520px" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-5">Where it began</p>
              <h2 className="text-3xl md:text-[44px] leading-[1.1] font-semibold text-[#252A26] mb-7">I didn&apos;t find my way to health coaching through a textbook.</h2>
              <p className="text-xl md:text-2xl font-semibold text-[#C17B5C] leading-[1.5] mb-7">I found it through a hospital bed, a missing organ, and advice that completely missed the point.</p>
              <div className="space-y-5 text-base text-[#3E453F]/72 leading-[1.8]">
                <p>Nobody prepares you for what happens after the surgery.</p>
                <p>After my gallbladder was removed, I did what most people do—I followed the doctor&apos;s advice, ate “carefully,” and waited to feel normal again. But normal didn&apos;t come. My digestion was unpredictable. My energy was inconsistent. And every time I asked for help, I got the same generic response: “This is expected. Give it time. Avoid fatty foods.”</p>
                <p>That was it. No explanation of what my body was actually going through. No guidance on how to rebuild. No acknowledgment that my situation was specific.</p>
                <p className="font-semibold text-[#252A26]">I was told I was fine. I clearly wasn&apos;t.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 5.3: The Pattern */}
      <section className="bg-[#F4EEE5] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimateOnScroll className="relative md:order-2" delay={120}>
              <div className="relative w-full max-w-[500px] aspect-[2/3] rounded-t-[220px] rounded-b-[28px] overflow-hidden">
                <Image src="/images/website/11.jpg" alt="Palasha, Integrative Health Coach" fill className="object-cover object-top" sizes="(max-width:768px) 90vw, 500px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="md:order-1">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C17B5C] font-semibold mb-5">The turning point</p>
              <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26] mb-7 leading-tight">Different chapter. Same missing context.</h2>
              <div className="space-y-5 text-base md:text-lg text-[#3E453F]/72 leading-[1.75]">
                <p>Then came my second pregnancy and postpartum recovery. Different situation, same pattern.</p>
                <p>A body going through something significant. A system handing out generic protocols. And me—someone who by this point had studied nutrition formally, held a certification from IIN, and was deep into understanding integrative health—still struggling to find guidance that actually fit my life.</p>
                <p>That&apos;s when something clicked. It wasn&apos;t that the advice was wrong. It was that it was built for the average person in an average situation. And most of us aren&apos;t that.</p>
                <p className="font-semibold text-[#252A26]">That experience changed the way I looked at health forever. I realised that most people don&apos;t need more information—they need someone to connect the dots. That&apos;s what Step Zero is built to do: simplify the science, explain the “why” behind symptoms, and help people build lasting health through practical, sustainable change.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 5.4: The Turn */}
      <section className="bg-[#6F9274] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/15" />
        <div className="absolute right-[7%] bottom-10 hidden md:block pointer-events-none select-none">
          <div className="absolute inset-0 scale-125 rounded-full bg-[#F0B429]/10 blur-3xl" />
          <Image
            src="/images/brand/step-zero-transparent.png"
            alt=""
            width={300}
            height={236}
            className="relative w-[220px] lg:w-[270px] h-auto opacity-[0.16] mix-blend-multiply"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start">
            <AnimateOnScroll>
              <span className="block text-[72px] leading-none text-[#F0B429] font-semibold mb-2">“</span>
              <p className="text-2xl md:text-[36px] font-semibold text-white leading-[1.35]">Most people don&apos;t fail at health because they lack willpower or information. They fail because they started at Step One when they needed to start at Step Zero.</p>
            </AnimateOnScroll>
            <AnimateOnScroll className="space-y-5 text-base md:text-lg text-white/75 leading-[1.8]" delay={120}>
              <p>I&apos;d spent 12 years in brand marketing before any of this—understanding how people think, what they actually need versus what they say they need, and how to cut through noise to find what matters.</p>
              <p>When I brought that lens to health—combined with my own recovery, formal training, and yoga practice—I started seeing something clearly.</p>
              <p className="text-white font-semibold">Nobody was building the foundation. So I did.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 5.5: Credentials Block */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            <AnimateOnScroll className="relative aspect-[2/3] max-w-[430px] w-full rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(44,44,44,0.12)]">
              <Image src="/images/website/18.jpg" alt="Palasha holding her integrative nutrition certificate" fill className="object-cover" sizes="(max-width:1024px) 90vw, 430px" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-5">Credentials and context</p>
              <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26] mb-8">The coach behind the work</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((item, index) => (
                  <div key={item} className="rounded-2xl bg-[#F8F3EB] p-5 border border-[#252A26]/[0.05]">
                    <p className="text-xs font-bold text-[#F0B429] mb-2">0{index + 1}</p>
                    <p className="text-sm leading-relaxed text-[#252A26]/72">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#3E453F]/65 mt-6 leading-relaxed">That last point matters as much as the rest. Credentials tell you what I know. My experience tells you I understand what you&apos;re going through—not theoretically, but from the inside.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 5.6: Who I Work With */}
      <section className="bg-[#E7EFE7] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="mb-12 md:mb-14">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-4">Who I work with</p>
            <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26] max-w-2xl">For people who want to understand what their body is asking for.</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((item, index) => (
              <AnimateOnScroll key={item} delay={(index % 3) * 70}>
                <div className="bg-white/80 rounded-[20px] p-5 min-h-32 flex flex-col justify-between border border-white">
                  <span className="w-8 h-8 rounded-full bg-[#F0B429] text-[#252A26] text-xs font-bold flex items-center justify-center">{index + 1}</span>
                  <p className="text-sm font-semibold text-[#252A26] mt-5 leading-snug">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.7: Invitation + CTA */}
      <section className="bg-[#C17B5C] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-white/60 font-semibold mb-4">Your next step</p>
              <h2 className="text-3xl md:text-[46px] font-semibold text-white mb-5">This is where the work begins.</h2>
              <p className="text-base text-white/75 leading-[1.7] max-w-2xl">This isn&apos;t about another plan. It&apos;s about finding your actual starting point—and building from there. If that&apos;s what you&apos;re looking for, I&apos;d love to be part of it.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-guide" className="inline-flex justify-center rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-white transition-colors">Get the free guide</Link>
              <Link href="/work-with-me" className="inline-flex justify-center rounded-full border border-white/50 text-white text-sm font-bold px-7 py-4 hover:bg-white hover:text-[#252A26] transition-colors">Work with me</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
