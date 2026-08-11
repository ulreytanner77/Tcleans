import { siteContent } from "@/content/site";
import Sparkle from "./Sparkle";

export default function WhyChooseUs() {
  const { whyUs } = siteContent;

  return (
    <section className="relative overflow-hidden bg-brand-plum py-24">
      {/* Ambient sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Sparkle className="absolute top-16 left-[8%] h-5 w-5 text-brand-pink/[0.08]" />
        <Sparkle className="absolute bottom-20 right-[12%] h-4 w-4 text-brand-pink/[0.06]" />
        <Sparkle className="absolute top-32 right-[40%] h-6 w-6 text-brand-pink/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-section font-bold text-white">
            Why Choose T Cleans
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              <div className="mb-4">
                <Sparkle className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
