import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
};

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
                  Send a text
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
                {socials.map((s) => {
                  const Icon = socialIcons[s.platform];
                  return (
                    <a
                      key={s.platform}
                      href={s.href}
                      className="text-white/80 transition-colors hover:text-brand-pink"
                      aria-label={`${name} on ${s.platform}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon ? (
                        <>
                          <Icon className="h-5 w-5" />
                          <span className="sr-only">{s.platform}</span>
                        </>
                      ) : (
                        s.platform
                      )}
                    </a>
                  );
                })}
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
