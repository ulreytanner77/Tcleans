import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

export default function Footer() {
  const { name, tagline, nav, socials, phone, phoneRaw, email, serviceArea, footer } =
    siteContent;

  return (
    <footer className="bg-brand-plum text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="T Cleans"
              width={195}
              height={190}
              className="h-16 w-auto"
            />
            <p className="mt-3 text-sm italic leading-relaxed">{tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {footer.quickLinksLabel}
            </h4>
            <ul className="space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {footer.contactLabel}
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${phoneRaw}`}
                  className="transition-colors hover:text-brand-pink"
                  aria-label={`Call T Cleans at ${phone}`}
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`sms:${phoneRaw}`}
                  className="transition-colors hover:text-brand-pink"
                  aria-label={`Text T Cleans at ${phone}`}
                >
                  Text me
                </a>
              </p>
              {email !== "PLACEHOLDER_EMAIL" && (
                <p>
                  <a
                    href={`mailto:${email}`}
                    className="transition-colors hover:text-brand-pink"
                  >
                    {email}
                  </a>
                </p>
              )}
              <div className="mt-4 flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    className="text-sm transition-colors hover:text-brand-pink"
                    aria-label={`${name} on ${s.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Service Area
            </h4>
            <p className="text-sm leading-relaxed">
              {serviceArea.towns.join(" · ")}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
