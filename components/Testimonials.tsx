import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { testimonials } = siteContent;

  // Gated — renders nothing when the array is empty
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>What Clients Say</SectionHeading>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-ink">
                {t.name}
                {t.location && (
                  <span className="font-normal text-gray-500">
                    {" "}&mdash; {t.location}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
