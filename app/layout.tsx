import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Picasa Limited | 2026 3D Edition • Precision Post-Production at Enterprise Scale",
  description: "Enterprise B2B image editing, 100% hand-drawn vector clipping paths, ghost mannequin, and high-end jewelry retouching by 180+ craftsmen. Guaranteed overnight SLAs.",
  keywords: [
    "Clipping Path Service",
    "Ghost Mannequin Post Production",
    "High-End Jewelry Retouching",
    "E-commerce Image Editing",
    "Picasa Limited 3D Edition",
    "B2B Post Production Studio",
    "Dhaka Post Production HQ"
  ],
  authors: [{ name: "Picasa Limited" }],
  openGraph: {
    title: "Picasa Limited | 2026 3D Edition • Precision Post-Production",
    description: "Enterprise post-production studio powered by 180+ retouchers. Sub-pixel clipping paths and guaranteed overnight SLAs.",
    url: "https://www.picasalimited.com",
    siteName: "Picasa Limited",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070A11",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070A11] text-[#F8FAFC] antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
