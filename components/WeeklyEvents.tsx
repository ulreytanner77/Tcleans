import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";

export default function WeeklyEvents() {
  const { events } = siteContent;

  return (
    <section className="bg-charcoal-900 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading id="events">Weekly Events</SectionHeading>

        <div className="mt-12 grid gap-4">
          {events.map((event) => (
            <EventCard key={event.day} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
