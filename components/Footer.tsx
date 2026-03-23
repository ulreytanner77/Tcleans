import { siteContent } from "@/content/site";

export default function Footer() {
  const { name, tagline, nav, socials, location, footer } = siteContent;

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-700">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl font-bold text-amber-400">
              {name}
            </span>
            <p className="mt-3 text-sm text-warm-gray-400 leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-100">
              {footer.quickLinksLabel}
            </h4>
            <ul className="space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-gray-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-100">
              {footer.contactLabel}
            </h4>
            <address className="space-y-2 text-sm not-italic text-warm-gray-400">
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>{location.phone}</p>
            </address>
            <div className="mt-4 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  className="text-sm text-warm-gray-400 transition-colors hover:text-amber-400"
                  aria-label={s.platform}
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-charcoal-700 pt-8 text-center">
          <p className="text-xs text-warm-gray-500">{footer.disclaimer}</p>
          <p className="mt-2 text-xs text-warm-gray-500">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
