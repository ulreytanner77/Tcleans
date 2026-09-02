import Link from "next/link";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import Sparkle from "./Sparkle";

export default function ServiceAreaPreview() {
  const { serviceArea } = siteContent;

  return (
    <section className="bg-white bg-dotted py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionHeading>Serving the Rogue Valley</SectionHeading>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {serviceArea.towns.map((town, i) => (
            <ScrollReveal key={town} delay={i * 60}>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-ink">
                <Sparkle className="h-3 w-3 text-brand-pink" />
                {town}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/service-area"
            className="text-sm font-semibold text-brand-pink-deep hover:underline"
          >
            View full service area &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
