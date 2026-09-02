import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "@/content/site";
import Sparkle from "@/components/Sparkle";
import SwooshDivider from "@/components/SwooshDivider";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: {
    absolute: "About T Cleans — Owner-Operated Cleaning in Southern Oregon",
  },
  description:
    "T Cleans is an owner-operated cleaning service in Southern Oregon. Same cleaner every visit, detail-oriented, and charged by the job.",
};

export default function AboutPage() {
  const { intro, whyUs } = siteContent;

  return (
    <>
      {/* Hero header band */}
      <section className="relative overflow-hidden bg-brand-plum pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-20 left-[12%] h-6 w-6 text-brand-pink/10" />
          <Sparkle className="absolute top-28 right-[18%] h-4 w-4 text-brand-pink/[0.07]" />
          <Sparkle className="absolute bottom-16 left-[30%] h-5 w-5 text-brand-pink/[0.08]" />
          <Sparkle className="absolute top-24 right-[45%] h-3 w-3 text-brand-pink/[0.06]" />
          <Sparkle className="absolute bottom-12 right-[25%] h-7 w-7 text-brand-pink/[0.05]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-section font-bold text-white">
            {intro.heading}
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
        </div>
      </section>

      {/* Swoosh: plum → white */}
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />

      {/* Owner story */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Ghost letter */}
        <div
          className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 select-none font-heading text-[16rem] font-bold leading-none sm:text-[20rem] text-brand-pink/[0.04]"
          aria-hidden="true"
        >
          T
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 animate-slide-up">
              <Image
                src={intro.image.src}
                alt={intro.image.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 animate-slide-up">
              {intro.paragraphs.map((p, i) => (
                <p key={i} className="text-sub text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Swoosh: white → plum */}
      <SwooshDivider fromColor="#ffffff" toColor="var(--color-brand-plum)" flip />

      {/* What Sets T Cleans Apart — plum band */}
      <section className="relative overflow-hidden bg-brand-plum py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-16 right-[10%] h-5 w-5 text-brand-pink/[0.08]" />
          <Sparkle className="absolute bottom-20 left-[15%] h-4 w-4 text-brand-pink/[0.06]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-section font-bold text-white">
              What Sets T Cleans Apart
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <Sparkle className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swoosh: plum → white */}
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />

      {/* Trust signals */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Ghost letter */}
        <div
          className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[14rem] font-bold leading-none sm:text-[18rem] text-brand-pink/[0.04]"
          aria-hidden="true"
        >
          &amp;
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-section font-bold text-brand-ink">
            Trust & Reliability
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8 text-left">
              <Sparkle className="mb-4 h-6 w-6 text-brand-pink" />
              <h3 className="font-heading text-lg font-bold text-brand-ink">
                Licensed
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                T Cleans is a licensed cleaning service.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 text-left">
              <Sparkle className="mb-4 h-6 w-6 text-brand-pink" />
              <h3 className="font-heading text-lg font-bold text-brand-ink">
                All Supplies Included
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                All cleaning supplies and equipment included. Product preferences are always welcome.
              </p>
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
