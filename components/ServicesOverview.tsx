import Link from "next/link";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import Sparkle from "./Sparkle";

export default function ServicesOverview() {
  const { services } = siteContent;

  return (
    <section className="bg-white bg-dotted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>Services</SectionHeading>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <Link
                href={`/services#${service.id}`}
                className="group block rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3">
                  <Sparkle className="h-5 w-5 text-brand-pink group-hover:text-brand-pink-deep transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-ink group-hover:text-brand-pink-deep transition-colors">
                  {service.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-pink-deep">
                  Learn more &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
