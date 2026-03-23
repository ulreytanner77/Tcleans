// ── Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface OfferingItem {
  name: string;
  description: string;
  price: string;
  tag?: string; // e.g. "Popular", "New", "Seasonal"
}

export interface OfferingCategory {
  title: string;
  items: OfferingItem[];
}

export interface Highlight {
  label: string; // Short badge text (e.g. "Mon", "01", "New")
  title: string;
  subtitle: string; // Secondary info (e.g. time, price range)
  description: string;
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

  // ── Page metadata (<head>) ──
  meta: {
    title: string;
    description: string;
  };

  // ── Toggle sections on/off ──
  sections: {
    intro: boolean;
    offerings: boolean;
    highlights: boolean;
    gallery: boolean;
    visit: boolean;
  };

  // ── Navigation ──
  // Update these to match whichever sections are enabled above.
  nav: NavLink[];

  // ── Hero ──
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string; // Path to hero background (e.g. "/images/hero-bg.svg")
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
  };

  // ── Intro ──
  intro: {
    heading: string;
    image: { src: string; alt: string };
    paragraphs: string[];
  };

  // ── Offerings (services, menu items, packages, etc.) ──
  offerings: {
    heading: string;
    categories: OfferingCategory[];
  };

  // ── Highlights (events, features, promotions, etc.) ──
  highlights: {
    heading: string;
    items: Highlight[];
  };

  // ── Gallery ──
  gallery: {
    heading: string;
    images: { src: string; alt: string }[];
  };

  // ── Visit / Contact ──
  visit: {
    heading: string;
    hoursLabel: string;
    locationLabel: string;
    callCta: string;
    directionsCta: string;
  };

  hours: HoursEntry[];

  location: {
    address: string;
    city: string;
    phone: string;
    email: string;
  };

  // ── Social links ──
  socials: SocialLink[];

  // ── Footer ──
  footer: {
    quickLinksLabel: string;
    contactLabel: string;
    disclaimer: string;
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// EXAMPLE CONTENT — Replace everything below with your business details.
// Images go in /public/images/. Update paths to match your filenames.
// ══════════════════════════════════════════════════════════════════════════════

export const siteContent: SiteContent = {
  name: "The Corner Spot",
  tagline: "Great coffee, good people, your neighborhood.",

  meta: {
    title: "The Corner Spot — Coffee & Community",
    description:
      "Locally roasted coffee, fresh pastries, and a warm welcome. Visit The Corner Spot in Austin, TX.",
  },

  // Toggle sections on/off. Set to false to hide a section.
  sections: {
    intro: true,
    offerings: true,
    highlights: true,
    gallery: true,
    visit: true,
  },

  nav: [
    { label: "About", href: "#intro" },
    { label: "Menu", href: "#offerings" },
    { label: "Specials", href: "#highlights" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
  ],

  hero: {
    headline: "Your Neighborhood\nCoffee Shop",
    subheadline:
      "Locally roasted coffee, fresh-baked pastries, and the warmest corner in the neighborhood. Come as you are.",
    backgroundImage: "/images/hero-bg.svg",
    primaryCta: "See Our Menu",
    primaryCtaHref: "#offerings",
    secondaryCta: "Plan Your Visit",
    secondaryCtaHref: "#visit",
  },

  intro: {
    heading: "Our Story",
    image: { src: "/images/about.svg", alt: "Inside our shop" },
    paragraphs: [
      "The Corner Spot opened in 2020 with a simple idea: give the neighborhood a place to slow down, grab a great cup of coffee, and connect with the people around you. We're a small, independently owned shop on the corner of Main & 3rd — the kind of place where the baristas know your name.",
      "We source our beans from local roasters, bake our pastries in-house every morning, and keep things simple. Whether you're here for a quick espresso or settling in for the afternoon with a book, you're always welcome.",
    ],
  },

  offerings: {
    heading: "Our Menu",
    categories: [
      {
        title: "Coffee & Drinks",
        items: [
          {
            name: "House Drip",
            description: "Single-origin, medium roast, brewed fresh every hour",
            price: "$3",
            tag: "Popular",
          },
          {
            name: "Cortado",
            description: "Double espresso with equal parts steamed milk",
            price: "$4.50",
          },
          {
            name: "Cold Brew",
            description: "Slow-steeped 18 hours, smooth and bold",
            price: "$5",
          },
          {
            name: "Seasonal Latte",
            description: "Rotating flavors made with house-made syrups",
            price: "$5.50",
            tag: "Seasonal",
          },
        ],
      },
      {
        title: "From the Kitchen",
        items: [
          {
            name: "Avocado Toast",
            description: "Sourdough, smashed avocado, chili flakes, sea salt",
            price: "$9",
            tag: "Popular",
          },
          {
            name: "Breakfast Sandwich",
            description: "Farm egg, cheddar, arugula on a brioche bun",
            price: "$8",
          },
          {
            name: "Banana Bread",
            description: "House-baked, warm, with salted butter",
            price: "$4",
          },
          {
            name: "Grain Bowl",
            description: "Quinoa, roasted veggies, tahini dressing, soft egg",
            price: "$12",
          },
        ],
      },
    ],
  },

  highlights: {
    heading: "What's Happening",
    items: [
      {
        label: "Mon",
        title: "Open Mic Morning",
        subtitle: "7 AM – 10 AM",
        description:
          "Kick off the week with live acoustic sets from local musicians. Grab a coffee, grab a seat.",
      },
      {
        label: "Wed",
        title: "Latte Art Wednesday",
        subtitle: "All Day",
        description:
          "Our baristas pull out the stops. Order any latte and get a work of art in your cup.",
      },
      {
        label: "Fri",
        title: "First Friday Pop-Up",
        subtitle: "5 PM – 8 PM",
        description:
          "Local artists and vendors set up shop. Extended evening hours with wine and snacks.",
      },
      {
        label: "Sat",
        title: "Weekend Brunch",
        subtitle: "9 AM – 2 PM",
        description:
          "Expanded brunch menu with bottomless drip coffee and fresh-squeezed juice.",
      },
    ],
  },

  gallery: {
    heading: "Our Space",
    images: [
      { src: "/images/gallery-1.svg", alt: "Bright interior with natural wood and plants" },
      { src: "/images/gallery-2.svg", alt: "Espresso machine pulling a perfect shot" },
      { src: "/images/gallery-3.svg", alt: "Fresh pastries displayed on the counter" },
      { src: "/images/gallery-4.svg", alt: "Customers chatting at a communal table" },
      { src: "/images/gallery-5.svg", alt: "Barista crafting a latte with care" },
      { src: "/images/gallery-6.svg", alt: "Outdoor seating on a sunny afternoon" },
    ],
  },

  visit: {
    heading: "Come See Us",
    hoursLabel: "Hours",
    locationLabel: "Find Us",
    callCta: "Call Us",
    directionsCta: "Get Directions",
  },

  hours: [
    { days: "Monday – Friday", hours: "6 AM – 6 PM" },
    { days: "Saturday", hours: "7 AM – 5 PM" },
    { days: "Sunday", hours: "8 AM – 3 PM" },
  ],

  location: {
    address: "210 Main Street",
    city: "Austin, TX 78701",
    phone: "(512) 555-0142",
    email: "hello@thecornerspot.com",
  },

  socials: [
    { platform: "Instagram", href: "#" },
    { platform: "Facebook", href: "#" },
    { platform: "X", href: "#" },
  ],

  footer: {
    quickLinksLabel: "Quick Links",
    contactLabel: "Contact",
    disclaimer:
      "This is an example website built with the Local Business Starter template. The Corner Spot is not a real business.",
  },
};
