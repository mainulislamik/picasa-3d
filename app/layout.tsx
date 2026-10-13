import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.picasalimited.com"),
  title: {
    default: "Picasa Limited | Specialist Photo & Video Post-Production Studio",
    template: "%s | Picasa Limited",
  },
  description:
    "High-volume enterprise image editing, 100% hand-drawn clipping paths, ghost mannequin, jewelry retouching, and commercial video post-production. Powered by 180+ craftsmen at Dhaka HQ with 4-hour rush SLA.",
  keywords: [
    "clipping path service",
    "photo retouching studio",
    "ghost mannequin photo editing",
    "ecommerce image editing",
    "jewelry retouching service",
    "post-production studio Bangladesh",
    "bulk image editing company",
    "product photo background removal",
    "Picasa Limited Dhaka"
  ],
  authors: [{ name: "Picasa Limited", url: "https://www.picasalimited.com" }],
  creator: "Picasa Limited",
  publisher: "Picasa Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.picasalimited.com",
  },
  openGraph: {
    title: "Picasa Limited | Specialist Photo & Video Post-Production Studio",
    description:
      "Enterprise post-production engine for global brands, fashion retailers, and e-commerce studios. 180+ craftsmen, 5,000+ daily capacity, 4h rush turnaround.",
    url: "https://www.picasalimited.com",
    siteName: "Picasa Limited",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Picasa Limited - Enterprise Post-Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picasa Limited | Specialist Photo & Video Post-Production Studio",
    description:
      "100% hand-drawn clipping paths, ghost mannequin, high-end retouching, and video post-production by 180+ craftsmen at Dhaka HQ.",
    images: ["/og-image.jpg"],
    creator: "@picasalimited",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.picasalimited.com/#organization",
      "name": "Picasa Limited",
      "legalName": "Picasa Limited",
      "url": "https://www.picasalimited.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.picasalimited.com/logo.svg",
        "caption": "Picasa Limited Logo"
      },
      "image": "https://www.picasalimited.com/og-image.jpg",
      "description": "High-volume enterprise image editing, clipping path, ghost mannequin, jewelry retouching, and commercial video post-production studio in Dhaka, Bangladesh.",
      "foundingDate": "2016",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mohammadpur",
        "addressLocality": "Dhaka",
        "postalCode": "1207",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.7658",
        "longitude": "90.3584"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+880-1700-000000",
          "contactType": "customer service",
          "availableLanguage": ["English", "Bengali"],
          "areaServed": "Worldwide"
        }
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 180
      },
      "priceRange": "$0.25 - $10.00",
      "sameAs": [
        "https://www.linkedin.com/company/picasalimited",
        "https://www.facebook.com/picasalimited"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.picasalimited.com/#website",
      "url": "https://www.picasalimited.com",
      "name": "Picasa Limited",
      "publisher": {
        "@id": "https://www.picasalimited.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.picasalimited.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-rose-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
