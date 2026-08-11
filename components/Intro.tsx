import Image from "next/image";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Intro() {
  const { intro } = siteContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>{intro.heading}</SectionHeading>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
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
  );
}
