import type { ServiceItem } from "@/content/site";
import CTAButton from "./CTAButton";
import Sparkle from "./Sparkle";

type ServiceBandVariant = "white" | "plum" | "pink-tint";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  variant?: ServiceBandVariant;
}

const ghostNumerals = ["01", "02", "03", "04"];

export default function ServiceCard({
  service,
  index,
  variant = "white",
}: ServiceCardProps) {
  const isPlum = variant === "plum";
  const isPinkTint = variant === "pink-tint";

  const sectionBg = isPlum
    ? "bg-brand-plum"
    : isPinkTint
      ? "bg-brand-pink/[0.04]"
      : "bg-white";

  const textColor = isPlum ? "text-white" : "text-brand-ink";
  const bodyColor = isPlum ? "text-white/80" : "text-gray-600";
  const checklistColor = isPlum ? "text-white/90" : "text-gray-700";
  const sparkleColor = isPlum ? "text-white/40" : "text-brand-pink";
  const ghostColor = isPlum ? "text-white/[0.04]" : "text-brand-pink/[0.05]";

  const buttonVariant = isPlum ? "outline" : "primary";

  // Split checklist into two columns
  const mid = Math.ceil(service.checklist.length / 2);
  const colA = service.checklist.slice(0, mid);
  const colB = service.checklist.slice(mid);

  return (
    <section
      id={service.id}
      className={`relative overflow-hidden scroll-mt-24 py-20 md:py-28 ${sectionBg}`}
    >
      {/* Ghost numeral */}
      <div
        className={`pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[12rem] font-bold leading-none sm:text-[16rem] md:text-[20rem] ${ghostColor}`}
        aria-hidden="true"
      >
        {ghostNumerals[index] ?? String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Two-column on md+ */}
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
          {/* Left: name, description, CTA */}
          <div>
            <h2 className={`font-heading text-2xl font-bold md:text-3xl ${textColor}`}>
              {service.name}
            </h2>
            <p className={`mt-4 leading-relaxed ${bodyColor}`}>
              {service.description}
            </p>
            <div className="mt-8">
              <CTAButton
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                variant={buttonVariant}
              >
                Get a Quote
              </CTAButton>
            </div>
          </div>

          {/* Right: checklist in two sub-columns */}
          <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            <ul className="space-y-2">
              {colA.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 ${checklistColor}`}>
                  <Sparkle className={`mt-1 h-4 w-4 shrink-0 ${sparkleColor}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {colB.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 ${checklistColor}`}>
                  <Sparkle className={`mt-1 h-4 w-4 shrink-0 ${sparkleColor}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
