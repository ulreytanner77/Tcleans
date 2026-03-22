"use client";

import { useState, useEffect } from "react";
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
        scrolled ? "bg-charcoal-950/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold text-amber-400">
          {siteContent.name}
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {siteContent.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-cream-100 transition-colors hover:text-amber-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-cream-50 transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream-50 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream-50 transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 bg-charcoal-950/95 px-6 pb-6 backdrop-blur-sm">
          {siteContent.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-wide text-cream-100 transition-colors hover:text-amber-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
