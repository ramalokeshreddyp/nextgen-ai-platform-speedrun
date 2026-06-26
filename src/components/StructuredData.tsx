export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NexFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-driven data automation platform for intelligent pipeline orchestration.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "19",
      highPrice: "109",
      offerCount: "3",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
