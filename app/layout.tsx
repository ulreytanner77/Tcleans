import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northside Taproom — Craft Beer & Wood-Fired Bites",
  description:
    "Twenty rotating taps, wood-fired bites, and the warmest corner in the neighborhood. Visit Northside Taproom in Portland, OR.",
  openGraph: {
    title: "Northside Taproom — Craft Beer & Wood-Fired Bites",
    description:
      "Twenty rotating taps, wood-fired bites, and the warmest corner in the neighborhood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
