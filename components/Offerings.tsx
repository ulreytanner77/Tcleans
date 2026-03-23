import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import OfferingCard from "./OfferingCard";

export default function Offerings() {
  const { offerings } = siteContent;

  return (
    <section className="bg-charcoal-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="offerings">{offerings.heading}</SectionHeading>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {offerings.categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-heading text-xl font-semibold text-amber-400 mb-6">
                {category.title}
              </h3>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <OfferingCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
