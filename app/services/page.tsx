import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import SwooshDivider from "@/components/SwooshDivider";
import Sparkle from "@/components/Sparkle";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Cleaning Services — Deep Clean, Move Out, Recurring | T Cleans Medford",
  },
  description:
    "Recurring, deep clean, move-in/move-out, and commercial cleaning services in Medford and the Rogue Valley. See what's included and get a free quote.",
};

const bandVariants = ["white", "plum", "white", "pink-tint"] as const;

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      {/* Hero header band */}
      <section className="relative overflow-hidden bg-brand-plum pt-32 pb-20">
        {/* Scattered sparkles at low opacity */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-20 left-[10%] h-6 w-6 text-brand-pink/10" />
          <Sparkle className="absolute top-28 right-[15%] h-4 w-4 text-brand-pink/[0.07]" />
          <Sparkle className="absolute bottom-16 left-[25%] h-5 w-5 text-brand-pink/[0.08]" />
          <Sparkle className="absolute top-24 left-[55%] h-3 w-3 text-brand-pink/[0.06]" />
          <Sparkle className="absolute bottom-20 right-[30%] h-7 w-7 text-brand-pink/[0.05]" />
          <Sparkle className="absolute top-36 right-[50%] h-4 w-4 text-brand-pink/[0.09]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-section font-bold text-white">
            Cleaning Services
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          <p className="mx-auto mt-6 max-w-2xl text-white/80 text-sub">
            Every service comes with a free, no-obligation quote. Charged by the job, not the hour.
          </p>
        </div>
      </section>

      {/* Swoosh: plum hero → white first band */}
      <SwooshDivider
        fromColor="var(--color-brand-plum)"
        toColor="#ffffff"
      />

      {/* Service bands */}
      {services.map((service, i) => {
        const variant = bandVariants[i] ?? "white";
        const nextVariant = bandVariants[i + 1];

        // Determine if we need a swoosh after this band
        const needsSwooshAfter =
          (variant === "white" && nextVariant === "plum") ||
          (variant === "plum" && nextVariant === "white");

        const swooshFrom =
          variant === "plum" ? "var(--color-brand-plum)" : "#ffffff";
        const swooshTo =
          nextVariant === "plum" ? "var(--color-brand-plum)" : "#ffffff";

        return (
          <div key={service.id}>
            <ServiceCard service={service} index={i} variant={variant} />
            {needsSwooshAfter && (
              <SwooshDivider fromColor={swooshFrom} toColor={swooshTo} />
            )}
          </div>
        );
      })}

      <QuoteCTA />
    </>
  );
}
