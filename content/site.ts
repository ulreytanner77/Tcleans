// ══════════════════════════════════════════════════════════════════════════════
// T CLEANS — Site Content
//
// PLACEHOLDERS TO FILL IN:
//  1. Business email address (search: PLACEHOLDER_EMAIL)
//  2. Business hours / availability window (search: PLACEHOLDER_HOURS)
//  3. Whether to publish pricing — starting-at ranges vs "free quote only"
//  4. 3–5 customer testimonials (add to testimonials array)
//  5. Real before/after photos (add to gallery.images array)
//  6. Licensed/insured/bonded status (search: PLACEHOLDER_LICENSE)
//  7. Supplies policy — brings own? pet/kid safe? (search: PLACEHOLDER_SUPPLIES)
//  8. Service radius limit and travel fee policy (search: PLACEHOLDER_TRAVEL)
//  9. Formspree form ID for quote form (search: PLACEHOLDER_FORMSPREE)
// 10. Real hero/about photos
// 11. OG image — card/logo image for Facebook shares (search: PLACEHOLDER_OG)
// ══════════════════════════════════════════════════════════════════════════════

// ── Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  checklist: string[];
}

export interface WhyUsItem {
  icon: string; // SVG path or emoji identifier
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface HoursEntry {
  days: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface SiteContent {
  // ── Business identity ──
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string; // digits only for tel: links
  ownerName: string;

  // ── Page metadata (<head>) ──
  meta: {
    title: string;
    description: string;
  };

  // ── Navigation ──
  nav: NavLink[];

  // ── Hero ──
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
  };

  // ── About / Intro ──
  intro: {
    heading: string;
    image: { src: string; alt: string };
    paragraphs: string[];
  };

  // ── Services ──
  services: ServiceItem[];

  // ── Why Choose Us (differentiators) ──
  whyUs: WhyUsItem[];

  // ── Testimonials (gated — renders nothing when empty) ──
  testimonials: Testimonial[];

  // ── Gallery (gated — renders nothing when empty) ──
  gallery: {
    heading: string;
    images: { src: string; alt: string }[];
  };

  // ── Service Area ──
  serviceArea: {
    regionName: string;
    regionDescription: string;
    towns: string[];
    travelNote: string;
  };

  // ── Quote Form ──
  quoteForm: {
    heading: string;
    subheading: string;
    formspreeId: string;
    serviceOptions: string[];
    frequencyOptions: string[];
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };

  // ── FAQ ──
  faq: { question: string; answer: string }[];

  // ── Contact / Hours ──
  hours: HoursEntry[];
  email: string;

  // ── Social links ──
  socials: SocialLink[];

  // ── Footer ──
  footer: {
    quickLinksLabel: string;
    contactLabel: string;
  };

  // ── SEO ──
  seo: {
    ogImage: string;
    jsonLd: {
      type: string[];
      name: string;
      telephone: string;
      areaServed: string[];
      openingHours: string;
    };
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// SITE CONTENT
// ══════════════════════════════════════════════════════════════════════════════

export const siteContent: SiteContent = {
  name: "T Cleans",
  tagline: "A Clean Space Is A Happy Space",
  phone: "541-735-4265",
  phoneRaw: "5417354265",
  ownerName: "the owner", // Update with real name once confirmed

  meta: {
    title: "T Cleans — House Cleaning Medford OR | Rogue Valley Cleaning Service",
    description:
      "Professional residential and commercial cleaning in Medford, Ashland, Grants Pass, and the Rogue Valley. Charged by the job, not the hour. Get a free quote today.",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    headline: "A Cleaner Home in\nSouthern Oregon",
    subheadline:
      "Professional cleaning charged by the job, not the hour. Residential and commercial service across the Rogue Valley.",
    primaryCta: "Get a Free Quote",
    primaryCtaHref: "/contact",
    secondaryCta: "Call 541-735-4265",
    secondaryCtaHref: "tel:5417354265",
  },

  intro: {
    heading: "About T Cleans",
    image: { src: "/images/about.svg", alt: "T Cleans owner at work" },
    paragraphs: [
      "T Cleans is an owner-operated cleaning service based in Southern Oregon. Every job is handled personally — you get the same dedicated cleaner every visit, someone who learns your home and your preferences.",
      "Detail-oriented and reliable, T Cleans charges by the job, not the hour, so you always know what to expect. Whether it's a recurring weekly clean or a one-time deep clean before move-out, every home gets the same thorough attention.",
    ],
  },

  services: [
    {
      id: "recurring",
      name: "Recurring Cleans",
      description:
        "Keep your home consistently clean with scheduled weekly, bi-weekly, or monthly visits. The same cleaner every time, learning your home and your preferences.",
      checklist: [
        "Dust all surfaces, shelves, and baseboards",
        "Vacuum and mop all floors",
        "Clean and sanitize kitchen counters and appliances",
        "Scrub and disinfect bathrooms (tub, toilet, sink, mirrors)",
        "Empty trash and replace liners",
        "Wipe light switches and door handles",
        "Tidy and straighten rooms",
        "Spot-clean cabinet fronts",
      ],
    },
    {
      id: "deep-clean",
      name: "Deep Cleans",
      description:
        "A thorough, top-to-bottom clean that reaches every corner. Perfect for a fresh start, seasonal refresh, or first-time service.",
      checklist: [
        "Everything in a recurring clean, plus:",
        "Clean inside the oven and microwave",
        "Wipe down inside cabinets and drawers",
        "Scrub tile grout and shower doors",
        "Wash baseboards and door frames",
        "Clean ceiling fans and light fixtures",
        "Detail kitchen and bathroom hardware",
        "Clean window sills and tracks",
        "Deep vacuum upholstered furniture",
      ],
    },
    {
      id: "move",
      name: "Move-In / Move-Out Cleans",
      description:
        "Start fresh or leave it spotless. A comprehensive clean designed to meet landlord and property management expectations.",
      checklist: [
        "Full deep clean of every room",
        "Clean inside all cabinets, closets, and drawers",
        "Clean inside refrigerator and oven",
        "Scrub all bathroom fixtures and tile",
        "Wash all window sills, blinds, and tracks",
        "Clean garage or utility areas (if included)",
        "Remove cobwebs throughout",
        "Polish fixtures and hardware",
      ],
    },
    {
      id: "commercial",
      name: "Office & Commercial Cleans",
      description:
        "A clean, professional space for your employees and customers. Flexible scheduling to work around your business hours.",
      checklist: [
        "Dust and wipe all desks, tables, and work surfaces",
        "Vacuum and mop all floor areas",
        "Clean and restock restrooms",
        "Empty all trash and recycling bins",
        "Wipe phones, keyboards, and shared equipment",
        "Clean break room and kitchen areas",
        "Spot-clean glass and entryway doors",
        "Flexible frequency: daily, weekly, or custom",
      ],
    },
  ],

  whyUs: [
    {
      icon: "user",
      label: "Same Cleaner Every Visit",
      description:
        "T Cleans is owner-operated — the same person cleans your home every time. No rotating crews, no strangers.",
    },
    {
      icon: "dollar",
      label: "Charged by the Job",
      description:
        "You get a flat quote before any work starts. No hourly billing, no surprises on the invoice.",
    },
    {
      icon: "quote",
      label: "Free Quotes, No Pressure",
      description:
        "Every quote is free with no obligation. Know exactly what you're paying before you commit.",
    },
    {
      icon: "calendar",
      label: "Flexible Scheduling",
      description:
        "Weekly, bi-weekly, monthly, or one-time — your schedule, your preference.",
    },
    {
      icon: "sparkle",
      label: "Detail-Oriented Cleaning",
      description:
        "Every job gets the same thorough, careful attention. Baseboards, fixtures, the spots most services skip.",
    },
  ],

  testimonials: [], // Add real testimonials — section is hidden until populated

  gallery: {
    heading: "The Work",
    images: [
      { src: "/images/gallery-before-1.jpeg", alt: "Shower floor — before cleaning" },
      { src: "/images/gallery-after-1.jpeg", alt: "Shower floor — after cleaning" },
    ],
  },

  serviceArea: {
    regionName: "Rogue Valley & Southern Oregon",
    regionDescription:
      "T Cleans serves homes and businesses across the Rogue Valley in Southern Oregon. From Grants Pass to Ashland and everywhere in between.",
    towns: [
      "Medford",
      "Central Point",
      "Jacksonville",
      "Talent",
      "Phoenix",
      "Ashland",
      "Eagle Point",
      "White City",
      "Grants Pass",
    ],
    travelNote:
      "Travel fees may apply for locations outside the core service area. Get in touch for details.", // PLACEHOLDER_TRAVEL
  },

  quoteForm: {
    heading: "Get a Free Quote",
    subheading:
      "Share details about your space and get a no-obligation quote.",
    formspreeId: "PLACEHOLDER_FORMSPREE", // Replace with real Formspree form ID
    serviceOptions: [
      "Recurring Clean",
      "Deep Clean",
      "Move-In / Move-Out",
      "Office / Commercial",
    ],
    frequencyOptions: ["One-time", "Weekly", "Bi-weekly", "Monthly"],
    submitLabel: "Get a Free Quote",
    successMessage:
      "Thanks! Your quote request has been sent. T Cleans will be in touch soon.",
    errorMessage:
      "Something went wrong. Please call 541-735-4265 or try again.",
  },

  faq: [
    {
      question: "How do you charge — by the hour or by the job?",
      answer:
        "By the job. You'll receive a flat quote before any work begins, so there are no surprises.",
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes — all supplies and equipment are provided. Product preferences are always welcome.",
    },
    {
      question: "Is T Cleans licensed?",
      answer:
        "Yes, T Cleans is a licensed cleaning service.",
    },
    {
      question: "How does the quote process work?",
      answer:
        "Fill out the form on the Contact page, call 541-735-4265, or send a text. Quotes are always free with no obligation.",
    },
    {
      question: "What does a cleaning cost?",
      answer:
        "Quotes start at a $150 base. Final pricing depends on the size and condition of the space. Every quote is free with no obligation.",
    },
    {
      question: "Do you offer one-time cleanings?",
      answer:
        "Absolutely. Deep cleans, move-in/move-out cleans, and one-time visits are all available.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "T Cleans serves Medford, Central Point, Jacksonville, Talent, Phoenix, Ashland, Eagle Point, White City, and Grants Pass in the Rogue Valley.",
    },
  ],

  hours: [
    { days: "Monday – Friday", hours: "7:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", hours: "Closed" },
  ],

  email: "T.cleans.rv@gmail.com",

  socials: [{ platform: "Facebook", href: "#" }], // Update with real Facebook URL

  footer: {
    quickLinksLabel: "Quick Links",
    contactLabel: "Contact",
  },

  seo: {
    ogImage: "/images/business-card.png",
    jsonLd: {
      type: ["LocalBusiness", "HouseCleaningService"],
      name: "T Cleans",
      telephone: "+1-541-735-4265",
      areaServed: [
        "Medford",
        "Central Point",
        "Jacksonville",
        "Talent",
        "Phoenix",
        "Ashland",
        "Eagle Point",
        "White City",
        "Grants Pass",
      ],
      openingHours: "Mo-Fr 07:00-17:00",
    },
  },
};
