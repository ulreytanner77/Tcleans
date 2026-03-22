import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";

export default function HoursLocation() {
  const { hours, location } = siteContent;

  return (
    <section className="bg-charcoal-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="visit">Plan Your Visit</SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Hours */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-amber-400 mb-6">
              Hours
            </h3>
            <table className="w-full">
              <tbody>
                {hours.map((entry) => (
                  <tr
                    key={entry.days}
                    className="border-b border-charcoal-700 last:border-0"
                  >
                    <td className="py-3 text-cream-100">{entry.days}</td>
                    <td className="py-3 text-right text-cream-200">
                      {entry.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Location & map placeholder */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-amber-400 mb-6">
              Find Us
            </h3>

            {/* Map placeholder */}
            <div className="mb-6 flex aspect-[16/10] items-center justify-center rounded-xl border border-charcoal-700 bg-charcoal-800">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mx-auto mb-2 text-warm-gray-500"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm text-warm-gray-500">
                  Interactive map would go here
                </p>
              </div>
            </div>

            <address className="space-y-2 not-italic text-cream-200">
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {location.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${location.email}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {location.email}
                </a>
              </p>
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={`tel:${location.phone.replace(/\D/g, "")}`}>
                Call Us
              </CTAButton>
              <CTAButton href="#" variant="outline">
                Get Directions
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
