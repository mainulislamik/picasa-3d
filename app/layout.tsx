import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Picasa Limited | Specialist Photo & Video Post-Production Studio",
  description: "Enterprise B2B image editing, 100% hand-drawn vector clipping paths ($0.25), ghost mannequin ($0.65), and high-end jewelry retouching by 180+ craftsmen. Guaranteed overnight SLAs.",
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
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Picasa Limited | Specialist Photo & Video Post-Production Studio",
    description: "Enterprise post-production studio powered by 180+ retouchers. Sub-pixel clipping paths and guaranteed overnight SLAs.",
    url: "https://www.picasalimited.com",
    siteName: "Picasa Limited",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Picasa Limited",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
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
      className={`light scroll-smooth ${poppins.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
