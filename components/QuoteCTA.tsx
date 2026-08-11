import CTAButton from "./CTAButton";
import Sparkle from "./Sparkle";
import { siteContent } from "@/content/site";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-plum py-20">
      {/* Ambient sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sparkle className="absolute top-10 left-[10%] h-5 w-5 text-brand-pink/[0.08]" />
        <Sparkle className="absolute bottom-12 right-[15%] h-6 w-6 text-brand-pink/[0.06]" />
        <Sparkle className="absolute top-16 right-[45%] h-4 w-4 text-brand-pink/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-section font-bold text-white">
          Ready for a Cleaner Home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80 text-sub">
          Get a free, no-obligation quote. Charged by the job, not the hour.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
          <CTAButton
            href={`tel:${siteContent.phoneRaw}`}
            variant="outline"
            ariaLabel={`Call T Cleans at ${siteContent.phone}`}
          >
            Call {siteContent.phone}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
