export const PODCAST_DATA = {
  brand: {
    name: "Unfiltered with Wandia",
    tagline: "Stories that inspire growth",
    description: "A Kenyan podcast space where honest conversations on love, faith, mental health, money and purpose remind people they are not alone.",
    host: "Wandia",
    role: "Creator & Host",
    email: "faithwandia28@gmail.com",
    phone: "+254 794 454 549",
    whatsAppRaw: "254794454549",
    youtubeHandle: "@unfilteredwithwandia",
    youtubeUrl: "https://www.youtube.com/@unfilteredwithwandia",
    mediaKitUrl: "/assets/Unfiltered_with_Wandia_Media_Kit.pdf",
    logoUrl: "/assets/unfiltered_logo.png",
    portraitUrl: "/assets/wandia_portrait.png",
    businessPlusLogoUrl: "/assets/businessplus_logo.png"
  },

  stats: [
    { label: "Subscribers", value: "430+", detail: "Growing organically", icon: "Users" },
    { label: "Hours Watched", value: "418.5", detail: "Last 12 months", icon: "Clock" },
    { label: "Total Views", value: "5.5K+", detail: "High audience retention", icon: "Eye" },
    { label: "Full Episodes", value: "20", detail: "Long-form 40-70 min", icon: "Video" }
  ],

  audienceBreakdown: {
    mobileShare: "67.0%",
    kenyaShare: "53.0%",
    nonSubscribersShare: "63%",
    note: "63% of watch time comes from people who haven't subscribed yet. The show organically reaches new Kenyan audiences each week."
  },

  topics: [
    "Love & Relationships",
    "Campus Life",
    "Faith & Family",
    "Mental Health",
    "Money & Hustle",
    "Personal Growth",
    "Success Stories",
    "Confidence & Healing",
    "Music & Passion"
  ],

  episodes: [
    {
      id: "living-with-scars",
      title: "Living With Scars: Finding Confidence Beyond Insecurities",
      guest: "Tina",
      views: 688,
      duration: "54 min",
      topic: "Confidence & Healing",
      summary: "A deeply moving conversation on personal struggles, self-worth, and moving past physical and emotional insecurities.",
      featured: true
    },
    {
      id: "pastors-kids",
      title: "Holiness or Pressure? The Truth About Pastor's Kids",
      guest: "Community Voices",
      views: 582,
      duration: "48 min",
      topic: "Faith & Family",
      summary: "Deconstructing unrealistic expectations, church scrutiny, and finding personal faith outside of performance.",
      featured: false
    },
    {
      id: "first-class-honours",
      title: "How She Graduated With First Class Honours",
      guest: "Campus Scholar",
      views: 460,
      duration: "42 min",
      topic: "Campus Life",
      summary: "Real university realities, dealing with burnout, financial survival, and staying grounded to reach academic excellence.",
      featured: false
    },
    {
      id: "selling-eggs-to-company",
      title: "From Selling Eggs to Building a Thriving Company",
      guest: "Young Kenyan Entrepreneur",
      views: 428,
      duration: "59 min",
      topic: "Money & Hustle",
      summary: "Raw entrepreneurial grit: starting with zero capital, navigating rejection, and scaling a viable business in Kenya.",
      featured: false
    },
    {
      id: "depression-breakup",
      title: "Depression After a Break-Up",
      guest: "Anonymous Guest",
      views: 378,
      duration: "46 min",
      topic: "Mental Health",
      summary: "Candid look at heartbreak, mental health stigma in Kenyan communities, and the courageous steps toward emotional recovery.",
      featured: false
    },
    {
      id: "unfiltered-love",
      title: "Unfiltered Love: The Real Side of Relationships",
      guest: "Couple Dialogue",
      views: 307,
      duration: "51 min",
      topic: "Love & Relationships",
      summary: "Debunking social media relationship myths, communicating boundaries, and choosing partnership with maturity.",
      featured: false
    }
  ],

  packages: [
    {
      id: "basic",
      name: "Basic",
      price: "KSh 1,500",
      tierTag: "Entry",
      badge: "Fast Launch",
      description: "Simple, effective shoutout to introduce your business to the Unfiltered community.",
      features: [
        "Business name mentioned once inside the episode",
        "Tagged in one official social media post",
        "Listed in YouTube video description & show notes"
      ],
      featured: false
    },
    {
      id: "starter",
      name: "Starter",
      price: "KSh 5,000",
      tierTag: "Growth",
      badge: "Product Showcase",
      description: "Active physical and social presence for brands ready to capture attention.",
      features: [
        "Dedicated social media mention across platforms",
        "Physical product placement on the interview recording table",
        "Short host advertisement during natural transition",
        "Direct link and promo code in video description"
      ],
      featured: false
    },
    {
      id: "episode-partner",
      name: "Episode Partner",
      price: "KSh 10,000",
      tierTag: "Most Popular",
      badge: "Best ROI",
      description: "Our core sponsorship tier with dedicated airtime and multi-platform promotional support.",
      features: [
        "Everything included in the Starter package",
        "30 to 60 second presenter-delivered YouTube advertisement",
        "Multi-platform social media promotion (TikTok, IG Reels, Shorts)",
        "Direct host recommendation & demonstration of product/service",
        "Pinned YouTube comment with call-to-action link"
      ],
      featured: true
    },
    {
      id: "main-sponsor",
      name: "Main Sponsor",
      price: "KSh 20,000+",
      tierTag: "Headline",
      badge: "Maximum Impact",
      description: "Prominent brand ownership as the official episode presenter with custom content.",
      features: [
        "Opening and mid-roll presenter mentions",
        "'Brought to you by [Your Brand]' official episode title credit",
        "Multiple dedicated promotional posts across all channels",
        "Prominent product placement throughout the entire show",
        "Dedicated promo content and custom co-branded marketing assets"
      ],
      featured: false
    }
  ],

  testimonial: {
    quote: "Thank you so much, Unfiltered With Wandia. I have seen great conversion after your advert for our software. Thank you, and to more partnership.",
    author: "Founder",
    company: "BusinessPlus",
    website: "businessplus.co.ke",
    collaboration: "Previous collaboration · Software advertisement"
  },

  faqs: {
    partners: [
      {
        q: "Where will my brand appear during the episode?",
        a: "Depending on your package, your brand appears naturally integrated into the episode recording (verbal host endorsement, physical product placement on desk), within the top 3 lines of the YouTube description, in pinned comments, and across our TikTok and Instagram video reels."
      },
      {
        q: "Can I choose which episode topic or guest to sponsor?",
        a: "Yes! We schedule episodes in advance covering diverse subjects (entrepreneurship, campus life, faith, wellness, relationships). We recommend matching your brand with the most relevant conversation theme for maximum audience trust and conversion."
      },
      {
        q: "Can packages be customized for a season or multiple episodes?",
        a: "Absolutely. We offer tailored multi-episode and long-term packages ('In partnership with [Brand]') with discounted rates and dedicated campaign tracking."
      },
      {
        q: "How do I measure results from our sponsorship?",
        a: "We provide sponsors with view metrics, audience retention data, and link clicks. You are also welcome to provide custom UTM links, WhatsApp trigger numbers, or promo coupon codes to track direct sales."
      }
    ],
    guests: [
      {
        q: "Do I have to pay anything to be interviewed on the show?",
        a: "No! Guests never pay to share their real stories. Unfiltered with Wandia is built on authentic lived experiences and storytelling."
      },
      {
        q: "Where do you record, and how long does a session take?",
        a: "We record in a quiet, cozy professional studio setup in Nairobi. Recording sessions typically take 60 to 90 minutes in a warm, unhurried atmosphere."
      },
      {
        q: "Can I choose what topics we do and do not discuss?",
        a: "Yes, 100%. Before recording, you will have a preparation chat with Wandia and our team. You have full freedom to establish boundaries—we only talk about what you feel safe and comfortable sharing."
      },
      {
        q: "When will my episode be published after recording?",
        a: "Episodes are professionally edited and scheduled within 1 to 2 weeks of recording. We provide you with notice and preview clips prior to the public premiere."
      }
    ]
  }
};
