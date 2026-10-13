import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilateral Mutual NDA & Enterprise Security Protocols",
  description:
    "Review and execute Picasa Limited's enforceable Non-Disclosure Agreement. Comprehensive IP protection for pre-release fashion campaigns and commercial photography.",
  keywords: [
    "photo editing NDA",
    "confidential image post production",
    "image data protection agreement",
    "enterprise commercial NDA"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/nda",
  },
  openGraph: {
    title: "Bilateral Mutual NDA & Security Protocols | Picasa Limited",
    description:
      "Enterprise asset safeguards: air-gapped workstations, disabled external media ports, and enforceable international non-disclosure covenants.",
    url: "https://www.picasalimited.com/nda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilateral Mutual NDA | Picasa Limited",
    description:
      "Review confidentiality standards and sign your bilateral mutual NDA online.",
  },
};

const ndaSchema = {
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
          "name": "Non-Disclosure Agreement",
          "item": "https://www.picasalimited.com/nda"
        }
      ]
    }
  ]
};

export default function NdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ndaSchema) }}
      />
      {children}
    </>
  );
}
