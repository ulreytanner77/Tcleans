import type { OfferingItem } from "@/content/site";

interface OfferingCardProps {
  item: OfferingItem;
}

export default function OfferingCard({ item }: OfferingCardProps) {
  return (
    <div className="group rounded-xl border border-charcoal-700 bg-charcoal-800 p-6 transition-colors hover:border-amber-500/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-heading text-lg font-semibold text-cream-50">
            {item.name}
          </h4>
          {item.tag && (
            <span className="mt-1 inline-block rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              {item.tag}
            </span>
          )}
        </div>
        <span className="text-lg font-semibold text-amber-400 shrink-0">
          {item.price}
        </span>
      </div>
      <p className="mt-3 text-sm text-warm-gray-400 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
