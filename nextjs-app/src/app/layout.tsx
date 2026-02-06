import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeWorld Web Services - Building India's Digital Future in Every Native Tongue",
  description:
    "BeWorld Web Services creates culturally rooted mobile apps in regional Indian languages. Discover BeWorld, TelWorld, Bengali Panjika, and Telugu Panchangam apps.",
  keywords:
    "BeWorld, TelWorld, Bengali Panjika, Telugu Panchangam, Indian language apps, regional apps, Bengali social media, Telugu social media, Indian tech startup",
  openGraph: {
    title: "BeWorld Web Services - Regional Language Apps for Bharat",
    description:
      "Building India's digital future in every native tongue with culturally respectful technology",
    type: "website",
    url: "https://www.beworldwebservices.com",
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
