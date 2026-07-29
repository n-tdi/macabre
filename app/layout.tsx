import type { Metadata } from "next";

import "./globals.css";

import { siteDescription, siteName, siteUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Macabre & Cheese Food Truck | Gothic Comfort Food",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  category: "Food & Drink",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Macabre & Cheese Food Truck | Gothic Comfort Food",
    description: siteDescription,
    url: "/",
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/backgroudns/square.png",
        width: 1254,
        height: 1254,
        alt: "Macabre & Cheese gothic comfort food truck artwork",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macabre & Cheese Food Truck",
    description: "Eat your feelings. Feed your shadows.",
    images: ["/backgroudns/square.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
