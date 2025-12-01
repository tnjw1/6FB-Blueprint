import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Six-Figure Barber Blueprint",
  description:
    "The blueprint for barbers to build a six-figure business using systems, content, and discipline.",
  openGraph: {
    title: "The Six-Figure Barber Blueprint",
    description:
      "The blueprint for barbers to build a six-figure business using systems, content, and discipline.",
    images: [
      {
        url: "/blueprint_black.jpg",
        width: 1200,
        height: 630,
        alt: "The Six-Figure Barber Blueprint Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Six-Figure Barber Blueprint",
    description:
      "The blueprint for barbers to build a six-figure business using systems, content, and discipline.",
    images: ["/blueprint_black.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-text bg-gradient-to-b from-dark-grey to-black text-neutral-50">
        {children}
      </body>
    </html>
  );
}