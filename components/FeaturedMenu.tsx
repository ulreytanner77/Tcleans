import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";

export default function FeaturedMenu() {
  const { menu } = siteContent;

  return (
    <section className="bg-charcoal-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="menu">Featured Menu</SectionHeading>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {menu.map((category) => (
            <div key={category.title}>
              <h3 className="font-heading text-xl font-semibold text-amber-400 mb-6">
                {category.title}
              </h3>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
