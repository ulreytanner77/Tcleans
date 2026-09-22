import Link from "next/link";
import Sparkle from "@/components/Sparkle";
import SwooshDivider from "@/components/SwooshDivider";

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-plum pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-20 left-[12%] h-6 w-6 text-brand-pink/10" />
          <Sparkle className="absolute top-28 right-[18%] h-4 w-4 text-brand-pink/[0.07]" />
          <Sparkle className="absolute bottom-16 left-[30%] h-5 w-5 text-brand-pink/[0.08]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-hero font-bold text-white">404</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          <p className="mx-auto mt-6 max-w-2xl text-white/80 text-sub">
            This page doesn&apos;t exist or may have moved.
          </p>
        </div>
      </section>

      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-md px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Looking for cleaning services in the Rogue Valley? Head back to the homepage or get in touch for a free quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-brand-pink-deep px-8 py-3 font-heading font-bold text-white transition-transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-pink-deep px-8 py-3 font-heading font-bold text-brand-pink-deep transition-transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
