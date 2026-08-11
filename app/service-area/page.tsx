import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import Sparkle from "@/components/Sparkle";
import SwooshDivider from "@/components/SwooshDivider";
import CTAButton from "@/components/CTAButton";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Service Area — Medford, Ashland, Grants Pass & Rogue Valley | T Cleans",
  },
  description:
    "T Cleans serves Medford, Central Point, Jacksonville, Talent, Phoenix, Ashland, Eagle Point, White City, and Grants Pass in Southern Oregon.",
};

export default function ServiceAreaPage() {
  const { serviceArea, phone, phoneRaw } = siteContent;

  return (
    <>
      {/* Hero header band */}
      <section className="relative overflow-hidden bg-brand-plum pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-20 left-[10%] h-6 w-6 text-brand-pink/10" />
          <Sparkle className="absolute top-28 right-[20%] h-4 w-4 text-brand-pink/[0.07]" />
          <Sparkle className="absolute bottom-14 left-[40%] h-5 w-5 text-brand-pink/[0.08]" />
          <Sparkle className="absolute bottom-20 right-[35%] h-3 w-3 text-brand-pink/[0.06]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-section font-bold text-white">
            {serviceArea.regionName}
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          <p className="mx-auto mt-6 max-w-2xl text-white/80 text-sub">
            {serviceArea.regionDescription}
          </p>
        </div>
      </section>

      {/* Swoosh: plum → white */}
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />

      {/* Town grid */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Ghost numeral */}
        <div
          className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-heading text-[14rem] font-bold leading-none sm:text-[18rem] md:text-[22rem] text-brand-pink/[0.04]"
          aria-hidden="true"
        >
          OR
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceArea.towns.map((town) => (
              <div
                key={town}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-5"
              >
                <Sparkle className="h-4 w-4 shrink-0 text-brand-pink" />
                <span className="font-heading text-lg font-bold text-brand-ink">
                  {town}
                </span>
              </div>
            ))}
          </div>

          {/* Travel note */}
          <div className="mt-16 rounded-2xl bg-brand-pink/[0.04] p-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              {serviceArea.travelNote}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/contact">Get a Free Quote</CTAButton>
              <CTAButton
                href={`tel:${phoneRaw}`}
                variant="outline"
                ariaLabel={`Call T Cleans at ${phone}`}
              >
                Call {phone}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Swoosh: white → plum */}
      <SwooshDivider fromColor="#ffffff" toColor="var(--color-brand-plum)" flip />

      <QuoteCTA />
    </>
  );
}
