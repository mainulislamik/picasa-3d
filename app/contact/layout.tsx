import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact 24/5 Production Desk & Schedule Supervisor Call",
  description:
    "Direct 24/5 access to Picasa Limited's production supervisors and account executives. Connect via live chat, email, phone, or schedule an enterprise discovery call.",
  keywords: [
    "contact Picasa Limited",
    "photo editing support 24/5",
    "request photo editing quote",
    "Dhaka studio production desk",
    "schedule retouching consultation"
  ],
  alternates: {
    canonical: "https://www.picasalimited.com/contact",
  },
  openGraph: {
    title: "Contact 24/5 Production Desk | Picasa Limited",
    description:
      "Speak directly with senior production directors. Immediate response times for rush catalog turnarounds and volume contract inquiries.",
    url: "https://www.picasalimited.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact 24/5 Production Desk | Picasa Limited",
    description:
      "24/5 enterprise support for global e-commerce retailers, photo studios, and creative agencies.",
  },
};

const contactSchema = {
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
          "name": "Contact",
          "item": "https://www.picasalimited.com/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact Picasa Limited",
      "description": "Get in touch with Picasa Limited's 24/5 client support and technical production supervision desk.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Picasa Limited",
        "telephone": "+880-1700-000000",
        "email": "production@picasalimited.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mohammadpur",
          "addressLocality": "Dhaka",
          "postalCode": "1207",
          "addressCountry": "BD"
        }
      }
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
