import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Order Status & SLA Production Tracking",
  description:
    "Track your batch image editing orders in real-time. Enter your Picasa Order ID to monitor active artisan allocation, dual-monitor QC stage, and download ready assets.",
  keywords: [
    "track photo editing order",
    "image order status",
    "Picasa order tracking",
    "clipping path job status"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/track-order",
  },
  openGraph: {
    title: "Live Order Status & SLA Tracking | Picasa Limited",
    description:
      "Real-time telemetry on active studio batches across Mohammadpur Dhaka production floor.",
    url: "https://www.picasalimited.com/track-order",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Order Status & SLA Tracking | Picasa Limited",
    description:
      "Monitor order status from ingestion to final QC delivery.",
  },
};

const trackOrderSchema = {
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
          "name": "Track Order",
          "item": "https://www.picasalimited.com/track-order"
        }
      ]
    }
  ]
};

export default function TrackOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trackOrderSchema) }}
      />
      {children}
    </>
  );
}
