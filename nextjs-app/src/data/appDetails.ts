export interface AppDetail {
  slug: string;
  name: string;
  tagline: string;
  website: string;
  icon: string;
  category: "edtech" | "social" | "cultural";
  description: string;
  features: string[];
  sections?: { heading: string; content: string }[];
}

export const appDetails: AppDetail[] = [
  {
    slug: "jobsafal",
    name: "JobSafal",
    tagline: "India\u2019s Smartest Government Exam Preparation Platform",
    website: "www.jobsafal.com",
    icon: "/images/Jobsafal (1).png",
    category: "edtech",
    description:
      "Purpose-built for aspirants preparing for India\u2019s most competitive government examinations \u2014 SSC, IBPS, RRB, LIC, UPSC, and State Public Service Commissions \u2014 JobSafal\u2019s intelligent test engine dynamically generates unique examinations for each student. Every test mirrors the exact pattern of the target exam: subject distribution, time limits, and negative marking schemes. The engine tracks every question a student has attempted, ensuring maximum exposure to diverse problem types and eliminating repetition.",
    features: [
      "AI-powered dynamic test generation \u2014 no two tests are alike",
      "Mirrors exact exam patterns for SSC, IBPS, RRB, LIC, UPSC, and more",
      "Performance tracking dashboards that pinpoint strengths and weaknesses",
      "Pricing from just \u20B915 per test; annual plans from \u20B9639",
      "Democratising quality preparation for Tier-2 and Tier-3 city students",
    ],
  },
  {
    slug: "examsafal",
    name: "ExamSafal",
    tagline:
      "Comprehensive Entrance Exam Preparation for India\u2019s Future Professionals",
    website: "www.examsafal.com",
    icon: "/images/Exam safal.png",
    category: "edtech",
    description:
      "A completely independent ecosystem with zero content overlap with JobSafal, ExamSafal is dedicated exclusively to India\u2019s high-stakes entrance examinations: NEET, JEE Main and Advanced, CLAT, CAT, CUET, and more. Every question, strategy, and learning module is purpose-crafted for entrance exam aspirants. Built mobile-first and optimised for Android 5.0+ and iOS 12.0+, even students with older smartphones can prepare without barriers.",
    features: [
      "Subject-wise modules and full-length mock tests simulating real exam conditions",
      "Detailed solution walkthroughs for every question",
      "Zero content overlap with JobSafal \u2014 entirely tailored for entrance examinations",
      "Mobile-first design optimised for budget smartphones",
      "Personalised study paths powered by AI performance analysis",
    ],
  },
  {
    slug: "currentaffairs",
    name: "Current Affairs",
    tagline: "Daily News Intelligence for Exam-Ready Students",
    website: "www.jobsafal.com/current-affairs",
    icon: "/images/CA.png",
    category: "edtech",
    description:
      "In government examinations, current affairs often make the decisive difference between selection and rejection. Yet most students struggle to filter exam-relevant news from daily information overload. Current Affairs solves this with AI-curated daily dossiers organised by exam-relevant categories \u2014 Polity, Economy, Science & Technology, Environment, International Relations, Defence, Government Schemes, Sports, and Awards & Appointments. Each article is distilled into concise, exam-ready formats with key facts highlighted for rapid revision.",
    features: [
      "AI-curated daily dossiers across all exam-relevant categories",
      "Concise, exam-ready summaries with key facts highlighted",
      "Downloadable PDFs for offline revision",
      "Practice MCQs based on the day\u2019s current events",
      "Fresh content every day \u2014 students never miss a critical update",
    ],
  },
  {
    slug: "aisir",
    name: "AI-Sir",
    tagline: "India\u2019s First Multi-Model AI Tutoring Platform",
    website: "www.aisir.in",
    icon: "/images/AI_sir.png",
    category: "edtech",
    description:
      "BeWorld\u2019s most groundbreaking offering, AI-Sir is a multi-model AI tutoring assistant powered by a proprietary orchestration engine that intelligently routes queries across OpenAI, Google Gemini, and Anthropic Claude. The result is the most accurate, contextually aware, and exam-specific tutoring experience available to Indian students. Its standout capability is image recognition: students can photograph handwritten problems from their notebooks and receive step-by-step solutions instantly.",
    features: [
      "Proprietary multi-model AI engine (OpenAI + Gemini + Claude) for best-in-class accuracy",
      "Image recognition \u2014 snap a handwritten problem, get an instant solution",
      "Interactive multi-turn conversations that teach, not just answer",
      "Curriculum customisation for 30+ Indian competitive examinations",
      "Personal tutoring at approximately 1/100th the cost of traditional coaching",
    ],
  },
  {
    slug: "beworld",
    name: "BeWorld",
    tagline: "Bengali Social Network",
    website: "mybeworld.com",
    icon: "/images/logo.png",
    category: "social",
    description:
      "BeWorld is a Bengali-language social networking platform designed to connect the Bengali community worldwide. It provides a culturally familiar digital space where users can share content, engage in discussions, and stay connected \u2014 all in their mother tongue. BeWorld bridges the gap between modern social networking and regional identity, ensuring that technology truly speaks the language of its users.",
    features: [
      "Full Bengali-language interface and content experience",
      "Community-driven discussions and content sharing",
      "Culturally relevant content curation for Bengali users",
      "Connect with Bengali-speaking communities worldwide",
      "Built to celebrate and preserve Bengali culture digitally",
    ],
  },
  {
    slug: "telworld",
    name: "TelWorld",
    tagline: "Telugu Social Platform",
    website: "mytelworld.com",
    icon: "/images/telworld.png",
    category: "social",
    description:
      "TelWorld is a Telugu-language social platform that brings together the Telugu-speaking community through regional content and meaningful networking. Designed for Telugu users across India and the diaspora, TelWorld provides a dedicated space for cultural expression, community building, and staying informed \u2014 entirely in Telugu.",
    features: [
      "Complete Telugu-language social networking experience",
      "Regional content discovery and community engagement",
      "Connecting Telugu-speaking communities across the globe",
      "Culturally rooted platform celebrating Telugu identity",
      "Modern social features with a regional-first approach",
    ],
  },
  {
    slug: "bengalipanjika",
    name: "Bengali Panjika",
    tagline: "Panjika365 \u2014 Modern Bengali Calendar & Almanac App",
    website: "calendar.panjika365.com",
    icon: "/images/WhatsApp Image 2025-03-18 at 11.17.18 AM.jpeg",
    category: "cultural",
    description:
      "Panjika365 is a modern, feature-rich Bengali calendar and almanac (Panjika) app built with React Native and Expo. It serves as a digital companion for Bengali-speaking users, providing traditional calendar data, auspicious timings, religious content, and astronomical information \u2014 all in one place. A Panjika is a traditional Bengali almanac that has been an essential part of Bengali households for centuries, providing detailed astrological, astronomical, and ceremonial timing information.",
    features: [
      "Full Bengali calendar with Gregorian date mapping, daily Tithi, Nakshatra, Yoga, and Karana",
      "Sunrise/sunset and moonrise/moonset times with GPS-based location support",
      "Auspicious Days Finder (Shubh Din) for 10+ life events \u2014 Marriage, Namkaran, Griha Pravesh, and more",
      "Festival calendar (Bishesh Din) with 40+ Bengali festivals, dates, and descriptions",
      "Religious content \u2014 Bhagavad Gita, Mahabharata, Ramayana, Chandipat, Palmistry, and Vastu Shastra",
    ],
    sections: [
      {
        heading: "Daily Panchangam / Calendar View",
        content:
          "Full Bengali calendar with Gregorian date mapping. Daily Tithi (lunar day), Nakshatra (lunar mansion), Yoga, and Karana. Sunrise/sunset and moonrise/moonset times (location-based using GPS). Moon phase indicators, Choghadiya (propitious hours), Rahu Kaal (inauspicious times), Amrita Yoga & Mahendra Yoga timings.",
      },
      {
        heading: "Auspicious Days Finder (Shubh Din)",
        content:
          "Find the best dates and times for 10+ life events: Marriage, Namkaran (naming ceremony), Annaprashana (first feeding), Griha Pravesh (housewarming), Mundan (hair cutting ceremony), Upanayan (thread ceremony), Business/Career start, Vehicle purchase, Property purchase, and Engagement (Shaadbhanga). Year & month selection (2025\u20132030) with detailed time slots and associated Nakshatra.",
      },
      {
        heading: "Festival Calendar (Bishesh Din)",
        content:
          "40+ Bengali festivals with dates, timings, and descriptions. Grouped by month for easy browsing with both Bengali and Gregorian date display.",
      },
      {
        heading: "Religious & Spiritual Content (Dharmik)",
        content:
          "Bhagavad Gita \u2014 all 18 chapters with Bengali translations. Mahabharata \u2014 complete text with quotes. Ramayana \u2014 all 7 Kands (sections). Chandipat, Mahalayas Mantras, Kathamrit. Palmistry (Hasthareekha) guide, Vastu Shastra principles, famous temple information (Belur Math, Tarapith, Dakshineshwar), and Zodiac/Rashi details.",
      },
    ],
  },
  {
    slug: "telugupanchangam",
    name: "Telugu Panchangam",
    tagline:
      "Panchangam365 \u2014 Telugu/Sanskrit Calendar & Almanac App",
    website: "calendar.panchangam365.com",
    icon: "/images/Panjika365 (7).png",
    category: "cultural",
    description:
      "Panchangam365 is the Telugu/Sanskrit variant of the Panjika365 platform, configured to serve South Indian users with a focus on the Panchangam tradition. It shares the same core architecture but is tailored for Telugu-speaking audiences. A Panchangam (literally \u201Cfive limbs\u201D in Sanskrit) is the traditional Hindu calendar system that details five key astronomical elements for each day.",
    features: [
      "Tithi \u2014 Lunar day (phase of the moon)",
      "Nakshatra \u2014 Lunar mansion / constellation",
      "Yoga \u2014 Auspicious time combinations",
      "Karana \u2014 Half of a Tithi",
      "Vaara \u2014 Day of the week",
    ],
    sections: [
      {
        heading: "What is Panchangam?",
        content:
          "A Panchangam (literally \u201Cfive limbs\u201D in Sanskrit) is the traditional Hindu calendar system that details five key astronomical elements for each day: Tithi (lunar day), Nakshatra (lunar mansion/constellation), Yoga (auspicious time combinations), Karana (half of a Tithi), and Vaara (day of the week). Panchangam365 brings this ancient wisdom into a modern digital format for Telugu-speaking users.",
      },
    ],
  },
];
