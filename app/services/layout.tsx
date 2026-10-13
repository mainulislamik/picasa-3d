import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12 Core B2B Image Editing Services & Technical Specs",
  description:
    "Explore 12 specialized post-production disciplines: 100% hand-drawn clipping paths, ghost mannequin apparel symmetry, high-end jewelry retouching, and commercial video reels by 180+ craftsmen.",
  keywords: [
    "clipping path service",
    "ghost mannequin service",
    "jewelry retouching service",
    "ecommerce photo editing",
    "high volume photo editing",
    "vector conversion service",
    "shadow creation service",
    "color matching photo editing"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/services",
  },
  openGraph: {
    title: "12 Core B2B Image Editing Services & Specs | Picasa Limited",
    description:
      "Hand-drawn clipping paths (0.5px tolerance), 3D ghost mannequin drape, jewelry frequency separation, and high-volume e-commerce catalog standardization.",
    url: "https://www.picasalimited.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Core B2B Image Editing Services | Picasa Limited",
    description:
      "Precision post-production engineered for global fashion houses, Amazon aggregators, and commercial photo studios.",
  },
};

const serviceSchema = {
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
          "name": "Services",
          "item": "https://www.picasalimited.com/services"
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Commercial Image Post-Production",
      "provider": {
        "@type": "Organization",
        "name": "Picasa Limited",
        "url": "https://www.picasalimited.com"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Post-Production Disciplines",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Clipping Path & Multi-Paths",
              "description": "100% hand-drawn vector bezier curves with 0.5px tolerance for precision product isolation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ghost Mannequin & Apparel Symmetry",
              "description": "3D hollow-man symmetrical garment manipulation with realistic inner collar cavity depth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-End Jewelry Retouching",
              "description": "Non-destructive frequency separation, gemstone facet cleanup, and metallic specular glare polishing."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Batch Automation",
              "description": "Catalog normalization compliant with Amazon, Farfetch, and Shopify visual marketplace standards."
            }
          }
        ]
      }
    }
  ]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
