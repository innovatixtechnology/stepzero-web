import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogArticleProps {
  params: Promise<{ slug: string }>;
}

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    body: string;
    excerpt: string;
  }
> = {
  "stress-digestion": {
    title: "Your Gut Is Fine. It's Your Nervous System That's the Problem.",
    category: "Gut Health",
    date: "May 1, 2026",
    excerpt:
      "When your body is chronically stressed, digestion shuts down. Here's the science of why stress is the real root cause — and what to do about it.",
    body: `When your body is chronically stressed, digestion shuts down. Cortisol suppresses digestive enzymes, slows gut motility, reduces stomach acid. No diet works when you're in fight-or-flight.

## The Fix

Nervous system reset before meals — 3 deep belly breaths before eating, no screens, seated and calm.

### One thing to do today

Put your phone down before your next meal. Take 3 slow breaths. Then eat.

---

## Understanding the Gut-Brain Connection

The gut and brain are connected through the vagus nerve, a bidirectional highway that carries signals between the two. When you're stressed, the brain signals the gut to slow down digestion. Blood flow is diverted away from the digestive organs to the muscles, preparing you for fight-or-flight.

This was useful when we needed to run from predators. Not so useful when the "predator" is a deadline, a traffic jam, or an argument with a family member.

## Why This Matters for Indians

The modern Indian lifestyle is uniquely stressful — long commutes, competitive work environments, family obligations, and the pressure to maintain traditional values while navigating a globalized world. It's no wonder so many of us are dealing with gut issues that don't seem to have a clear medical cause.

The good news? Once you understand the real cause, the solution becomes much simpler.`,
  },
  "not-losing-weight": {
    title:
      "The Real Reason You're Not Losing Weight — Even When You're Eating Right",
    category: "Metabolic Health",
    date: "April 24, 2026",
    excerpt:
      "You've cut the sugar, added the protein, and started walking — so why isn't the scale moving? It could be the one thing nobody talks about.",
    body: `You've cut the sugar, added the protein, and started walking — so why isn't the scale moving? The answer may lie in metabolic adaptation and the hidden factors affecting your body's energy balance.

## The Invisible Factors

Most weight loss advice focuses on calories in, calories out. But weight is far more complex than a simple energy equation.

### Sleep

Poor sleep disrupts hormones that regulate appetite and metabolism. A single night of poor sleep can increase ghrelin (hunger hormone) and decrease leptin (satiety hormone) — making you hungrier the next day without you even realizing it.

### Stress

Chronic stress raises cortisol, which promotes fat storage, especially around the midsection. For many women, particularly postpartum, this is a major unrecognized factor.

### Gut Health

Your gut microbiome influences how you extract energy from food, how you store fat, and even your food cravings. An imbalanced gut can make weight loss nearly impossible regardless of willpower.

## What to Do Instead

Rather than simply cutting calories, focus on building a foundation that supports your body's natural weight regulation systems. That means prioritizing sleep, managing stress, and healing your gut — all of which are the focus of the Step Zero approach.`,
  },
  "gallbladder-removal": {
    title: "Life After Gallbladder Removal: What Your Doctor Didn't Tell You",
    category: "Post-Surgery",
    date: "April 17, 2026",
    excerpt:
      "The surgical recovery is just the beginning. Here's what actually happens when the gallbladder is gone — and how to rebuild from there.",
    body: `The gallbladder stores and concentrates bile, which helps digest fats. Without it, bile drips continuously into the digestive tract instead of being released in a concentrated burst when you eat. This changes how your body processes fat — and can lead to digestive issues that persist long after surgery.

## What Your Doctor Probably Said

"You'll be fine. Just avoid fatty foods."

## What Actually Happens

- Unpredictable digestion
- Bloating after meals
- Difficulty absorbing fat-soluble vitamins (A, D, E, K)
- Food intolerances that develop over time
- Nutrient deficiencies that show up months or years later

## The Step Zero Approach

Rather than avoiding fat entirely (which creates its own problems), the Step Zero protocol focuses on:

1. **Gradual fat reintroduction** — learning what your body can handle
2. **Bile support** — through specific foods and supplements
3. **Fat-soluble vitamin optimization** — ensuring you absorb what you need
4. **Gut healing** — because your gut needs extra support post-surgery

## Your Body Is Still Healable

Having your gallbladder removed doesn't mean you can't have great digestion. It just means you need a different approach — one that works with your new anatomy instead of against it.`,
  },
  millets: {
    title: "Why Switching to Millets Didn't Fix Your Gut (And What to Do Instead)",
    category: "Indian Diet",
    date: "April 10, 2026",
    excerpt:
      "Millets are great. But if your gut lining isn't addressed first, they can actually make things worse. Here's why.",
    body: `Millets are nutrient-dense, gluten-free, and have a lower glycemic index than wheat. They're an excellent grain choice — but only if your gut can handle them.

## The Problem

If your gut lining is compromised (a condition known as intestinal permeability or "leaky gut"), introducing high-fiber grains like millets can cause significant bloating, gas, and inflammation. It's like adding traffic to a broken highway.

## Signs Your Gut Isn't Ready

- Increased bloating after millet-based meals
- Constipation or diarrhea
- Brain fog after eating
- Skin breakouts
- Joint pain

## What to Do Instead

Millets aren't the problem. The timing is. Before jumping on the millet bandwagon, focus on:

1. **Repairing the gut lining** — with bone broth, ghee, and glutamine-rich foods
2. **Reintroducing grains gradually** — starting with well-cooked, easily digestible options
3. **Monitoring your body's response** — and adjusting accordingly

## The Bottom Line

Millets are a fantastic food. But they're not a magic bullet for gut health. The real work begins with the foundation — and that's always Step Zero.`,
  },
  "postpartum-health": {
    title:
      "Postpartum Health in India: Why 'You Look Great' Is Not the Same as Feeling Well",
    category: "Postpartum",
    date: "April 3, 2026",
    excerpt:
      "New mothers are praised for looking 'great' while silently struggling. Here's the real postpartum health conversation nobody is having.",
    body: `In Indian culture, the postpartum period is traditionally one of rest and nourishment. But in modern life, that tradition has largely been replaced by a rapid return to work, household responsibilities, and the pressure to 'bounce back' physically.

## The Invisible Struggle

New mothers are often told they look great, that they should be grateful, that they should just focus on the baby. Meanwhile, they're dealing with:

- Nutrient depletion from pregnancy and breastfeeding
- Disrupted sleep patterns that affect hormones and metabolism
- Pelvic floor issues that are rarely discussed
- Gut changes that affect digestion and nutrient absorption
- Thyroid fluctuations that go undiagnosed
- And the mental health challenges that come with all of the above

## The Cultural Layer

Many Indian women are also navigating family expectations around food, rest, and care — expectations that may not align with their actual needs or their modern lifestyle.

## What Step Zero Does Differently

We don't just address one symptom. We look at the whole picture — your delivery history, your current symptoms, your sleep, your stress, your nutrient status, and your support system. Then we build a plan that actually works for your life.`,
  },
  "protein-absorption": {
    title:
      "High Protein Diets Are Trending in India — But Are You Actually Absorbing What You're Eating?",
    category: "Nutrition",
    date: "March 27, 2026",
    excerpt:
      "Eating 60g of protein a day is great — unless your gut can't break it down. Here's how to know if you're actually absorbing your protein.",
    body: `Eating 60g of protein a day is great — unless your gut can't break it down. Here's how to know if you're actually absorbing your protein.

## The Digestive Reality

Protein absorption happens in the small intestine, but it requires adequate stomach acid and digestive enzymes. Many people — especially those with gut issues, chronic stress, or a history of antibiotic use — don't produce enough of either.

## Signs You May Not Be Absorbing Protein Well

- Hair falling out or brittle nails despite eating well
- Constant muscle soreness or slow recovery
- Brain fog (protein is essential for neurotransmitter production)
- Sugar cravings (when protein isn't available, the body craves quick energy)
- Feeling heavy or bloated after protein-rich meals

## How to Fix It

1. **Support stomach acid** — with lemon water, apple cider vinegar, or betaine HCl (under guidance)
2. **Eat protein earlier in the day** — when digestion is at its peak
3. **Chew thoroughly** — the digestive process begins in the mouth
4. **Consider digestive enzymes** — especially if you're recovering from gut issues
5. **Rotate protein sources** — to get a full spectrum of amino acids

## The Indian Context

Indian diets often rely heavily on dal and legumes for protein, which is great — but these sources are incomplete proteins. Combining them properly (like rajma + rice) and adding sources like paneer, eggs, or fish can dramatically improve your amino acid profile.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-[#F0B429] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-[36px] font-bold text-[#2C2C2C] mb-4 leading-snug">
            {article.title}
          </h1>
          <p className="text-sm text-[#7A9E7E]">{article.date}</p>
        </div>

        {/* Feature Image Placeholder */}
        <div className="aspect-[16/9] bg-gradient-to-br from-[#C17B5C]/10 to-[#7A9E7E]/10 rounded-lg mb-10" />

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          {article.body.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#2C2C2C] mt-10 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2C2C2C] mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("---")) {
              return <hr key={index} className="my-8 border-[#7A9E7E]/20" />;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").map((item) => item.replace("- ", ""));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-[#2C2C2C]/80 leading-[1.7]">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-[#F0B429] pl-6 py-2 my-6"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl italic text-[#F0B429]">
                    {paragraph.replace("> ", "")}
                  </p>
                </blockquote>
              );
            }
            return (
              <p key={index} className="text-base text-[#2C2C2C]/80 leading-[1.8] mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="bg-[#7A9E7E] rounded-lg p-8 mt-12">
          <p className="text-white text-lg font-medium mb-4">
            Want personalised guidance?
          </p>
          <p className="text-white/80 text-sm mb-6">
            Book a Clarity Call and let&apos;s talk about your specific
            situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F0B429] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#d9a123] transition-colors"
          >
            Book a Clarity Call &rarr;
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, related]) => (
                <Link key={key} href={`/blog/${key}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow">
                    <div className="aspect-[16/9] bg-gradient-to-br from-[#C17B5C]/10 to-[#7A9E7E]/10" />
                    <div className="p-5">
                      <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#F0B429]">
                        {related.category}
                      </span>
                      <h4 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[#2C2C2C] mt-2">
                        {related.title}
                      </h4>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
