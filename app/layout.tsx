import type { Metadata, Viewport } from "next";
import { Inter, Hubballi } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gritifi - Strategic, Thoughtful Graphic Design & Visual Identity Development",
  description: "At Gritifi, we create strategic, fresh, and personalized visual identities that speak with clarity and purpose. Through thoughtful design and effective strategy, we help brands communicate with intention, empathy, and creativity - leaving a lasting impact",
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
