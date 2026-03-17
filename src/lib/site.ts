export const siteConfig = {
  name: "Rhine Field Vaulters",
  shortName: "RFV",
  description:
    "An equestrian vaulting club offering structured youth and adult training in a calm, athletic, nature-inspired environment.",
  location: "Berlin-Brandenburg Region, Germany",
  email: "hello@rhinefieldvaulters.club",
  phone: "+49 30 1234 5678",
  applyUrl: "https://forms.gle/replace-with-your-google-form",
  trialUrl: "https://forms.gle/replace-with-your-google-form",
  instagramUrl: "https://www.instagram.com/",
  siteUrl: "https://example.github.io/rfv-website"
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about-vaulting", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" }
];

export const footerNav = [
  ...mainNav,
  { href: "/apply", label: "Apply" },
  { href: "/legal", label: "Legal" },
  { href: "/privacy", label: "Privacy" }
];

export const benefits = [
  {
    title: "Athletic foundation",
    text: "Balance, body tension, timing, and confidence are developed through progressive movement on and off the horse."
  },
  {
    title: "Team-centered training",
    text: "Vaulters learn in small groups with a clear rhythm, shared responsibility, and encouraging coaching."
  },
  {
    title: "Horse-first culture",
    text: "Respect for the horse is part of every session, from stable routines to mounted work."
  }
];

export const trustPoints = [
  "Structured groups for beginners, improvers, and ambitious athletes",
  "Safety-minded coaching with clear expectations for both vaulters and families",
  "A calm training environment designed to build trust before intensity",
  "Static-first website architecture for fast loading and simple maintenance"
];

export const trainingHighlights = [
  "Warm-up, mobility, and strength preparation",
  "Barrel technique for secure skill-building",
  "Mounted vaulting in age-appropriate groups",
  "Stable habits, horse care, and team responsibility"
];

export const faqItems = [
  {
    question: "Do we need riding experience before joining?",
    answer:
      "No. Many new vaulters start without prior riding experience. Early sessions focus on confidence, coordination, and safe basics."
  },
  {
    question: "What age groups do you train?",
    answer:
      "We currently welcome children, teens, and adults. Group placement depends on confidence, mobility, and training goals rather than age alone."
  },
  {
    question: "What should we bring to a trial session?",
    answer:
      "Wear close-fitting sportswear, soft shoes or vaulting slippers, tie back long hair, and bring water. We share the rest during booking."
  },
  {
    question: "How does payment work?",
    answer:
      "Pricing is shown clearly on the pricing page. Applications and trial requests go through Google Forms, then we confirm placement and start details."
  }
];
