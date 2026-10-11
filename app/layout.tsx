import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    <html 
      lang="en" 
      className={`dark scroll-smooth ${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#070A11] text-[#F8FAFC] antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
