import Link from "next/link";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Sparkle from "./Sparkle";

export default function ServicesOverview() {
  const { services } = siteContent;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Ghost letter */}
      <div
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[14rem] font-bold leading-none sm:text-[18rem] text-brand-pink/[0.04]"
        aria-hidden="true"
      >
        04
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading>What I Do</SectionHeading>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
}
