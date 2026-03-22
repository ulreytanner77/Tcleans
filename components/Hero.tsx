import { siteContent } from "@/content/site";
import CTAButton from "./CTAButton";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.svg)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal-950/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center animate-fade-in">
        <h1 className="font-heading text-hero font-bold text-cream-50 whitespace-pre-line">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sub text-cream-200">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="#menu">{hero.primaryCta}</CTAButton>
          <CTAButton href="#visit" variant="outline">
            {hero.secondaryCta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
