import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diamond Painters Ltd — Luxury Painting & Decorating, Central London",
  description:
    "Premium residential and commercial painting and decorating services across Central London. Specialists in sash window restoration, Venetian plastering, and heritage interiors. Serving SW1, SW3, W1, NW3 and surrounding areas.",
  keywords:
    "painters decorators London, luxury painting London, sash window restoration, Venetian plaster London, interior decorating SW1, Diamond Painters",
  openGraph: {
    title: "Diamond Painters Ltd — Luxury Painting & Decorating, Central London",
    description:
      "Premium residential and commercial painting and decorating services across Central London. Specialists in sash window restoration and Venetian plastering.",
    type: "website",
    locale: "en_GB",
    siteName: "Diamond Painters Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Painters Ltd",
    description: "Premium painting & decorating across Central London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
