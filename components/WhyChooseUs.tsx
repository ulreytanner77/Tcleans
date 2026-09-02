import { siteContent } from "@/content/site";
import ScrollReveal from "./ScrollReveal";
import Sparkle from "./Sparkle";

function IconUser({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconDollar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function IconQuote({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  user: IconUser,
  dollar: IconDollar,
  quote: IconQuote,
  calendar: IconCalendar,
  sparkle: Sparkle,
};

export default function WhyChooseUs() {
  const { whyUs } = siteContent;

  return (
    <section className="relative overflow-hidden bg-brand-plum py-24">
      {/* Ambient sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sparkle className="absolute top-16 left-[8%] h-5 w-5 text-brand-pink/[0.08]" />
        <Sparkle className="absolute bottom-20 right-[12%] h-4 w-4 text-brand-pink/[0.06]" />
        <Sparkle className="absolute top-32 right-[40%] h-6 w-6 text-brand-pink/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-section font-bold text-white">
            Why Choose T Cleans
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkle;
            return (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="mb-4">
                    <Icon className="h-6 w-6 text-brand-pink" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
