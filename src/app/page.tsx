import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const instagramImages = [
  "/images/website/4.jpg",
  "/images/website/10.jpg",
  "/images/website/7a.jpg",
  "/images/website/13a.jpg",
  "/images/website/1.jpg",
  "/images/website/18.jpg",
];

export default function Home() {
  return (
    <>
      {/* ===================================================================
          SECTION 1: HERO — Full-width, immersive, personal
          =================================================================== */}
      <section className="relative min-h-[100dvh] md:min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2] via-[#FAF7F2] to-[#F5EDE1]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F0B429]/[0.04] rounded-full blur-[100px]" />
          <div className="absolute bottom-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#7A9E7E]/[0.05] rounded-full blur-[80px]" />
        </div>

        <div className="relative w-full px-6 md:px-12 lg:px-16 xl:px-24 pt-20 pb-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1400px] mx-auto">
            {/* Left: Copy */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <p className="anim-fade-left text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-5">
                Integrative Health Coaching
              </p>
              <h1 className="anim-fade-left anim-delay-100 font-[family-name:var(--font-playfair)] text-[28px] md:text-[48px] lg:text-[56px] leading-[1.08] font-bold text-[#2C2C2C] mb-6">
                Understand Your Body. Transform Your Health.
              </h1>
              <p className="anim-fade-left anim-delay-200 text-base md:text-lg text-[#2C2C2C]/70 leading-[1.7] mb-8 max-w-xl">
                Evidence-based nutrition, gut health and lifestyle medicine to
                help you uncover the root causes behind symptoms, build
                sustainable habits and create lasting health.
              </p>
              <p className="anim-fade-left anim-delay-300 text-sm text-[#2C2C2C]/50 leading-[1.7] mb-10 max-w-lg">
                I&apos;m Palasha, founder of Step Zero. After my own
                gallbladder removal, postpartum recovery, and years of
                figuring things out, I help people find the real starting
                point for their health.
              </p>
              <div className="anim-fade-left anim-delay-400">
                <Link
                  href="/free-guide"
                  className="inline-flex items-center gap-2 bg-[#F0B429] text-white text-[15px] font-bold px-8 py-3.5 rounded-lg hover:bg-[#d9a123] transition-colors shadow-sm"
                >
                  Download the Free Gut Health Guide
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="anim-fade-left anim-delay-500 mt-14 pt-8 border-t border-[#2C2C2C]/[0.06]">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#2C2C2C]/30 mb-3">
                  Credentials &amp; approach
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  {["IIN", "IGMPI", "AIC", "Sivananda", "Evidence-Based Health Education"].map((org) => (
                    <span key={org} className="text-sm font-semibold text-[#2C2C2C]/20 tracking-wide">{org}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image — aspect-[3/4] matches IMG_1000x1334 (1000:1334 ≈ 3:4) */}
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="anim-fade-right anim-delay-200 relative w-full max-w-[450px] lg:max-w-[500px] aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-[#2C2C2C]/[0.04]">
                <Image
                  src="/images/website/2a.jpg"
                  alt="Palasha, Integrative Health Coach and founder of Step Zero"
                  fill
                  className="object-cover object-top"
                  preload
                  sizes="(max-width: 1024px) 90vw, 500px"
                />
                {/* fade-to-background at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF7F2]/70 z-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-8 bg-[#2C2C2C]/20" />
        </div>
      </section>

      {/* ===================================================================
          SECTION 2: PROBLEM BLOCK
          =================================================================== */}
      <section className="bg-[#FAF7F2] py-20 md:py-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#F0B429]/40" />

        <div className="max-w-[680px] mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <p className="text-sm text-[#7A9E7E] tracking-wide mb-8 font-medium">
              Let me guess.
            </p>

            <div className="space-y-5 text-base md:text-[16px] text-[#2C2C2C]/80 leading-[1.8]">
              <p>You eat relatively well. You&apos;re not completely sedentary.
                 You&apos;ve googled your symptoms, tried a few things, maybe even
                 seen a doctor who told you everything looks normal.</p>
              <p className="font-medium text-[#2C2C2C]">But something still feels off.</p>
              <p>Your digestion is unpredictable. Your energy crashes by afternoon.
                 The weight isn&apos;t moving despite your best efforts. You wake up
                 tired. Your gut feels like it has its own agenda.</p>
              <p className="text-[#2C2C2C]/60 italic">Here&apos;s what nobody tells you: this isn&apos;t random. And
                 it&apos;s not in your head.</p>
              <p>For most people living with these symptoms, the problem isn&apos;t
                 the food they&apos;re eating. It&apos;s that they&apos;ve skipped
                 the foundation entirely — and gone straight to solutions
                 that can&apos;t work without it.</p>
            </div>

            <div className="mt-12 pt-10 border-t border-[#2C2C2C]/[0.06]">
              <p className="font-[family-name:var(--font-playfair)] text-xl md:text-[24px] italic text-[#F0B429] text-center leading-relaxed">
                That&apos;s the step most health advice misses.
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-[32px] italic text-[#F0B429] text-center mt-3 font-semibold">
                That&apos;s Step Zero.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-[#EEF3EE] py-20 md:py-28">
        <div className="max-w-[760px] mx-auto px-6 md:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-3">The foundation</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold text-[#2C2C2C] mb-10">What is Step Zero?</h2>
            <div className="space-y-6 text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8]">
              <p>Most health advice starts with a solution.</p>
              <p className="font-[family-name:var(--font-playfair)] text-xl text-[#F0B429]">A diet. A supplement. A workout plan.</p>
              <p>We believe health starts earlier.</p>
              <p className="font-semibold text-[#2C2C2C]">It starts with understanding.</p>
              <p>Understanding your symptoms. Understanding your digestion.<br />Understanding your lifestyle. Understanding your body.</p>
              <p>Because when you understand the foundation, every other step becomes easier.</p>
              <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl italic text-[#F0B429]">That&apos;s why we&apos;re called Step Zero.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: WHY MODERN HEALTH FEELS CONFUSING
          =================================================================== */}
      <section className="bg-[#7A9E7E] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        </div>

        <div className="relative w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <AnimateOnScroll className="md:w-[42%]">
              <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto rounded-2xl overflow-hidden">
                <Image src="/images/website/13a.jpg" alt="A calm, whole-person approach to health" fill className="object-cover" sizes="(max-width: 768px) 90vw, 420px" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="md:w-[58%]" delay={150}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold mb-8">Why Modern Health Feels So Confusing</h2>
              <p className="text-base leading-[1.75] mb-5 text-white/95">
                Today we have access to more health information than ever before. Yet many people still struggle with bloating, fatigue, poor digestion, inflammation and stubborn weight.
              </p>
              <p className="text-base leading-[1.75] mb-5 text-white/95">
                Not because they lack motivation. But because health advice is often fragmented.
              </p>
              <p className="text-base leading-[1.75] mb-5 text-white/80">
                Nutrition is discussed separately from sleep. Gut health is discussed separately from stress. Exercise is discussed separately from recovery.
              </p>
              <p className="text-base leading-[1.75] font-medium text-white">At Step Zero, we look at the whole picture because your body works as one connected system—not as isolated symptoms.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 4: THREE PILLARS
          =================================================================== */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-3">Our Approach</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold text-[#2C2C2C]">The Step Zero Difference</h2>
            <div className="w-14 h-px bg-[#F0B429] mx-auto mt-5" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "We Simplify the Science", body: "We break down complex health concepts into practical, easy-to-understand guidance so you know exactly what's happening inside your body." },
              { title: "Science meets experience", body: "Integrative nutrition, functional medicine, and yoga philosophy — combined with the real-world understanding of someone who has lived the journey." },
              { title: "Sustainable over dramatic", body: "No 21-day cleanses. No elimination diets that leave you miserable. Real food, real life, real changes that hold." },
            ].map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 100}>
                <div className="group bg-white rounded-xl p-8 border border-[#2C2C2C]/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 h-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F0B429] mb-6" />
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/65 leading-[1.75]">{card.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 5: HOW IT WORKS
          =================================================================== */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-3">Getting Started</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold text-[#2C2C2C] mb-4">Simpler than you think</h2>
            <div className="w-14 h-px bg-[#F0B429] mx-auto mb-16" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { num: "01", title: "Download the Guide", body: "Start with The Step Zero Gut Reset Guide — five foundational fixes built for the Indian body and lifestyle. Free, practical, and the best place to begin." },
              { num: "02", title: "Book a Clarity Call", body: "A focused 60-minute consultation where we look at your situation and map out where to begin. You leave with a clear action plan — whether you continue or not." },
              { num: "03", title: "Begin the Work", body: "For those ready to go deeper, the Signature Programme is a three-month coaching relationship — personalised to your history, your body, and your life." },
            ].map((step, index) => (
              <AnimateOnScroll key={step.num} delay={index * 120} className="relative">
                <p className="font-[family-name:var(--font-playfair)] text-[64px] font-bold text-[#F0B429]/15 leading-none mb-4">{step.num}</p>
                <h3 className="text-base font-semibold text-[#2C2C2C] mb-2">{step.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-[1.75]">{step.body}</p>
                {index < 2 && <div className="hidden md:block absolute top-8 right-0 w-px h-32 bg-[#2C2C2C]/[0.04]" />}
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <Link href="/free-guide" className="inline-flex items-center gap-2 mt-14 bg-[#F0B429] text-white text-[15px] font-bold px-8 py-3.5 rounded-lg hover:bg-[#d9a123] transition-colors shadow-sm">
              Download the Free Guide
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===================================================================
          SECTION 6: TESTIMONIALS
          =================================================================== */}
      <section className="bg-[#F0F5F0] py-20 md:py-28">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-3">Client Stories</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold text-[#2C2C2C]">What people say</h2>
            <div className="w-14 h-px bg-[#F0B429] mx-auto mt-5" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "I spent years going from doctor to doctor. Palasha was the first person who explained what was actually happening in my body — and gave me a plan that fit my life.", name: "Ananya", desc: "Mumbai, post-surgery recovery" },
              { quote: "The clarity call alone changed how I think about my health. I finally understand why nothing worked before — because I was skipping the foundation.", name: "Priya", desc: "Bangalore, working professional" },
              { quote: "Three months in the programme and my digestion, energy, and sleep have all improved. It's not just about food — it's about understanding your body.", name: "Meera", desc: "Delhi, postpartum recovery" },
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 border-t-2 border-[#F0B429] h-full">
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L9.6 5.6H14.4L10.4 8.6L11.6 12.6L8 10L4.4 12.6L5.6 8.6L1.6 5.6H6.4L8 1Z" fill="#F0B429" fillOpacity="0.6" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[15px] italic text-[#2C2C2C]/75 leading-[1.8] mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F0B429]/10 flex items-center justify-center">
                      <span className="text-[#F0B429] text-xs font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2C2C2C]">{t.name}</p>
                      <p className="text-xs text-[#2C2C2C]/40">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 7: LEAD MAGNET
          =================================================================== */}
      <section className="bg-[#7A9E7E] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full" />
        </div>

        <div className="relative w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <AnimateOnScroll className="md:w-[60%]">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[34px] font-bold text-white mb-6 leading-snug">Not ready to book yet? Start here.</h2>
              <p className="text-base text-white/85 leading-[1.75] mb-10">
                The Step Zero Gut Reset Guide is free — and it&apos;s the most useful place to begin. Five foundational fixes, rooted in integrative nutrition and functional medicine, written for real Indian lives.
              </p>
              <Link href="/free-guide" className="inline-flex items-center gap-2 bg-[#F0B429] text-white text-[15px] font-bold px-8 py-3.5 rounded-lg hover:bg-[#d9a123] transition-colors shadow-sm">
                Send Me the Free Guide
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </AnimateOnScroll>

            {/* Guide cover — IMG_600x750 is 4:5; shown in a 3:4 container with object-cover */}
            <AnimateOnScroll className="md:w-[40%] flex justify-center" delay={150}>
              <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/guide-cover.png"
                  alt="Step Zero Gut Reset Guide cover"
                  fill
                  className="object-cover object-center"
                  sizes="220px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <p className="text-white font-[family-name:var(--font-playfair)] text-base font-bold drop-shadow">Gut Reset</p>
                  <p className="text-white/80 text-sm drop-shadow">Guide</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 8: INSTAGRAM
          =================================================================== */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-xs tracking-[0.15em] uppercase text-[#7A9E7E] font-medium mb-3">Daily Insights</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-[24px] font-bold text-[#2C2C2C] mb-4">Come find me on Instagram</h2>
            <p className="text-sm text-[#2C2C2C]/50 max-w-md mx-auto leading-[1.7] mb-10">Gut health insights, real food ideas, and the science behind why your body does what it does.</p>
          </AnimateOnScroll>

          {/* Instagram grid — square crop all images with hover scale */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-3xl mx-auto">
            {instagramImages.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 150px"
                />
                <div className="absolute inset-0 bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <a href="https://instagram.com/stepzero_with_palashaa" target="_blank" rel="noopener noreferrer" className="inline-block mt-10 text-[#F0B429]/80 hover:text-[#F0B429] transition-colors font-medium text-sm">
            @stepzero_with_palashaa
          </a>
        </div>
      </section>
    </>
  );
}
