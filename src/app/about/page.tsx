import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const credentials = [
  "Integrative Nutrition Health Coach — IIN, New York",
  "Certified Nutritionist — IGMPI",
  "Functional Medicine Certification — AIC",
  "RYT 200 Yoga Teacher — Sivananda tradition",
  "12+ years in Brand Strategy & Consumer Behaviour",
  "Lived experience of post-surgery and postpartum recovery",
];

const audiences = [
  "Post-surgery recovery",
  "Postpartum nutrition and energy",
  "Chronic stress and gut issues",
  "Stubborn weight",
  "Sleep issues and low energy",
  "Hormonal imbalance",
  "Chronic inflammation",
  "Healthy ageing and prevention",
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
                <Image src="/images/website/7a.jpg" alt="Palasha, founder of Step Zero" fill className="object-cover" preload sizes="(max-width:1024px) 90vw, 680px" />
              </div>
              <div className="absolute -bottom-5 left-5 md:-left-7 bg-[#252A26] text-white rounded-2xl p-5 shadow-xl max-w-[220px]">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#F0B429] font-semibold mb-2">My approach</p>
                <p className="text-sm font-semibold leading-snug">Evidence, context, and a plan that fits real life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.2: The Hook */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-16 items-start">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold pt-2">Where it began</p>
            <div>
              <h2 className="text-3xl md:text-[44px] leading-[1.1] font-semibold text-[#252A26] mb-7">I didn&apos;t find my way to health coaching through a textbook.</h2>
              <p className="text-lg text-[#3E453F]/72 leading-[1.8]">After my gallbladder was removed, I followed the advice and waited to feel normal. But my digestion and energy stayed unpredictable, while every answer remained generic.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 5.3: The Pattern */}
      <section className="bg-[#F4EEE5] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimateOnScroll className="relative">
              <div className="relative w-full max-w-[500px] aspect-[2/3] rounded-t-[220px] rounded-b-[28px] overflow-hidden">
                <Image src="/images/website/11.jpg" alt="Palasha, Integrative Health Coach" fill className="object-cover object-top" sizes="(max-width:768px) 90vw, 500px" />
              </div>
              <div className="absolute bottom-5 right-0 rounded-2xl bg-[#F0B429] px-5 py-4 shadow-xl">
                <p className="text-2xl font-semibold text-[#252A26]">The pattern</p>
                <p className="text-xs text-[#252A26]/65 mt-1">Generic advice. Individual body.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C17B5C] font-semibold mb-5">The turning point</p>
              <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26] mb-7 leading-tight">Different chapter. Same missing context.</h2>
              <div className="space-y-5 text-base md:text-lg text-[#3E453F]/72 leading-[1.75]">
                <p>My second pregnancy and postpartum recovery revealed the same pattern: significant change met with one-size-fits-all advice.</p>
                <p>The advice was not necessarily wrong; it simply was not built around my body, history, or life.</p>
                <p className="font-semibold text-[#252A26]">That experience shaped Step Zero: connect the dots, explain the “why,” and turn good science into sustainable change.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 5.4: The Turn */}
      <section className="bg-[#6F9274] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/15" />
        <div className="relative max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll>
            <span className="block text-[72px] leading-none text-[#F0B429] font-semibold mb-2">“</span>
            <p className="text-2xl md:text-[38px] font-semibold text-white leading-[1.35]">Most people don&apos;t fail at health because they lack willpower. They started at Step One when they needed to start at Step Zero.</p>
          </AnimateOnScroll>
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
              <p className="text-sm text-[#3E453F]/65 mt-6 leading-relaxed">Credentials show what I know. Experience helps me understand what you are going through from the inside.</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((item, index) => (
              <AnimateOnScroll key={item} delay={(index % 4) * 70}>
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
              <p className="text-base text-white/75 leading-[1.7] max-w-2xl">Find your real starting point, then build from there with a plan that fits your life.</p>
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
