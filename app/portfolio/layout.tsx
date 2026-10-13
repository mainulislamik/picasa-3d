import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Portfolio, Before/After Benchmarks & Case Studies",
  description:
    "Examine sub-pixel before-and-after post-production benchmarks: high-end jewelry reflection polish, ghost mannequin apparel symmetry, and e-commerce catalog isolation.",
  keywords: [
    "photo retouching portfolio",
    "clipping path before after samples",
    "ghost mannequin samples",
    "jewelry retouching case study",
    "product photography editing gallery"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/portfolio",
  },
  openGraph: {
    title: "Commercial Portfolio & Client Benchmarks | Picasa Limited",
    description:
      "Sub-pixel precision zoom comparisons across fine jewelry, luxury fashion apparel, footwear, and consumer packaged goods.",
    url: "https://www.picasalimited.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Portfolio & Benchmarks | Picasa Limited",
    description:
      "Explore real-world client before-and-after post-production transformations by Picasa Limited.",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.picasalimited.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://www.picasalimited.com/portfolio"
        }
      ]
    },
    {
      "@type": "ImageGallery",
      "name": "Picasa Limited Commercial Retouching Portfolio",
      "description": "High-resolution before and after post-production examples covering fine jewelry, ghost mannequin apparel, footwear, and consumer goods.",
      "provider": {
        "@type": "Organization",
        "name": "Picasa Limited",
        "url": "https://www.picasalimited.com"
      }
    }
  ]
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      {children}
    </>
  );
}
