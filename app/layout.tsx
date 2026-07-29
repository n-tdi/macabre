import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://macabreandcheese.com"),
  title: "Macabre & Cheese | Gothic Comfort Food",
  description:
    "Macabre & Cheese is a coming-soon food truck conjuring wicked mac and cheese, enchanted cheesecakes, and comfort food for the beautifully strange.",
  applicationName: "Macabre & Cheese",
  keywords: [
    "Macabre and Cheese",
    "food truck",
    "mac and cheese",
    "cheesecake",
    "gothic food",
  ],
  openGraph: {
    title: "Macabre & Cheese",
    description: "Eat your feelings. Feed your shadows.",
    url: "/",
    siteName: "Macabre & Cheese",
    images: [
      {
        url: "/backgroudns/square.png",
        width: 1254,
        height: 1254,
        alt: "Macabre & Cheese gothic food illustration",
      },
    ],
    type: "website",
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
