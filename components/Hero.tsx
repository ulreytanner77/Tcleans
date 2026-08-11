import { siteContent } from "@/content/site";
import CTAButton from "./CTAButton";
import Sparkle from "./Sparkle";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-brand-plum">
      {/* Scattered sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sparkle className="absolute top-[15%] left-[8%] h-6 w-6 text-brand-pink/10" />
        <Sparkle className="absolute top-[25%] right-[12%] h-4 w-4 text-brand-pink/[0.07]" />
        <Sparkle className="absolute bottom-[20%] left-[20%] h-5 w-5 text-brand-pink/[0.08]" />
        <Sparkle className="absolute top-[40%] left-[70%] h-3 w-3 text-brand-pink/[0.06]" />
        <Sparkle className="absolute bottom-[30%] right-[25%] h-8 w-8 text-brand-pink/[0.05]" />
        <Sparkle className="absolute top-[60%] left-[45%] h-4 w-4 text-brand-pink/[0.07]" />
        <Sparkle className="absolute bottom-[15%] right-[60%] h-5 w-5 text-brand-pink/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center animate-fade-in">
        <h1 className="font-heading text-hero font-bold text-white whitespace-pre-line">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sub text-white/80">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href={hero.primaryCtaHref}>{hero.primaryCta}</CTAButton>
          <CTAButton
            href={hero.secondaryCtaHref}
            variant="outline"
            ariaLabel={`Call T Cleans at ${siteContent.phone}`}
          >
            {hero.secondaryCta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
