import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Section 5.1: Page Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden bg-[#2C2C2C]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A9E7E]/20 to-[#C17B5C]/20 z-0" />
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto pb-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4">
            <div className="md:w-2/3">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[44px] font-bold text-white leading-tight">About</h1>
            </div>
            <div className="md:w-1/3 md:text-right">
              <p className="text-white/80 text-sm leading-[1.7]">Palasha &bull; Integrative Nutrition Health Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.2: The Hook */}
      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="max-w-[720px] mx-auto px-6 md:px-8 text-center">
          <div className="w-12 h-px bg-[#F0B429] mx-auto mb-8" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[32px] font-bold text-[#2C2C2C] mb-8 leading-snug">
            I didn&apos;t find my way to health coaching through a textbook.
          </h2>
          <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8] mb-6">Nobody prepares you for what happens after the surgery.</p>
          <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8] mb-6">
            After my gallbladder was removed, I did what most people do — I followed the doctor&apos;s advice, ate &apos;carefully,&apos; and waited to feel normal again. But normal didn&apos;t come. My digestion was unpredictable. My energy was inconsistent. And every time I asked for help, I got the same generic response: &quot;This is expected. Give it time. Avoid fatty foods.&quot;
          </p>
        </div>
      </section>

      {/* Section 5.3: The Pattern */}
      <section className="bg-[#FAF7F2] py-8 md:py-16">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-[55%]">
              <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8] mb-6">Then came my second pregnancy and postpartum recovery. Different situation, same pattern.</p>
              <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8] mb-6">A body going through something significant. A system handing out generic protocols. And me — someone who by this point had studied nutrition formally, held a certification from IIN, was deep into understanding integrative health — still struggling to find guidance that actually fit my life.</p>
              <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8] mb-6">That&apos;s when something clicked.</p>
              <p className="text-base md:text-[17px] text-[#2C2C2C]/80 leading-[1.8]">It wasn&apos;t that the advice was wrong. It was that it was built for the average person in an average situation. And most of us aren&apos;t that.</p>
            </div>
            <div className="md:w-[45%]">
              <div className="w-full aspect-[4/5] max-w-[400px] bg-gradient-to-br from-[#C17B5C]/15 to-[#7A9E7E]/15 rounded-2xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5.4: The Turn (Pull Quote) */}
      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="max-w-[680px] mx-auto px-6 md:px-8 text-center">
          <div className="w-12 h-px bg-[#F0B429] mx-auto mb-8" />
          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-[28px] italic text-[#F0B429] leading-[1.4]">
            &ldquo;Most people don&apos;t fail at health because they lack willpower or information. They fail because they started at Step One when they needed to start at Step Zero.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 5.5: Credentials Block */}
      <section className="bg-[#FAF7F2] py-8 md:py-12">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="bg-[#FAF7F2] border-l-4 border-[#F0B429] rounded-r-lg p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-[#2C2C2C] mb-6">I&apos;m Palasha — founder of Step Zero, and the coach behind this work.</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Internationally Certified Integrative Nutrition Health Coach — IIN, New York",
                "Certified Nutritionist — IGMPI (Post Graduate Diploma in Nutrition & Dietetics)",
                "Functional Medicine Certification — AIC",
                "RYT 200 Certified Yoga Teacher — Sivananda tradition",
                "12+ Years in Brand Strategy & Consumer Behaviour",
                "Personal experience: Post-cholecystectomy recovery and postpartum health",
              ].map((item) => (
                <li key={item} className="text-[15px] text-[#2C2C2C]/80 flex items-start gap-3">
                  <span className="text-[#F0B429] mt-1">•</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-[15px] italic text-[#2C2C2C]/70">That last point matters as much as the rest. Credentials tell you what I know. My experience tells you I understand what you&apos;re going through — not theoretically, but from the inside.</p>
          </div>
        </div>
      </section>

      {/* Section 5.6: Who I Work With */}
      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[32px] font-bold text-[#2C2C2C]">Who I Work With</h2>
            <div className="w-12 h-px bg-[#F0B429] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Post-surgery recovery — especially post-cholecystectomy",
              "Postpartum women rebuilding nutrition, energy, and identity",
              "Chronic stress and gut issues — bloating, poor digestion, IBS-like symptoms",
              "Stubborn weight that won't shift despite doing everything right",
              "Sleep issues, anxiety, and low energy with no clear medical cause",
              "Anyone who simply feels off — and wants to understand why",
              "People experiencing symptoms driven by nervous system dysregulation",
              "Hormonal imbalance — PCOS, thyroid, perimenopause",
              "High-protein dieters who are eating right but not absorbing properly",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[#7A9E7E] mt-1 text-sm">•</span>
                <p className="text-[15px] text-[#2C2C2C]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.7: Invitation + CTA */}
      <section className="bg-[#EEF3EE] py-16 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto text-center">
          <div className="w-12 h-px bg-[#F0B429] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[26px] italic text-[#2C2C2C] mb-6">This is where the work begins.</h2>
          <p className="text-base text-[#2C2C2C]/80 leading-[1.7] max-w-2xl mx-auto mb-10">
            This isn&apos;t about another plan. It&apos;s about finding your actual starting point — and building from there. If that&apos;s what you&apos;re looking for, I&apos;d love to be part of it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-guide" className="inline-block bg-[#F0B429] text-white text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#d9a123] transition-colors shadow-sm">Download the Free Gut Health Guide &rarr;</Link>
            <Link href="/work-with-me" className="inline-block border-2 border-[#7A9E7E] text-[#7A9E7E] text-[16px] font-bold px-8 py-4 rounded-lg hover:bg-[#7A9E7E] hover:text-white transition-colors">Explore how we can work together &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
