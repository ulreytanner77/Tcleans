import type { Highlight } from "@/content/site";

interface HighlightCardProps {
  highlight: Highlight;
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    <div className="flex gap-6 rounded-xl border border-charcoal-700 bg-charcoal-800 p-6 transition-colors hover:border-amber-500/40">
      {/* Badge */}
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-amber-500/10 px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
          {highlight.label}
        </span>
      </div>

      <div>
        <h4 className="font-heading text-lg font-semibold text-cream-50">
          {highlight.title}
        </h4>
        <p className="mt-1 text-sm font-medium text-amber-400">
          {highlight.subtitle}
        </p>
        <p className="mt-2 text-sm text-warm-gray-400 leading-relaxed">
          {highlight.description}
        </p>
      </div>
    </div>
  );
}
