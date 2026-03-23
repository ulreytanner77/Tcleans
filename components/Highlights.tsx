import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import HighlightCard from "./HighlightCard";

export default function Highlights() {
  const { highlights } = siteContent;

  return (
    <section className="bg-charcoal-900 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading id="highlights">{highlights.heading}</SectionHeading>

        <div className="mt-12 grid gap-4">
          {highlights.items.map((highlight) => (
            <HighlightCard key={highlight.label} highlight={highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
