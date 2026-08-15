import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrative Health Coaching | Step Zero with Palasha",
  description: "Personalised integrative health coaching for gut health, energy, hormones and sustainable habits, built around the foundation your body needs.",
};

const approachCards = [
  {
    num: "01",
    title: "We Simplify the Science",
    body: "We break down complex health concepts into practical, easy-to-understand guidance so you know exactly what’s happening inside your body.",
    color: "bg-[#F1E6D7]",
  },
  {
    num: "02",
    title: "Science meets experience",
    body: "Integrative nutrition and functional medicine, grounded in lived experience.",
    color: "bg-[#E6EEE6]",
  },
  {
    num: "03",
    title: "Sustainable over dramatic",
    body: "Real food and realistic changes—without cleanses or rigid rules.",
    color: "bg-[#F3E8E2]",
  },
];

const credentials = [
  "🌍  Internationally Certified — IIN, New York",
  "📋  Certified Nutritionist — IGMPI",
  "🔬  Functional Medicine Certified — AIC",
  "🧘  RYT 200 Yoga Teacher — Sivananda",
  "📊  12+ Years Brand Strategy",
  "💛  Post-cholecystectomy & Postpartum Experience",
];

const steps = [
  { num: "01", title: "Start the Conversation", body: "Send a WhatsApp message and tell us what’s going on." },
  { num: "02", title: "Book a Clarity Call", body: "A 30 min focused session to understand you and what you are dealing with better and deeper." },
  { num: "03", title: "Begin the Work", body: "Start your programme." },
];

const testimonials = [
  { quote: "Palasha explained what was happening in my body and gave me a plan that fit my life.", name: "Ananya", desc: "Post-surgery recovery · Mumbai" },
  { quote: "The clarity call changed how I think about my health. I finally understand where to begin.", name: "Priya", desc: "Working professional · Bangalore" },
  { quote: "My digestion, energy, and sleep have all improved. I understand my body now.", name: "Meera", desc: "Postpartum recovery · Delhi" },
];

const instagramPosts = [
  { src: "/images/instagram/post-01.jpg", href: "https://www.instagram.com/p/DW73v6vCB-O/", alt: "Palasha sharing her experience after gallbladder removal", type: "Carousel" },
  { src: "/images/instagram/post-02.jpg", href: "https://www.instagram.com/p/Dbm6kb_GQQv/", alt: "Everyone starts with a diet. I start with Step Zero.", type: "Carousel" },
  { src: "/images/instagram/post-03.jpg", href: "https://www.instagram.com/p/Dbf9U6tgYyw/", alt: "Palasha explaining the Step Zero approach to gut health and metabolism", type: "Post" },
  { src: "/images/instagram/post-04.jpg", href: "https://www.instagram.com/p/Da-C2pig0Cx/", alt: "Step Zero Striders walking community invitation", type: "Post" },
  { src: "/images/instagram/post-05.jpg", href: "https://www.instagram.com/p/Da9-1j8gBja/", alt: "Your cravings are trying to tell you something", type: "Carousel" },
  { src: "/images/instagram/post-06.jpg", href: "https://www.instagram.com/p/Da5N_RGAEz4/", alt: "The four Ps of healing after gallbladder removal", type: "Carousel" },
  { src: "/images/instagram/post-07.jpg", href: "https://www.instagram.com/p/Da2SEsLAPCD/", alt: "Five common symptoms after gallbladder surgery", type: "Carousel" },
  { src: "/images/instagram/post-08.jpg", href: "https://www.instagram.com/reel/Da0L08cAbvv/", alt: "Palasha walking by the sea", type: "Reel" },
];

