// ── Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Event {
  day: string;
  title: string;
  time: string;
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
  name: string;
  tagline: string;
  nav: NavLink[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  menu: MenuCategory[];
  events: Event[];
  gallery: {
    heading: string;
    images: { src: string; alt: string }[];
  };
  hours: HoursEntry[];
  location: {
    address: string;
    city: string;
    phone: string;
    email: string;
  };
  socials: SocialLink[];
  footer: {
    disclaimer: string;
  };
}

// ── Content ──

export const siteContent: SiteContent = {
  name: "Northside Taproom",
  tagline: "Craft beer, good company, great neighborhood.",

  nav: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
  ],

  hero: {
    headline: "Your Neighborhood\nTaproom",
    subheadline:
      "Twenty rotating taps, wood-fired bites, and the warmest corner in the neighborhood. Come as you are.",
    primaryCta: "View Our Menu",
    secondaryCta: "Plan Your Visit",
  },

  about: {
    heading: "A Place to Gather",
    paragraphs: [
      "Northside Taproom opened its doors in 2019 with a simple mission: give the neighborhood a place to slow down, share a pint, and actually talk to each other. We're tucked into a converted brick warehouse on the corner of Elm & 4th — the kind of spot where everybody knows your order.",
      "Our twenty rotating taps showcase the best from local and regional craft breweries, alongside a curated selection of natural wines and house-made cocktails. Pair your drink with something from our wood-fired kitchen — think smoked wings, flatbreads, and the crispiest fries on this side of town.",
    ],
  },

  menu: [
    {
      title: "On Tap",
      items: [
        {
          name: "Northside IPA",
          description: "Citrus-forward, dry-hopped West Coast IPA",
          price: "$7",
          tag: "House",
        },
        {
          name: "Golden Hour Lager",
          description: "Crisp, clean Czech-style pilsner",
          price: "$6",
        },
        {
          name: "Dark Corner Stout",
          description: "Rich chocolate & coffee notes, smooth finish",
          price: "$8",
        },
        {
          name: "Seasonal Sour",
          description: "Rotating fruit-forward kettle sour",
          price: "$8",
          tag: "Rotating",
        },
      ],
    },
    {
      title: "From the Kitchen",
      items: [
        {
          name: "Smoked Wings",
          description: "Dry-rubbed, wood-smoked, choice of sauce",
          price: "$14",
          tag: "Popular",
        },
        {
          name: "Margherita Flatbread",
          description: "San Marzano, fresh mozz, basil, EVOO",
          price: "$13",
        },
        {
          name: "Taproom Fries",
          description: "Triple-cooked, garlic aioli, parmesan",
          price: "$9",
        },
        {
          name: "Smash Burger",
          description: "Double patty, American cheese, house pickles",
          price: "$15",
          tag: "Popular",
        },
      ],
    },
  ],

  events: [
    {
      day: "Monday",
      title: "Industry Night",
      time: "5 PM – Close",
      description:
        "Half-off drafts for service industry workers. Bring your paystub or work shirt.",
    },
    {
      day: "Wednesday",
      title: "Trivia Night",
      time: "7 PM – 9 PM",
      description:
        "Five rounds of general knowledge trivia. Winning team takes home a $50 bar tab.",
    },
    {
      day: "Thursday",
      title: "Vinyl & Vibes",
      time: "6 PM – 10 PM",
      description:
        "Local DJs spin vinyl while you sip. Different genre every week.",
    },
    {
      day: "Saturday",
      title: "Brunch & Brews",
      time: "11 AM – 2 PM",
      description:
        "Weekend brunch menu with bottomless mimosas and a special brunch beer flight.",
    },
  ],

  gallery: {
    heading: "Inside the Taproom",
    images: [
      { src: "/images/gallery-1.svg", alt: "Taproom interior with warm lighting and brick walls" },
      { src: "/images/gallery-2.svg", alt: "Row of craft beer taps at the bar" },
      { src: "/images/gallery-3.svg", alt: "Wood-fired flatbread fresh from the oven" },
      { src: "/images/gallery-4.svg", alt: "Friends laughing over pints at a high-top table" },
      { src: "/images/gallery-5.svg", alt: "Bartender pouring a golden lager from the tap" },
      { src: "/images/gallery-6.svg", alt: "Outdoor patio seating on a summer evening" },
    ],
  },

  hours: [
    { days: "Monday – Thursday", hours: "4 PM – 12 AM" },
    { days: "Friday", hours: "3 PM – 2 AM" },
    { days: "Saturday", hours: "11 AM – 2 AM" },
    { days: "Sunday", hours: "11 AM – 10 PM" },
  ],

  location: {
    address: "742 Elm Street",
    city: "Portland, OR 97209",
    phone: "(503) 555-0174",
    email: "hello@northsidetaproom.com",
  },

  socials: [
    { platform: "Instagram", href: "#" },
    { platform: "Facebook", href: "#" },
    { platform: "X", href: "#" },
  ],

  footer: {
    disclaimer:
      "This is a fictional demo website created as a portfolio piece. Northside Taproom is not a real business.",
  },
};
