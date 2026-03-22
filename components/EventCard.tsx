import type { Event } from "@/content/site";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex gap-6 rounded-xl border border-charcoal-700 bg-charcoal-800 p-6 transition-colors hover:border-amber-500/40">
      {/* Day badge */}
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-amber-500/10 px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
          {event.day.slice(0, 3)}
        </span>
      </div>

      <div>
        <h4 className="font-heading text-lg font-semibold text-cream-50">
          {event.title}
        </h4>
        <p className="mt-1 text-sm font-medium text-amber-400">{event.time}</p>
        <p className="mt-2 text-sm text-warm-gray-400 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}
