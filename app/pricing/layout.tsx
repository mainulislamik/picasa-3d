import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictable B2B Pricing, Volume Tiers & Invoicing",
  description:
    "Transparent unit-rate pricing for high-volume catalogs: clipping path from $0.25, ghost mannequin from $0.65, high-end retouching from $1.20. Zero recurring software fees, volume discounts, Net 30 invoicing.",
  keywords: [
    "clipping path pricing",
    "photo retouching cost per image",
    "ghost mannequin rates",
    "bulk photo editing discounts",
    "ecommerce image editing prices",
    "photo editing invoice Net 30"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/pricing",
  },
  openGraph: {
    title: "Predictable B2B Pricing & Volume Tiers | Picasa Limited",
    description:
      "Calculate your exact production rates with multi-currency dynamic estimator (USD, EUR, GBP). Enterprise volume retainers up to 40% off.",
    url: "https://www.picasalimited.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predictable B2B Pricing & Volume Tiers | Picasa Limited",
    description:
      "Scale-driven photo post-production rates with 4-hour rush SLA and 100% free unlimited revisions.",
  },
};

const pricingFaqSchema = {
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
          "name": "Pricing",
          "item": "https://www.picasalimited.com/pricing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does the Free Trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upload up to 5 representative high-resolution RAW, TIFF, or PSD files. We edit and return them within 12 to 24 hours free of charge with zero credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods and currencies are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept Wire Transfers (SWIFT / ACH), Stripe, Credit/Debit cards (Visa, MasterCard, Amex), and PayPal in USD, EUR, and GBP."
          }
        },
        {
          "@type": "Question",
          "name": "Are there setup fees or monthly subscription minimums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You only pay for the exact volume of images processed. There are zero software fees, zero recurring membership locks, and zero minimum order fees."
          }
        },
        {
          "@type": "Question",
          "name": "Can high-volume e-commerce clients receive Net 30 terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once an enterprise account passes basic credit vetting or after the initial invoice is completed, we grant Net 15 or Net 30 payment terms."
          }
        },
        {
          "@type": "Question",
          "name": "What is your revision and money-back guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer 100% free unlimited revisions until every pixel matches your style guide. If an order cannot be corrected to your satisfaction, we refund the item in full."
          }
        }
      ]
    }
  ]
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {children}
    </>
  );
}
