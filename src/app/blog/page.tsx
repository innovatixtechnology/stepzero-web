import Link from "next/link";

const blogPosts = [
  { slug: "stress-digestion", title: "Your Gut Is Fine. It's Your Nervous System That's the Problem.", excerpt: "When your body is chronically stressed, digestion shuts down. Here's the science of why stress is the real root cause — and what to do about it.", category: "Gut Health", date: "May 1, 2026" },
  { slug: "not-losing-weight", title: "The Real Reason You're Not Losing Weight — Even When You're Eating Right", excerpt: "You've cut the sugar, added the protein, and started walking — so why isn't the scale moving? It could be the one thing nobody talks about.", category: "Metabolic Health", date: "April 24, 2026" },
  { slug: "gallbladder-removal", title: "Life After Gallbladder Removal: What Your Doctor Didn't Tell You", excerpt: "The surgical recovery is just the beginning. Here's what actually happens when the gallbladder is gone — and how to rebuild from there.", category: "Post-Surgery", date: "April 17, 2026" },
  { slug: "millets-gut", title: "Why Switching to Millets Didn't Fix Your Gut (And What to Do Instead)", excerpt: "Millets are great. But if your gut lining isn't addressed first, they can actually make things worse. Here's why.", category: "Indian Diet", date: "April 10, 2026" },
  { slug: "postpartum-health", title: "Postpartum Health in India: Why 'You Look Great' Is Not the Same as Feeling Well", excerpt: "New mothers are praised for looking 'great' while silently struggling. Here's the real postpartum health conversation nobody is having.", category: "Postpartum", date: "April 3, 2026" },
  { slug: "protein-absorption", title: "High Protein Diets Are Trending in India — But Are You Actually Absorbing What You're Eating?", excerpt: "Eating 60g of protein a day is great — unless your gut can't break it down. Here's how to know if you're actually absorbing your protein.", category: "Nutrition", date: "March 27, 2026" },
];

export default function BlogPage() {
  return (
    <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[44px] font-bold text-[#2C2C2C] mb-4">Blog</h1>
          <p className="text-base text-[#2C2C2C]/70 max-w-2xl mx-auto leading-[1.7]">Science-backed insights on gut health, metabolic health, and integrative nutrition — written for real Indian lives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-[#C17B5C]/10 to-[#7A9E7E]/10" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start bg-[#F0B429] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-3">{post.category}</span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2C2C2C] mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-[#2C2C2C]/70 leading-[1.7] line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#7A9E7E]">{post.date}</span>
                    <span className="text-sm text-[#7A9E7E] hover:text-[#F0B429] transition-colors font-medium">Read more &rarr;</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
