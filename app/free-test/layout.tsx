import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 3 Free Test Images Edited | 4-Hour Zero-Risk Pilot",
  description:
    "Test Picasa Limited's sub-pixel pen-tool accuracy and turnaround speed with zero obligation. Submit 3 test images today — returned within 4-12 hours with full layered PSDs.",
  keywords: [
    "free clipping path test",
    "free photo retouching trial",
    "sample image editing",
    "risk free photo editing pilot"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/free-test",
  },
  openGraph: {
    title: "Get 3 Free Test Images Edited in 4 Hours | Picasa Limited",
    description:
      "Zero credit card required. Experience sub-pixel accuracy, clipping paths, and ghost mannequin draping on your actual product shots.",
    url: "https://www.picasalimited.com/free-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get 3 Free Test Images Edited | Picasa Limited",
    description:
      "Upload 3 test files and verify our Dhaka studio craftsmanship first-hand.",
  },
};

const freeTestSchema = {
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
          "name": "Free Test Trial",
          "item": "https://www.picasalimited.com/free-test"
        }
      ]
    }
  ]
};

export default function FreeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTestSchema) }}
      />
      {children}
    </>
  );
}
