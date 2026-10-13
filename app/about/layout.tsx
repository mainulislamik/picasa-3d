import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Picasa Limited | 180+ Craftsmen Dhaka Post-Production Studio",
  description:
    "Founded in 2016 in Mohammadpur, Dhaka. Over 180 full-time Photoshop artisans operating 24/5 tri-shifts with hardware-calibrated EIZO displays, air-gapped security, and zero third-party outsourcing.",
  keywords: [
    "about Picasa Limited",
    "photo editing company Dhaka Bangladesh",
    "Dhaka post-production studio",
    "clipping path company Bangladesh",
    "in-house photo editing team"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/about",
  },
  openGraph: {
    title: "About Picasa Limited | 180+ In-House Artists Dhaka HQ",
    description:
      "Human eyes, steady hands, uncompromising detail. Discover why 109+ global brands trust Picasa's in-house artisans over black-box AI algorithms.",
    url: "https://www.picasalimited.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Picasa Limited | Dhaka Operational Engine",
    description:
      "180+ full-time retouchers, 24/5 tri-shift operations, and air-gapped enterprise asset protection.",
  },
};

const aboutSchema = {
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
          "name": "About",
          "item": "https://www.picasalimited.com/about"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "name": "About Picasa Limited",
      "description": "The history, facility standards, craftsmanship values, and operational team behind Picasa Limited in Dhaka, Bangladesh.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Picasa Limited",
        "foundingDate": "2016",
        "foundingLocation": "Dhaka, Bangladesh",
        "numberOfEmployees": 180,
        "url": "https://www.picasalimited.com"
      }
    }
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
