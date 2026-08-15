import Image from "next/image";
import Link from "next/link";
import { BLOG_UPDATED, blogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gut Health & Nutrition Journal | Step Zero",
  description: "Practical, evidence-aware articles on gut health, nutrition, recovery, metabolism and sustainable wellbeing from Step Zero with Palasha.",
};

export default function BlogPage() {
  const [featured] = blogPosts;

  return (
    <main className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-24">
      <section className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-10 md:mb-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#7A9E7E] mb-4">
              The Step Zero Journal
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-[64px] leading-[1.02] text-[#20251F] mb-5">
              Useful health science,
              <span className="block italic font-normal text-[#7A9E7E]">made human.</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-[#2C2C2C]/70 leading-[1.75]">
              Thoughtful, practical reads on gut health, nutrition, recovery and the everyday realities behind lasting change.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7A9E7E]/20 bg-white px-4 py-2 text-xs text-[#2C2C2C]/65 shadow-[0_4px_20px_rgba(44,44,44,0.05)]">
            <span className="h-2 w-2 rounded-full bg-[#F0B429]" />
            Updated {BLOG_UPDATED}
          </div>
        </div>

        <Link href={`/blog/${featured.slug}`} className="group block mb-12 md:mb-18">
          <article className="grid overflow-hidden rounded-[28px] bg-[#213029] shadow-[0_20px_60px_rgba(33,48,41,0.14)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                style={{ objectPosition: featured.imagePosition ?? "center" }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213029]/45 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em]">
                <span className="rounded-full bg-[#F0B429] px-3 py-1.5 text-[#20251F]">Newest</span>
                <span className="text-white/60">{featured.category}</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl xl:text-[46px] leading-[1.12] text-white mb-5">
                {featured.title}
              </h2>
              <p className="text-sm md:text-base leading-[1.75] text-white/70 mb-8">
                {featured.excerpt}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-sm">
                <span className="text-white/55">{featured.date} · {featured.readTime}</span>
                <span className="font-semibold text-[#F0B429] transition-transform group-hover:translate-x-1">Read the story →</span>
              </div>
            </div>
          </article>
        </Link>

        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C17B5C] mb-2">All six articles</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#20251F]">Browse the complete journal</h2>
          </div>
          <span className="hidden md:block text-sm text-[#2C2C2C]/50">Evidence-aware. Clear. No extremes.</span>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full overflow-hidden rounded-[22px] border border-[#2C2C2C]/[0.06] bg-white shadow-[0_10px_35px_rgba(44,44,44,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(44,44,44,0.11)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    style={{ objectPosition: post.imagePosition ?? "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FAF7F2]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#526E57] backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex min-h-[280px] flex-col p-6">
                  <p className="text-xs text-[#2C2C2C]/45 mb-3">{post.date} · {post.readTime}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[23px] leading-[1.2] text-[#20251F] mb-3">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-[1.7] text-[#2C2C2C]/65">{post.excerpt}</p>
                  <span className="mt-auto pt-6 text-sm font-semibold text-[#C17B5C] transition-transform group-hover:translate-x-1">Read article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
