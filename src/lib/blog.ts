export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  excerpt: string;
  takeaway: string;
  sections: BlogSection[];
  sources: { label: string; href: string }[];
}

export const BLOG_UPDATED = "August 6, 2026";

export const blogPosts: BlogPost[] = [
  {
    slug: "stress-digestion",
    title: "When stress shows up in your digestion",
    category: "Gut Health",
    date: "August 6, 2026",
    isoDate: "2026-08-06",
    readTime: "5 min read",
    image: "/images/wide-2.jpg",
    imageAlt: "A calm mindfulness ritual with a singing bowl",
    excerpt:
      "Bloating, urgency and discomfort can be influenced by the gut–brain connection. Here is a grounded way to notice the pattern without blaming every symptom on stress.",
    takeaway: "Start by making one meal a day slower, quieter and more predictable.",
    sections: [
      {
        heading: "The gut and brain are in constant conversation",
        paragraphs: [
          "Digestive symptoms are real, even when a scan or blood test does not show a clear structural problem. Conditions such as irritable bowel syndrome are now described as disorders of gut–brain interaction because the brain, nerves and digestive tract influence one another.",
          "Stress is not the only possible cause of bloating, pain, constipation or diarrhoea. It can, however, change sensitivity, appetite and bowel patterns for some people. Persistent or worsening symptoms deserve a medical assessment rather than a self-diagnosis.",
        ],
      },
      {
        heading: "A gentler pre-meal reset",
        bullets: [
          "Sit down and put the phone away for the first five minutes.",
          "Take three comfortable, unforced breaths before eating.",
          "Chew at a natural pace and notice when you begin to feel satisfied.",
          "Keep a short symptom note so patterns become easier to discuss with your clinician.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Seek medical advice for blood in the stool, persistent vomiting, unexplained weight loss, fever, anaemia, severe pain or symptoms that wake you at night. A calm meal can support comfort, but it does not replace appropriate investigation.",
        ],
      },
    ],
    sources: [
      {
        label: "NIDDK: Irritable bowel syndrome and gut–brain interaction",
        href: "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/definition-facts",
      },
    ],
  },
  {
    slug: "not-losing-weight",
    title: "Why the scale can stall even when you are trying hard",
    category: "Metabolic Health",
    date: "August 4, 2026",
    isoDate: "2026-08-04",
    readTime: "6 min read",
    image: "/images/wide-1.jpg",
    imageAlt: "A woman moving outdoors by the sea",
    excerpt:
      "Weight is influenced by more than willpower. Sleep, stress, medicines, health conditions, food patterns and your environment can all shape progress.",
    takeaway: "Measure the routines you can influence before judging the number on the scale.",
    sections: [
      {
        heading: "Weight is a multi-factor health outcome",
        paragraphs: [
          "A plateau does not automatically mean you are doing something wrong. The CDC describes obesity as a complex chronic disease influenced by health behaviours, stress, sleep, medications, medical conditions, genes and the environment.",
          "That is why an aggressive new restriction is not always the answer. A useful review starts with the full context: what you eat, how consistently you can follow the plan, how you sleep, how active you are, and whether a health condition or medicine may be contributing.",
        ],
      },
      {
        heading: "A practical two-week audit",
        bullets: [
          "Keep meals regular enough that extreme hunger is not driving the next choice.",
          "Include vegetables or fruit, a protein source and a satisfying carbohydrate across the day.",
          "Track sleep time and daily movement alongside weight.",
          "Discuss sudden or unexplained weight change with a qualified clinician.",
        ],
      },
      {
        heading: "Look for a trend, not a perfect day",
        paragraphs: [
          "Body weight can shift with hydration, menstrual cycles, sodium, digestion and time of day. Compare measurements taken under similar conditions and use other markers—energy, strength, waist fit and consistency—to see the broader picture.",
        ],
      },
    ],
    sources: [
      {
        label: "CDC: Risk factors for obesity",
        href: "https://www.cdc.gov/obesity/risk-factors/risk-factors.html",
      },
      {
        label: "CDC: Tips for maintaining a healthy weight",
        href: "https://www.cdc.gov/healthy-weight-growth/about/tips-for-balancing-food-activity.html",
      },
    ],
  },
  {
    slug: "gallbladder-removal",
    title: "Eating comfortably after gallbladder removal",
    category: "Post-Surgery",
    date: "August 1, 2026",
    isoDate: "2026-08-01",
    readTime: "5 min read",
    image: "/images/wide-3.jpg",
    imageAlt: "A woman practising a gentle movement indoors",
    excerpt:
      "Most people can return to a varied diet, but some notice loose stools or discomfort at first. A gradual, individual approach is often more useful than a permanent food ban.",
    takeaway: "Use smaller, familiar meals while you learn what feels comfortable for your body.",
    sections: [
      {
        heading: "What changes after surgery",
        paragraphs: [
          "The gallbladder stores bile and releases it when it is needed for digestion. After removal, bile moves from the liver into the intestine more continuously. Many people recover without long-term diet restrictions, while some experience diarrhoea, indigestion or bloating during recovery.",
          "Your surgeon's advice should come first, especially in the weeks after surgery. There is no universal list of foods that everyone must avoid forever.",
        ],
      },
      {
        heading: "Build meals back gradually",
        bullets: [
          "Begin with portions that feel manageable and increase variety over time.",
          "If a very rich meal triggers symptoms, try a smaller amount rather than eliminating all fat.",
          "Keep hydration steady, particularly if stools are loose.",
          "Record repeat triggers so your clinician or dietitian has useful information.",
        ],
      },
      {
        heading: "Do not self-prescribe supplements",
        paragraphs: [
          "Bile salts, digestive enzymes and high-dose vitamins are not automatically required after gallbladder removal. Ask a clinician who knows your medical history before taking them. Persistent diarrhoea, jaundice, fever or increasing pain needs prompt medical review.",
        ],
      },
    ],
    sources: [
      {
        label: "NHS: Gallbladder removal and possible symptoms",
        href: "https://www.nhs.uk/tests-and-treatments/gallbladder-removal/complications/",
      },
    ],
  },
  {
    slug: "millets-gut",
    title: "Millets are nutritious—but your gut may need time",
    category: "Indian Diet",
    date: "July 29, 2026",
    isoDate: "2026-07-29",
    readTime: "5 min read",
    image: "/images/blog/millet-bowl.jpg",
    imageAlt: "A colourful bowl of vegetables and grains",
    excerpt:
      "A sudden jump in fibre can feel uncomfortable, even when the food is nutritious. The answer may be preparation, portion and pace—not labelling millets as good or bad.",
    takeaway: "Introduce one millet meal at a time and let comfort guide the pace.",
    sections: [
      {
        heading: "Healthy does not always mean comfortable on day one",
        paragraphs: [
          "Millets can add variety, fibre and important nutrients to an Indian eating pattern. If you move from a lower-fibre diet to large millet portions overnight, however, extra gas or bloating may follow while your digestive system adjusts.",
          "Symptoms do not prove that your gut lining is damaged, and they do not mean millets are unsuitable for everyone. Preparation method, portion size, the rest of the meal and individual conditions such as IBS all matter.",
        ],
      },
      {
        heading: "Try a slower introduction",
        bullets: [
          "Choose one familiar millet and begin with a small cooked portion.",
          "Keep the rest of the meal simple so it is easier to identify a trigger.",
          "Increase fibre gradually and drink enough fluid.",
          "Soaking and cooking thoroughly may improve texture and tolerance.",
        ],
      },
      {
        heading: "Variety over food trends",
        paragraphs: [
          "Millets do not need to replace rice or wheat completely to be useful. A sustainable pattern can include several grains, pulses, vegetables and protein sources that are affordable, culturally familiar and comfortable for you.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO: Healthy diet principles",
        href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
    ],
  },
  {
    slug: "postpartum-health",
    title: "Postpartum recovery is more than ‘bouncing back’",
    category: "Postpartum",
    date: "July 26, 2026",
    isoDate: "2026-07-26",
    readTime: "6 min read",
    image: "/images/blog/postpartum-mother.jpg",
    imageAlt: "A mother resting closely with her baby",
    imagePosition: "center 35%",
    excerpt:
      "The first weeks after birth call for physical and mental-health support, nourishment and follow-up—not pressure to look as though nothing changed.",
    takeaway: "Make the mother’s recovery visible: one check-in, one nourishing meal and one protected rest window at a time.",
    sections: [
      {
        heading: "Recovery deserves its own care plan",
        paragraphs: [
          "Postnatal care is not only about the baby. WHO guidance recognises the first six weeks after birth as a critical period for a mother's physical recovery, mental health and overall wellbeing.",
          "Sleep disruption, feeding demands, wound or pelvic-floor recovery and shifting family roles can overlap. Looking well from the outside does not tell us whether someone feels supported or whether a symptom needs attention.",
        ],
      },
      {
        heading: "Support that is actually useful",
        bullets: [
          "Offer a specific task—food, laundry, an appointment ride—instead of ‘let me know’.",
          "Make room for regular meals with a variety of foods and adequate fluids.",
          "Ask about mood and recovery without judgement.",
          "Keep scheduled postnatal checks even when everything seems fine.",
        ],
      },
      {
        heading: "Know the urgent signs",
        paragraphs: [
          "Heavy bleeding, chest pain, breathing difficulty, severe headache, fever, thoughts of self-harm, or a sense that something is seriously wrong requires urgent medical help. Personalised nutrition can support recovery, but it is not a substitute for postnatal medical care.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO: Postnatal care for a positive experience",
        href: "https://www.who.int/publications/i/item/9789240045989",
      },
      {
        label: "WHO: Healthy food during and after pregnancy",
        href: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/eating-healthy-food-during-pregnancy",
      },
    ],
  },
  {
    slug: "protein-absorption",
    title: "Protein is trending. Here is how to make it practical.",
    category: "Nutrition",
    date: "July 23, 2026",
    isoDate: "2026-07-23",
    readTime: "5 min read",
    image: "/images/wide-5.jpg",
    imageAlt: "Two women moving together in a bright studio",
    excerpt:
      "You do not need a complicated supplement routine to make protein count. Start with enough total food, varied sources and portions that suit your appetite and needs.",
    takeaway: "Add a recognisable protein source to the meals you already enjoy.",
    sections: [
      {
        heading: "Start with needs, not internet targets",
        paragraphs: [
          "Protein needs vary with body size, age, activity, pregnancy, breastfeeding and health conditions. A single viral target is unlikely to fit everyone, and people with kidney or other medical conditions may need individual guidance.",
          "Most protein is digested and absorbed through normal digestive processes. Symptoms such as persistent diarrhoea, unexplained weight loss or signs of deficiency deserve medical assessment rather than unproven ‘absorption’ supplements.",
        ],
      },
      {
        heading: "Build from familiar Indian foods",
        bullets: [
          "Use dal, chana, rajma, soy, dairy, eggs, fish or meat according to preference and access.",
          "Combine cereals and pulses across a varied day; every bite does not need to be a perfect pairing.",
          "Spread protein-containing foods across meals if one large portion feels heavy.",
          "Choose powders for convenience only when they genuinely help—not because food has failed.",
        ],
      },
      {
        heading: "Consistency beats optimisation",
        paragraphs: [
          "A repeatable breakfast, a useful snack and a balanced dinner will usually serve you better than chasing digestive hacks. If you are unsure how much protein is appropriate, a registered dietitian can translate your needs into portions and foods that fit your life.",
        ],
      },
    ],
    sources: [
      {
        label: "WHO: Healthy diet principles",
        href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
