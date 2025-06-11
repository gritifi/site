import type { Metadata, Viewport } from "next";
import { Inter, Hubballi } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gritifi | Strategic Brand Identity Studio for Visionary Brands",
  description: "Build a brand identity that stands out. Gritifi crafts high-end brand identities for ambitious businesses ready to invest in bold, strategic design that drives results.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ['200', '300', '400', '500', '600', '700'],
  display: "swap",
});

const hubballi = Hubballi({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-heading",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hubballi.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
