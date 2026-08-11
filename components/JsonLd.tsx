import { siteContent } from "@/content/site";

export default function JsonLd() {
  const { seo, meta } = siteContent;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": seo.jsonLd.type,
    name: seo.jsonLd.name,
    description: meta.description,
    telephone: seo.jsonLd.telephone,
    areaServed: seo.jsonLd.areaServed.map((town) => ({
      "@type": "City",
      name: town,
    })),
    openingHours: seo.jsonLd.openingHours,
    address: {
      "@type": "PostalAddress",
      addressRegion: "OR",
      addressCountry: "US",
    },
    url: undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
