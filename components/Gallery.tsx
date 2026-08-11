"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const { gallery } = siteContent;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gated — renders nothing when the images array is empty
  if (gallery.images.length === 0) return null;

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>{gallery.heading}</SectionHeading>

        {/* Image grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-ink/0 transition-colors group-hover:bg-brand-ink/30" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/90 p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-h-[85vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-brand-pink transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + gallery.images.length) %
                    gallery.images.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-brand-ink/60 p-2 text-white hover:text-brand-pink transition-colors"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex + 1) % gallery.images.length
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-brand-ink/60 p-2 text-white hover:text-brand-pink transition-colors"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={gallery.images[lightboxIndex].src}
                alt={gallery.images[lightboxIndex].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-sm text-white/80">
              {gallery.images[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