const Arrow = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
    <path d="M3 8.5H14M14 8.5L9.5 4M14 8.5L9.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-[#F8F3EB] pt-24 pb-20 md:pt-32 md:pb-24 lg:min-h-screen lg:flex lg:items-center">
        <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_15%_15%,rgba(240,180,41,0.12),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(122,158,126,0.16),transparent_30%)]" />
        <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-12 lg:gap-20">
            <div className="order-2 lg:order-1 max-w-[620px]">
              <div className="anim-fade-left inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-6">
                <span className="w-8 h-px bg-[#F0B429]" />
                Integrative Health Coaching
              </div>
              <h1 className="anim-fade-left anim-delay-100 text-[39px] sm:text-[52px] lg:text-[66px] leading-[0.98] font-semibold text-[#252A26] mb-7">
                Understand Your Body. <span className="text-[#6F9274]">Transform Your Health.</span>
              </h1>
              <p className="anim-fade-left anim-delay-200 text-[17px] md:text-lg text-[#3E453F]/75 leading-[1.7] max-w-[570px] mb-8">
                Evidence-based nutrition, gut health and lifestyle medicine to help you uncover the root causes behind symptoms, build sustainable habits and create lasting health.
              </p>
              <div className="anim-fade-left anim-delay-300 flex flex-col sm:flex-row sm:items-center gap-4">
                <a href="https://wa.aisensy.com/aabkw9" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#F0B429] text-[#252A26] text-[15px] font-bold px-7 py-4 hover:bg-[#dfa51d] transition-colors shadow-[0_12px_30px_rgba(240,180,41,0.2)]">
                  Connect with me <Arrow />
                </a>
                <Link href="/about" className="inline-flex items-center justify-center text-sm font-semibold text-[#607E64] px-5 py-3 hover:text-[#252A26] transition-colors">
                  Meet Palasha
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative w-full max-w-[680px] mx-auto lg:mr-0">
              <div className="anim-fade-right anim-delay-100 relative ml-auto w-full aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(44,44,44,0.13)]">
                <Image src="/images/home-hero-client.jpg" alt="Palasha, Integrative Health Coach and founder of Step Zero" fill className="object-cover object-top" preload sizes="(max-width: 1024px) 88vw, 600px" />
              </div>
            </div>
          </div>

          <div className="anim-fade-up anim-delay-400 mt-12 pt-6 border-t border-[#252A26]/10 overflow-hidden" aria-label="Palasha's credentials">
            <div className="credentials-track">
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0 items-center" aria-hidden={set === 1 ? true : undefined}>
                  {credentials.map((credential) => (
                    <div key={`${set}-${credential}`} className="flex shrink-0 items-center gap-5 px-5 md:px-7">
                      <p className="text-sm md:text-[15px] font-semibold text-[#252A26] whitespace-nowrap">{credential}</p>
                      <span className="size-1.5 rounded-full bg-[#F0B429]" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM BLOCK */}
      <section className="bg-[#FFFDFC] py-20 md:py-28 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 items-center gap-14 lg:gap-24">
            <AnimateOnScroll className="max-w-[590px] order-2" delay={120}>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-5">Does this sound familiar?</p>
              <h2 className="text-3xl md:text-[44px] leading-[1.08] font-semibold text-[#252A26] mb-7">You&apos;re doing the right things. Something still feels off.</h2>
              <div className="space-y-5 text-base text-[#3E453F]/75 leading-[1.75]">
                <p>Unpredictable digestion, afternoon crashes, stubborn weight, and poor sleep are often connected—not random.</p>
                <p>Before another diet or supplement, you need to understand the foundation those solutions depend on.</p>
              </div>
              <div className="mt-9 pl-5 border-l-2 border-[#F0B429]">
                <p className="text-lg font-semibold text-[#C17B5C]">That&apos;s the step most health advice misses.</p>
                <p className="text-2xl font-semibold text-[#252A26] mt-1">That&apos;s Step Zero.</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="relative min-h-[470px] sm:min-h-[560px] order-1">
              <div className="absolute left-0 top-0 w-[82%] aspect-[3/2] overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(44,44,44,0.12)]">
                <Image src="/images/website/7a.jpg" alt="Palasha in a calm wellness setting" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 560px" />
              </div>
              <div className="absolute right-0 bottom-0 w-[46%] aspect-[7/10] overflow-hidden rounded-[24px] border-[8px] border-[#FFFDFC] shadow-[0_20px_45px_rgba(44,44,44,0.15)]">
                <Image src="/images/website/10.jpg" alt="Palasha with a nourishing breakfast" fill className="object-cover" sizes="(max-width: 1024px) 42vw, 280px" />
              </div>
              <div className="absolute left-[8%] bottom-[8%] bg-[#6F9274] text-white rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-3xl font-semibold leading-none">01</p>
                <p className="text-[10px] uppercase tracking-[0.14em] mt-2 text-white/75">Find the real start</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2B: FOUNDATION */}
      <section className="relative bg-[#E7EFE7] py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-[#7A9E7E]/20" />
        <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-[#7A9E7E]/20" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-20 items-start">
            <AnimateOnScroll>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-5">The foundation</p>
              <p className="text-[88px] md:text-[132px] font-semibold leading-[0.75] text-[#7A9E7E]/25">00</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="text-3xl md:text-[46px] font-semibold text-[#252A26] mb-8">What is Step Zero?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/75 rounded-[22px] p-6 md:p-8 border border-white">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#C17B5C] mb-4">Most advice starts here</p>
                  <p className="text-lg leading-relaxed text-[#252A26]/75">Most health advice starts with a solution. A diet. A supplement. A workout plan.</p>
                </div>
                <div className="bg-[#252A26] rounded-[22px] p-6 md:p-8 shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#F0B429] mb-4">We start earlier</p>
                  <p className="text-lg leading-relaxed text-white/80">We believe health starts earlier. It starts with understanding your symptoms, digestion, lifestyle, and body.</p>
                </div>
              </div>
              <p className="mt-7 text-base font-semibold text-[#252A26]">Because when you understand the foundation, every other step becomes easier. That&apos;s why we&apos;re called Step Zero.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY MODERN HEALTH FEELS CONFUSING */}
      <section className="bg-[#6F9274] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] items-center gap-12 md:gap-20">
            <AnimateOnScroll className="relative md:order-2" delay={140}>
              <div className="relative w-full aspect-[2/3] max-w-[470px] mx-auto overflow-hidden rounded-t-[220px] rounded-b-[28px] shadow-[0_30px_70px_rgba(20,30,22,0.2)]">
                <Image src="/images/website/13a.jpg" alt="Palasha, taking a whole-person approach to health" fill className="object-cover" sizes="(max-width: 768px) 90vw, 470px" />
              </div>
              <div className="absolute -bottom-5 right-0 md:-right-5 bg-[#F0B429] text-[#252A26] rounded-2xl p-5 max-w-[210px] shadow-xl">
                <p className="text-sm font-bold leading-snug">Your body works as one connected system.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="md:order-1">
              <p className="text-[11px] tracking-[0.18em] uppercase text-white/65 font-semibold mb-5">The whole picture</p>
              <h2 className="text-3xl md:text-[48px] leading-[1.08] font-semibold text-white mb-7">Why modern health feels so confusing</h2>
              <div className="space-y-5 text-base md:text-lg leading-[1.8] text-white/80">
                <p>Today we have access to more health information than ever before. Yet many people still struggle with bloating, fatigue, poor digestion, inflammation and stubborn weight. Not because they lack motivation, but because health advice is often fragmented.</p>
                <p>Nutrition is discussed separately from sleep. Gut health is discussed separately from stress. Exercise is discussed separately from recovery.</p>
                <p className="font-semibold text-white">At Step Zero, we look at the whole picture because your body works as one connected system—not as isolated symptoms.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: THREE PILLARS */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <AnimateOnScroll className="grid md:grid-cols-2 gap-6 items-end mb-14 md:mb-16">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-4">Our approach</p>
              <h2 className="text-3xl md:text-[46px] leading-tight font-semibold text-[#252A26]">The Step Zero difference</h2>
            </div>
            <p className="md:justify-self-end max-w-md text-base leading-[1.7] text-[#3E453F]/65">Thoughtful guidance should feel clear, human, and possible to live with.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {approachCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 100}>
                <article className={`${card.color} rounded-[26px] p-7 md:p-9 h-full min-h-[310px] flex flex-col transition-transform duration-300 hover:-translate-y-1`}>
                  <p className="text-[54px] font-semibold leading-none text-[#252A26]/12">{card.num}</p>
                  <div className="mt-auto pt-12">
                    <h3 className="text-[22px] leading-tight font-semibold text-[#252A26] mb-4">{card.title}</h3>
                    <p className="text-[15px] text-[#3E453F]/70 leading-[1.7]">{card.body}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="bg-[#252A26] py-20 md:py-28 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] shadow-2xl">
                <Image src="/images/website/4.jpg" alt="A focused health coaching session with Palasha" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 620px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/45 to-transparent" />
              </div>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#F0B429] font-semibold mb-4">Getting started</p>
                <h2 className="text-3xl md:text-[46px] font-semibold text-white mb-10">Simpler than you think</h2>
              </AnimateOnScroll>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <AnimateOnScroll key={step.num} delay={index * 90}>
                    <div className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                      <span className="w-11 h-11 rounded-full bg-[#F0B429] flex items-center justify-center text-sm font-bold text-[#252A26]">{step.num}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <AnimateOnScroll delay={220}>
                <a href="https://wa.aisensy.com/aabkw9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 text-[#F0B429] text-sm font-bold hover:text-white transition-colors">Send a WhatsApp message <Arrow /></a>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="bg-[#F4EEE5] py-20 md:py-28">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[1.28fr_0.72fr] gap-10 lg:gap-16 items-stretch">
            <AnimateOnScroll className="relative min-h-[520px] overflow-hidden rounded-[28px] lg:order-2">
              <Image src="/images/website/18.jpg" alt="Palasha, certified integrative nutrition health coach" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 440px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/70 via-transparent to-transparent" />
              <div className="absolute left-7 right-7 bottom-7 text-white">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#F0B429] font-semibold mb-2">Qualified and human</p>
                <p className="text-xl font-semibold leading-snug">Evidence-led guidance, delivered with empathy.</p>
              </div>
            </AnimateOnScroll>
            <div className="lg:order-1">
              <AnimateOnScroll className="mb-9">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-4">Client stories</p>
                <h2 className="text-3xl md:text-[46px] font-semibold text-[#252A26]">What people say</h2>
              </AnimateOnScroll>
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <AnimateOnScroll key={t.name} delay={i * 90}>
                    <blockquote className="bg-white rounded-[22px] p-6 md:p-7 shadow-[0_10px_30px_rgba(44,44,44,0.05)] border border-white">
                      <div className="flex items-center gap-1 text-[#F0B429] text-xs mb-3" aria-label="5 out of 5 stars">★★★★★</div>
                      <p className="text-base md:text-lg text-[#252A26]/80 leading-[1.65] mb-5">“{t.quote}”</p>
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-[#E7EFE7] flex items-center justify-center text-xs font-bold text-[#607E64]">{t.name[0]}</span>
                        <div>
                          <p className="text-sm font-bold text-[#252A26]">{t.name}</p>
                          <p className="text-xs text-[#3E453F]/50 mt-0.5">{t.desc}</p>
                        </div>
                      </div>
                    </blockquote>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAD MAGNET */}
      <section className="bg-[#C17B5C] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -left-24 -bottom-32 w-96 h-96 rounded-full border border-white/15" />
        <div className="relative w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-[1fr_0.8fr] items-center gap-10 md:gap-16 bg-[#B56E50] rounded-[30px] p-7 md:p-12 border border-white/10 shadow-[0_30px_70px_rgba(80,40,25,0.18)]">
            <AnimateOnScroll>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/60 font-semibold mb-4">Your first step is free</p>
              <h2 className="text-3xl md:text-[44px] font-semibold text-white mb-5 leading-tight">Not ready to book yet? Start here.</h2>
              <p className="text-base text-white/75 leading-[1.75] max-w-xl mb-8">Send a quick message and tell us what&apos;s going on. No forms, no pressure — just a real conversation about where to start.</p>
              <a href="https://wa.aisensy.com/aabkw9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-white transition-colors">Connect with me <Arrow /></a>
            </AnimateOnScroll>
            <AnimateOnScroll className="w-full" delay={130}>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-[24px] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image src="/images/website/1.jpg" alt="Palasha with the Step Zero health journal" fill className="object-cover" sizes="(max-width: 768px) 90vw, 440px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xl font-semibold">Say Hello</p>
                  <p className="text-xs text-white/70">Start on WhatsApp</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 8: INSTAGRAM */}
      <section className="bg-[#FFFDFC] py-20 md:py-28 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 mb-10 md:mb-14">
          <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#7A9E7E] font-semibold mb-4">Daily insights</p>
              <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26]">Come find me on Instagram</h2>
              <p className="text-sm text-[#3E453F]/60 mt-3">Gut health, real food, and useful science.</p>
            </div>
            <a href="https://www.instagram.com/stepzero_with_palasha/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#607E64] hover:text-[#C17B5C] transition-colors font-semibold text-sm">@stepzero_with_palasha <Arrow /></a>
          </AnimateOnScroll>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-12 md:w-28 bg-gradient-to-r from-[#FFFDFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-28 bg-gradient-to-l from-[#FFFDFC] to-transparent z-10 pointer-events-none" />
          <div className="marquee-track" aria-label="Recent posts from Step Zero on Instagram">
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0 gap-4 md:gap-5 pr-4 md:pr-5" aria-hidden={set === 1 ? true : undefined}>
                {instagramPosts.map((post) => (
                  <a
                    key={`${set}-${post.src}`}
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={set === 1 ? -1 : undefined}
                    aria-label={`View ${post.type.toLowerCase()} on Instagram: ${post.alt}`}
                    className="relative shrink-0 size-[248px] sm:size-[280px] md:size-[330px] rounded-[24px] overflow-hidden group bg-[#E7EFE7] border border-[#252A26]/8 shadow-[0_16px_40px_rgba(37,42,38,0.10)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#607E64]"
                  >
                    <Image src={post.src} alt={set === 0 ? post.alt : ""} fill className="object-contain transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width:640px) 248px, (max-width:768px) 280px, 330px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252A26]/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/92 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#252A26] shadow-sm">{post.type}</span>
                    <span className="absolute right-3 bottom-3 size-10 rounded-full bg-[#F0B429] text-[#252A26] grid place-items-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all shadow-lg"><Arrow /></span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
