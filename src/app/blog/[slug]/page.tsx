import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_UPDATED, blogPosts, getBlogPost } from "@/lib/blog";

interface BlogArticleProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const article = getBlogPost(slug);

  if (!article) notFound();

  const related = blogPosts.filter((post) => post.slug !== slug).slice(0, 2);

  return (
    <main className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-24">
      <article>
        <header className="w-full max-w-[760px] mx-auto px-6 md:px-8 text-left mb-9 md:mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A9E7E] hover:text-[#C17B5C] mb-7">
            ← Back to the journal
          </Link>
          <div className="flex flex-wrap items-center justify-start gap-3 mb-5 text-[11px] font-bold uppercase tracking-[0.13em]">
            <span className="rounded-full bg-[#F0B429] px-3 py-1.5 text-[#20251F]">{article.category}</span>
            <time dateTime={article.isoDate} className="text-[#2C2C2C]/45 normal-case tracking-normal font-medium">{article.date} · {article.readTime}</time>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-[58px] leading-[1.08] text-[#20251F] mb-6">
            {article.title}
          </h1>
          <p className="max-w-2xl text-base md:text-lg leading-[1.75] text-[#2C2C2C]/65">{article.excerpt}</p>
        </header>

        <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8 mb-12 md:mb-16">
          <div className="relative aspect-[16/10] md:aspect-[16/8] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(44,44,44,0.12)]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: article.imagePosition ?? "center" }}
              sizes="(max-width: 1200px) 100vw, 1180px"
            />
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-6 md:px-8">
          <aside className="relative overflow-hidden rounded-[20px] bg-[#E7EFE7] p-6 md:p-7 mb-12 border border-[#7A9E7E]/15">
            <span className="absolute right-5 top-1 font-[family-name:var(--font-playfair)] text-7xl text-[#7A9E7E]/15">“</span>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#526E57] mb-2">The useful takeaway</p>
            <p className="relative font-[family-name:var(--font-playfair)] text-xl md:text-2xl leading-[1.45] text-[#20251F]">{article.takeaway}</p>
          </aside>

          <div>
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[32px] leading-tight text-[#20251F] mt-10 mb-5">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] md:text-[17px] text-[#2C2C2C]/75 leading-[1.85] mb-5">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 my-6">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] text-[#2C2C2C]/75 leading-[1.7]">
                        <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F0B429]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="border-y border-[#2C2C2C]/10 py-6 mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A9E7E] mb-3">Sources & further reading</p>
            <ul className="space-y-2">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer" className="text-sm text-[#2C2C2C]/65 underline decoration-[#F0B429] underline-offset-4 hover:text-[#C17B5C]">
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-[1.6] text-[#2C2C2C]/45 mt-5">Reviewed {BLOG_UPDATED}. This article is for education and does not replace personal medical advice.</p>
          </div>

          <div className="overflow-hidden rounded-[24px] bg-[#213029] p-7 md:p-10 mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F0B429] mb-3">Personal, practical support</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-3">Want help finding your starting point?</h2>
            <p className="text-white/65 text-sm leading-[1.7] mb-6">Book a Clarity Call to talk through your history, symptoms and next sensible step.</p>
            <Link href="/contact" className="inline-flex rounded-full bg-[#F0B429] px-6 py-3 text-sm font-bold text-[#20251F] hover:bg-[#f7c64a] transition-colors">Book a Clarity Call →</Link>
          </div>
        </div>
      </article>

      <section className="w-full max-w-[1080px] mx-auto px-6 md:px-10 mt-18 md:mt-24">
        <div className="flex items-end justify-between gap-5 mb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C17B5C] mb-2">Keep reading</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#20251F]">Related articles</h2>
          </div>
          <Link href="/blog" className="hidden sm:block text-sm font-semibold text-[#7A9E7E]">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="grid h-full grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_rgba(44,44,44,0.06)]">
                <div className="relative min-h-[170px] overflow-hidden">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: post.imagePosition ?? "center" }} sizes="180px" />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#C17B5C] mb-2">{post.category}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg leading-[1.25] text-[#20251F]">{post.title}</h3>
                  <span className="text-xs text-[#2C2C2C]/40 mt-3">{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
