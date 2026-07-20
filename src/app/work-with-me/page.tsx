import Link from "next/link";

export default function WorkWithMePage() {
  return (
    <>
      {/* Section 6.1: Page Headline + Intro */}
      <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20 text-center">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="w-12 h-px bg-[#F0B429] mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[44px] font-bold text-[#2C2C2C] mb-6">This is where the work begins.</h1>
          <p className="text-base md:text-lg text-[#2C2C2C]/70 leading-[1.7] max-w-2xl mx-auto mb-8">
            Not with a meal plan. Not with a supplement protocol. With a real conversation about what&apos;s actually going on — and a plan built entirely around you.
          </p>
          <p className="text-base text-[#2C2C2C]/60 leading-[1.7] max-w-3xl mx-auto">
            At Step Zero, every offering is built on one principle: your body is not a problem to be solved with a generic solution. Everything here is personalised, evidence-based, and designed to create lasting change.
          </p>
        </div>
      </section>

      {/* Section 6.2: Signature Programme Card */}
      <section className="bg-[#FAF7F2] py-12 md:py-16">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[800px] mx-auto">
          <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-t-4 border-[#F0B429] p-8 md:p-10">
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#F0B429] mb-4">Flagship Offering</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-[26px] font-bold text-[#2C2C2C] mb-2">1:1 Integrative Health Coaching — 3 Month Immersion</h2>
            <p className="text-base italic text-[#C17B5C] mb-8">For people who are ready to go deep and do it properly.</p>

            <ul className="space-y-3 mb-8">
              {[
                "Deep dive intake assessment",
                "Personalised nutrition protocol — meal framework, food sequencing, supplement guidance",
                "Gut health reset plan specific to your history",
                "Bi-weekly 1:1 coaching calls (video)",
                "WhatsApp support between sessions",
                "Customised meal plan framework (flexible, not rigid)",
                "Progress tracking and protocol updates every 4 weeks",
                "Closing session with long-term maintenance plan",
              ].map((item) => (
                <li key={item} className="text-[15px] text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#7A9E7E] mt-1">•</span>{item}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="block w-full text-center bg-[#F0B429] text-white text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#d9a123] transition-colors shadow-sm">Apply to Work Together &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 6.3: Divider */}
      <section className="bg-[#FAF7F2] py-8">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[800px] mx-auto text-center">
          <div className="h-px bg-[#7A9E7E] mb-6" />
          <p className="text-sm italic text-[#7A9E7E]">Not sure you&apos;re ready for a full programme? Start with a conversation.</p>
        </div>
      </section>

      {/* Section 6.4: Clarity Call Card */}
      <section className="bg-[#FAF7F2] py-12 md:py-16">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[800px] mx-auto">
          <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-t-4 border-[#7A9E7E] p-8 md:p-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-[24px] font-bold text-[#2C2C2C] mb-2">The Clarity Call</h2>
            <p className="text-base text-[#2C2C2C]/70 mb-4">Single 60-Minute Consultation</p>
            <p className="text-[15px] text-[#2C2C2C]/80 leading-[1.7] mb-8">For people who want expert eyes on their situation before committing to a programme. This is not a sales call. It&apos;s a working session.</p>

            <Link href="/contact" className="block w-full text-center bg-[#7A9E7E] text-white text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#6b8f6f] transition-colors shadow-sm">Book a Discovery Call &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Section 6.5: Coming Soon */}
      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[800px] mx-auto text-center border-2 border-dashed border-[#7A9E7E]/30 rounded-lg p-8 md:p-12">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-2">What&apos;s Next at Step Zero</h2>
          <p className="text-sm italic text-[#7A9E7E] mb-8">Currently in development — join the waitlist</p>
          <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
            <li className="text-[15px] text-[#2C2C2C]/80 flex items-start gap-3"><span className="text-[#7A9E7E] mt-1">•</span>The Gut Reset Group Programme — 6-week cohort-based programme</li>
            <li className="text-[15px] text-[#2C2C2C]/80 flex items-start gap-3"><span className="text-[#7A9E7E] mt-1">•</span>Eat Again: The Post-Cholecystectomy Nutrition Protocol — self-paced course</li>
          </ul>
          <Link href="/contact" className="inline-block border-2 border-[#7A9E7E] text-[#7A9E7E] text-[16px] font-bold px-8 py-3 rounded-lg hover:bg-[#7A9E7E] hover:text-white transition-colors">Join the Waitlist &rarr;</Link>
        </div>
      </section>
    </>
  );
}
