import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works: 5-Stage Production Pipeline & Enterprise SLAs",
  description:
    "Explore Picasa's high-throughput post-production pipeline: air-gapped cloud ingestion, 180+ full-time Dhaka craftsmen across 24/5 tri-shifts, and dual-monitor 500% pixel audits with guaranteed 4h rush turnaround.",
  keywords: [
    "photo editing workflow",
    "image post production pipeline",
    "clipping path turnaround time",
    "secure cloud photo editing",
    "enterprise photo editing SLA",
    "how to outsource image editing"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/how-it-works",
  },
  openGraph: {
    title: "How It Works: 5-Stage Production Pipeline & SLAs | Picasa Limited",
    description:
      "From raw camera files to pristine retail-ready visuals. Guaranteed 4-hour sprint to 24-hour catalog SLAs backed by bilateral NDA.",
    url: "https://www.picasalimited.com/how-it-works",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works: 5-Stage Production Pipeline | Picasa Limited",
    description:
      "Discover how 180+ craftsmen handle 2,000+ precision assets daily with 99.8% on-time delivery.",
  },
};

const howToSchema = {
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
          "name": "How It Works",
          "item": "https://www.picasalimited.com/how-it-works"
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Picasa Limited Processes Commercial Product Photography",
      "description": "A 5-stage precision post-production pipeline combining secure ingestion, manual pen-tool clipping, layered retouching, and dual-monitor quality control.",
      "totalTime": "PT4H",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Secure File Ingestion & Parsing",
          "text": "Upload raw assets via encrypted web portal, SFTP, Aspera, or direct AWS S3 bucket synchronization."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Artisan Triage & Vector Pen-Tool Paths",
          "text": "Specialist artists plot 100% hand-drawn vector clipping paths at 300%-500% zoom with 0.5px tolerance."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Layered Post-Production & Color Balancing",
          "text": "Garment neck-joints, shadow construction, non-destructive frequency separation, and Delta-E < 1 color swatching."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Dual-Monitor Senior QC Audit",
          "text": "Every asset is inspected against marketplace guidelines (Amazon, Farfetch, Shopify) before release approval."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Automated Cloud Delivery",
          "text": "Final layered PSD, TIFF, or optimized WebP assets are synced back to client storage with instant webhook notification."
        }
      ]
    }
  ]
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  );
}
