import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Coaching Programmes | Step Zero with Palasha",
  description: "Explore personalised 1, 3, 6 and 12-month Step Zero health coaching programmes, the S.T.E.P. method, Clarity Call and common questions.",
};

const programmes = [
  { name: "The Foundation Month", duration: "1 Month", focus: "Stabilize", line: "Calm the noise. Build your first real habits.", bestFor: "A low-commitment starting point, or a reset for past clients who’ve drifted and want to re-anchor before going deeper." },
  { name: "The Signature Programme", duration: "3 Months", focus: "Stabilize + Transform + Eat", line: "Your full foundation, rebuilt properly.", bestFor: "People ready to go deep and do it properly — this is the existing flagship offering." },
  { name: "The Full Reset", duration: "6 Months", focus: "Complete S.T.E.P. + into Z.E.R.O.", line: "Not a quick fix. A full rebuild.", bestFor: "Hormonal imbalance, chronic gut issues, or long-standing patterns that need more runway than three months gives." },
  { name: "The Optimal You Year", duration: "12 Months", focus: "Full S.T.E.P. → Z.E.R.O.", line: "A year to make Zero your normal.", bestFor: "Long-term lifestyle disease prevention, healthy ageing, or sustained, supported transformation." },
];

const framework = [
  ["S", "Stabilize", "Calm inflammation, regulate blood sugar, and support your nervous system."],
  ["T", "Transform", "Restore gut health, improve digestion, balance hormones, and rebuild your metabolism."],
  ["E", "Eat", "Build a nutrition approach around your body, lifestyle, and goals."],
  ["P", "Perform", "Create lasting habits through movement, sleep, stress management, and accountability."],
];

const destination = [
  ["Z", "Zero Inflammation", "Your body feels lighter, calmer, and more resilient."],
  ["E", "Energized Living", "You wake up with energy instead of exhaustion."],
  ["R", "Resilient Health", "Your gut, metabolism, and hormones start working with you, not against you."],
  ["O", "Optimal You", "You have the tools and habits to keep it that way — for life, not for thirty days."],
];

const faqs = [
  ["What does this actually cost?", "The exact investment depends on your starting point, which we map out on your Clarity Call. Investment varies by programme and by what your body actually needs — that’s part of what we figure out together before you commit to anything."],
  ["How long until I see results?", "Most clients notice a shift in energy, digestion, or sleep within the first 3–4 weeks of the Stabilize phase. Deeper changes build over the full length of your programme."],
  ["Does this replace my doctor?", "No. Step Zero is complementary to medical care, not a replacement for it. Coaching does not create a doctor-patient relationship, and we work alongside your doctor when medical care is needed."],
  ["What happens after my programme ends?", "You leave with a long-term maintenance plan built around what worked for your body. Some clients extend into a longer programme; others continue independently."],
  ["Do I need to be based in India?", "No — coaching happens over video, so you can be anywhere. The nutrition guidance is built around real, wholesome foods and practical lifestyles."],
  ["I’ve already tried everything. Will this be different?", "Probably, because most ‘everything’ is symptom-chasing. Step Zero starts by understanding why your body was not responding in the first place."],
  ["What’s the difference between a Clarity Call and a full programme?", "The Clarity Call is a single 30-minute working session that gives you a clear read and next step. A full programme is the ongoing, personalised work of making change happen."],
  ["Is this only for people with a diagnosed condition?", "Not at all. Some clients come with a diagnosis; others simply know something feels off. Both are who Step Zero is built for."],
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

      <section className="bg-[#E7EFE7] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="max-w-3xl mb-12">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#607E64] font-semibold mb-4">The S.T.E.P. → Z.E.R.O. Method</p>
            <h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26] mb-5">A full method with a clear destination.</h2>
            <p className="text-base text-[#3E453F]/70 leading-[1.75]">Step Zero isn&apos;t just a starting point. Once we find your actual foundation, we move through four stages that take you somewhere specific: the place where your body finally works with you instead of against you.</p>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-6">
            {[{ title: "The S.T.E.P. Framework", items: framework }, { title: "The Z.E.R.O. Destination", items: destination }].map((group) => (
              <AnimateOnScroll key={group.title} className="rounded-[28px] bg-white p-7 md:p-9">
                <h3 className="text-2xl font-semibold text-[#252A26] mb-6">{group.title}</h3>
                <div className="space-y-5">{group.items.map(([letter, title, body]) => <div key={title} className="grid grid-cols-[42px_1fr] gap-3"><span className="size-10 rounded-full bg-[#F0B429] grid place-items-center font-bold">{letter}</span><div><p className="font-bold text-[#252A26]">{title}</p><p className="text-sm text-[#3E453F]/65 leading-relaxed">{body}</p></div></div>)}</div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-[#252A26] mt-10">Healing starts before dieting. That&apos;s Step Zero.</p>
        </div>
      </section>

      {/* Section 6.2: Programmes */}
      <section className="bg-[#FFFDFC] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="rounded-[30px] bg-[#252A26] text-white p-7 md:p-12 lg:p-14 shadow-[0_30px_70px_rgba(44,44,44,.12)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#F0B429] font-semibold mb-5">Programmes at Step Zero</p>
                <h2 className="text-3xl md:text-[44px] font-semibold text-white leading-tight mb-5">Choose how deep you want to go.</h2>
                <p className="text-lg text-white/65 leading-relaxed">Every body needs a different amount of time to move through Stabilize, Transform, Eat, and Perform.</p>
              </div>
              <div>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">{programmes.map((programme) => <div key={programme.name} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><p className="text-xs font-bold text-[#F0B429]">{programme.duration} · {programme.focus}</p><h3 className="text-xl font-semibold mt-3">{programme.name}</h3><p className="text-sm italic text-[#E7B8A3] mt-2">{programme.line}</p><p className="text-sm text-white/65 mt-3 leading-relaxed">{programme.bestFor}</p></div>)}</div>
                <Link href="/contact" className="inline-flex justify-center w-full rounded-full bg-[#F0B429] text-[#252A26] text-sm font-bold px-7 py-4 hover:bg-white transition-colors">Find your programme →</Link>
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
              <p className="text-base font-semibold text-[#607E64] mb-6">Single 30-minute consultation</p>
              <p className="text-base text-[#3E453F]/70 leading-[1.75] mb-8">For people who want expert eyes on their situation before committing to a programme. This is not a sales call. It&apos;s a working session.</p>
              <Link href="/contact" className="inline-flex rounded-full bg-[#6F9274] text-white text-sm font-bold px-7 py-4 hover:bg-[#5f8064] transition-colors">Book a Clarity Call →</Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EB] py-20 md:py-28">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12">
          <AnimateOnScroll className="text-center mb-12"><p className="text-[11px] tracking-[0.16em] uppercase text-[#607E64] font-semibold mb-4">Frequently asked questions</p><h2 className="text-3xl md:text-[44px] font-semibold text-[#252A26]">Before we begin</h2></AnimateOnScroll>
          <div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl bg-white p-6"><summary className="cursor-pointer list-none font-bold text-[#252A26] flex justify-between gap-4">{question}<span className="text-[#C17B5C] group-open:rotate-45 transition-transform">+</span></summary><p className="text-sm text-[#3E453F]/70 leading-[1.75] pt-4 max-w-3xl">{answer}</p></details>)}</div>
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
