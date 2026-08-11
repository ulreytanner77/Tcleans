import type { Metadata } from "next";
import { Suspense } from "react";
import { siteContent } from "@/content/site";
import Sparkle from "@/components/Sparkle";
import SwooshDivider from "@/components/SwooshDivider";
import QuoteForm from "@/components/QuoteForm";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Free Quote — T Cleans House Cleaning Medford OR",
  },
  description:
    "Get a free, no-obligation cleaning quote from T Cleans. Serving Medford, Ashland, Grants Pass, and the Rogue Valley.",
};

export default function ContactPage() {
  const { quoteForm, phone, phoneRaw, email, hours, socials, faq } = siteContent;

  return (
    <>
      {/* Hero header band */}
      <section className="relative overflow-hidden bg-brand-plum pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Sparkle className="absolute top-20 left-[8%] h-6 w-6 text-brand-pink/10" />
          <Sparkle className="absolute top-28 right-[15%] h-4 w-4 text-brand-pink/[0.07]" />
          <Sparkle className="absolute bottom-14 left-[25%] h-5 w-5 text-brand-pink/[0.08]" />
          <Sparkle className="absolute bottom-20 right-[40%] h-7 w-7 text-brand-pink/[0.05]" />
          <Sparkle className="absolute top-36 left-[55%] h-3 w-3 text-brand-pink/[0.06]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-section font-bold text-white">
            {quoteForm.heading}
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
          <p className="mx-auto mt-6 max-w-2xl text-white/80 text-sub">
            {quoteForm.subheading}
          </p>
        </div>
      </section>

      {/* Swoosh: plum → white */}
      <SwooshDivider fromColor="var(--color-brand-plum)" toColor="#ffffff" />

      {/* Form + contact sidebar */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Ghost letter */}
        <div
          className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[14rem] font-bold leading-none sm:text-[18rem] text-brand-pink/[0.04]"
          aria-hidden="true"
        >
          ?
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-gray-100" />}>
                <QuoteForm />
              </Suspense>
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-ink">
                  Call or Text
                </h3>
                <div className="mt-3 space-y-2">
                  <a
                    href={`tel:${phoneRaw}`}
                    className="block text-brand-pink-deep font-semibold hover:underline"
                    aria-label={`Call T Cleans at ${phone}`}
                  >
                    {phone}
                  </a>
                  <a
                    href={`sms:${phoneRaw}`}
                    className="block text-sm text-gray-600 hover:text-brand-pink-deep"
                    aria-label={`Text T Cleans at ${phone}`}
                  >
                    Send a text message
                  </a>
                </div>
              </div>

              {/* Email */}
              {email !== "PLACEHOLDER_EMAIL" && (
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-ink">
                    Email
                  </h3>
                  <a
                    href={`mailto:${email}`}
                    className="mt-3 block text-brand-pink-deep font-semibold hover:underline"
                  >
                    {email}
                  </a>
                </div>
              )}

              {/* Hours */}
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-ink">
                  Availability
                </h3>
                <table className="mt-3 w-full text-sm">
                  <tbody>
                    {hours.map((entry) => (
                      <tr key={entry.days} className="border-b border-gray-100 last:border-0">
                        <td className="py-2 text-gray-700">{entry.days}</td>
                        <td className="py-2 text-right text-gray-600">{entry.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Social */}
              {socials.length > 0 && (
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-ink">
                    Follow Along
                  </h3>
                  <div className="mt-3 flex gap-4">
                    {socials.map((s) => (
                      <a
                        key={s.platform}
                        href={s.href}
                        className="text-sm text-gray-600 transition-colors hover:text-brand-pink-deep"
                        aria-label={`T Cleans on ${s.platform}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section — pink-tint band */}
      {faq.length > 0 && (
        <section className="relative overflow-hidden bg-brand-pink/[0.04] py-24">
          {/* Ghost letter */}
          <div
            className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-heading text-[14rem] font-bold leading-none sm:text-[18rem] text-brand-pink/[0.05]"
            aria-hidden="true"
          >
            FAQ
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-section font-bold text-brand-ink">
                Common Questions
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
            </div>

            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white p-8">
                  <div className="flex items-start gap-3">
                    <Sparkle className="mt-1 h-4 w-4 shrink-0 text-brand-pink" />
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-ink">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Swoosh: white/pink-tint → plum */}
      <SwooshDivider fromColor="#ffffff" toColor="var(--color-brand-plum)" flip />

      <QuoteCTA />
    </>
  );
}
