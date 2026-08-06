import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const programmeIncludes = [
  "Deep-dive intake assessment",
  "Personalised nutrition protocol — meal framework, food sequencing, and supplement guidance",
  "Gut health reset plan specific to your history",
  "Bi-weekly 1:1 coaching calls (video)",
  "WhatsApp support between sessions",
  "Customised meal plan framework — flexible, not rigid",
  "Progress tracking and protocol updates every four weeks",
  "Closing session with a long-term maintenance plan",
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Section 6.1: Page Headline + Intro */}
      <section className="bg-[#F8F3EB] pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-12 lg:gap-20">
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#607E64] font-semibold mb-5">Work with me</p>
              <h1 className="text-[42px] md:text-[64px] leading-[1] font-semibold text-[#252A26] mb-7">This is where the work begins.</h1>
              <p className="text-lg text-[#3E453F]/70 leading-[1.75] mb-5">Not with a meal plan. Not with a supplement protocol. With a real conversation about what&apos;s actually going on—and a plan built entirely around you.</p>
              <p className="text-base text-[#3E453F]/65 leading-[1.75] mb-8">At Step Zero, every offering is built on one principle: your body is not a problem to be solved with a generic solution. Everything here is personalised, evidence-based, and designed to create lasting change—not just short-term results.</p>
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-[#dfa51d] transition-colors shadow-[0_12px_30px_rgba(240,180,41,.2)]">Find your starting point →</Link>
            </div>
            <div className="order-1 lg:order-2 relative min-h-[430px] sm:min-h-[560px]">
              <div className="absolute right-0 top-0 w-[82%] aspect-[3/2] rounded-[28px] overflow-hidden shadow-[0_30px_70px_rgba(44,44,44,.13)]">
                <Image src="/images/website/4.jpg" alt="Palasha preparing a personalised coaching plan" fill className="object-cover" preload sizes="(max-width:1024px) 82vw, 600px" />
              </div>
              <div className="absolute left-0 bottom-0 w-[45%] aspect-[2/3] rounded-[24px] overflow-hidden border-[7px] border-[#F8F3EB] shadow-xl">
                <Image src="/images/website/13a.jpg" alt="Palasha, Integrative Health Coach" fill className="object-cover" sizes="(max-width:1024px) 45vw, 260px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6.2: Signature Programme Card */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="rounded-[30px] bg-[#252A26] text-white p-7 md:p-12 lg:p-14 shadow-[0_30px_70px_rgba(44,44,44,.12)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#F0B429] font-semibold mb-5">Flagship offering</p>
                <h2 className="text-3xl md:text-[44px] font-semibold text-white leading-tight mb-5">1:1 Integrative Health Coaching — 3 Month Immersion</h2>
                <p className="text-xl italic text-[#E7B8A3] mb-2">For people who are ready to go deep and do it properly.</p>
              </div>
              <div>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {programmeIncludes.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <span className="text-xs font-bold text-[#F0B429]">0{index + 1}</span>
                      <p className="text-sm text-white/75 mt-3 leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex justify-center w-full rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-white transition-colors">Apply for the Signature Programme →</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 6.3: Divider */}
      <section className="bg-[#E7EFE7] py-7 overflow-hidden">
        <div className="flex whitespace-nowrap items-center justify-center gap-5 text-[#607E64]">
          <span className="w-2 h-2 rounded-full bg-[#F0B429]" />
          <p className="text-sm md:text-base font-semibold">Not ready for a full programme? Start with a conversation.</p>
          <span className="w-2 h-2 rounded-full bg-[#F0B429]" />
        </div>
      </section>

      {/* Section 6.4: Clarity Call Card */}
      <section className="bg-[#F4EEE5] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 rounded-[30px] overflow-hidden bg-white shadow-[0_25px_60px_rgba(44,44,44,.08)]">
            <AnimateOnScroll className="relative min-h-[420px] md:min-h-full">
              <Image src="/images/website/10.jpg" alt="A one-to-one clarity conversation with Palasha" fill className="object-cover object-top" sizes="(max-width:768px) 90vw, 600px" />
            </AnimateOnScroll>
            <AnimateOnScroll className="p-7 md:p-12 lg:p-14" delay={100}>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#C17B5C] font-semibold mb-5">Start smaller</p>
              <h2 className="text-3xl md:text-[40px] font-semibold text-[#252A26] mb-3">The Clarity Call</h2>
              <p className="text-base font-semibold text-[#607E64] mb-6">Single 60-minute consultation</p>
              <p className="text-base text-[#3E453F]/70 leading-[1.75] mb-8">For people who want expert eyes on their situation before committing to a programme. This is not a sales call. It&apos;s a working session.</p>
              <Link href="/contact" className="inline-flex rounded-full bg-[#6F9274] text-white text-sm font-bold px-7 py-4 hover:bg-[#5f8064] transition-colors">Book a Clarity Call →</Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 6.5: Coming Soon */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#7A9E7E] font-semibold mb-4">Coming soon</p>
              <h2 className="text-3xl md:text-[42px] font-semibold text-[#252A26]">What&apos;s next at Step Zero</h2>
            </div>
            <p className="text-sm text-[#3E453F]/55">Join the waitlist for first access.</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-[24px] bg-[#E7EFE7] p-7 md:p-8">
              <span className="text-xs font-bold text-[#607E64]">01</span>
              <h3 className="text-xl font-semibold text-[#252A26] mt-8 mb-3">The Gut Reset Group Programme</h3>
              <p className="text-sm text-[#3E453F]/65">A six-week, cohort-based programme.</p>
            </div>
            <div className="rounded-[24px] bg-[#F3E8E2] p-7 md:p-8">
              <span className="text-xs font-bold text-[#C17B5C]">02</span>
              <h3 className="text-xl font-semibold text-[#252A26] mt-8 mb-3">Eat Again</h3>
              <p className="text-sm text-[#3E453F]/65">A self-paced post-cholecystectomy nutrition protocol.</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex rounded-full border border-[#607E64] text-[#607E64] text-sm font-bold px-7 py-4 hover:bg-[#607E64] hover:text-white transition-colors">Join the waitlist →</Link>
        </div>
      </section>
    </>
  );
}
