"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-brand-plum/95 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" aria-label="T Cleans home">
          <Image
            src="/images/logo.png"
            alt="T Cleans"
            width={195}
            height={190}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {siteContent.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-brand-ink hover:text-brand-pink-deep"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Phone */}
          <a
            href={`tel:${siteContent.phoneRaw}`}
            className={`text-sm tracking-wide transition-colors ${
              scrolled
                ? "text-brand-ink hover:text-brand-pink-deep"
                : "text-white/90 hover:text-white"
            }`}
            aria-label={`Call T Cleans at ${siteContent.phone}`}
          >
            {siteContent.phone}
          </a>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-lg bg-brand-pink-deep px-5 py-2.5 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${
              scrolled ? "bg-brand-ink" : "bg-white"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-200 ${
              scrolled ? "bg-brand-ink" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-200 ${
              scrolled ? "bg-brand-ink" : "bg-white"
            } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`flex flex-col gap-4 px-6 pb-6 ${
            scrolled ? "bg-white/95" : "bg-brand-plum/95"
          } backdrop-blur-sm`}
        >
          {siteContent.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-brand-ink hover:text-brand-pink-deep"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteContent.phoneRaw}`}
            onClick={() => setMenuOpen(false)}
            className={`block text-sm tracking-wide transition-colors ${
              scrolled
                ? "text-brand-ink hover:text-brand-pink-deep"
                : "text-white/90 hover:text-white"
            }`}
            aria-label={`Call T Cleans at ${siteContent.phone}`}
          >
            {siteContent.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block rounded-lg bg-brand-pink-deep px-5 py-2.5 text-center text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
