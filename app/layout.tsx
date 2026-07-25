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
  title: "Kami Decorators Ltd — Luxury Painting & Decorating, North London",
  description:
    "Premium residential and commercial painting and decorating services across North London. Specialists in sash window restoration, Venetian plastering, and heritage interiors. Serving N1, N4, N6, N8, NW3, NW6, NW8 and surrounding areas.",
  keywords:
    "painters decorators North London, luxury painting London, sash window restoration, Venetian plaster London, interior decorating North London, Kami Decorators",
  openGraph: {
    title: "Kami Decorators Ltd — Luxury Painting & Decorating, North London",
    description:
      "Premium residential and commercial painting and decorating services across North London. Specialists in sash window restoration and Venetian plastering.",
    type: "website",
    locale: "en_GB",
    siteName: "Kami Decorators Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kami Decorators Ltd",
    description: "Premium painting & decorating across North London.",
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
