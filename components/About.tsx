import Image from "next/image";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about } = siteContent;

  return (
    <section className="bg-charcoal-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="about">{about.heading}</SectionHeading>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl animate-slide-up">
            <Image
              src="/images/about.svg"
              alt="Inside Northside Taproom"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 animate-slide-up">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-sub text-cream-200 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
